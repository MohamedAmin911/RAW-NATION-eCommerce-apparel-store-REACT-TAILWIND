import { useEffect, useState } from 'react';
import { CartContext } from './CartStateContext';
const STORAGE_KEY = 'raw-nation-cart';

function getInitialItems() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
}

function createItemKey(id, size, color) {
  return [id, size, color].filter(Boolean).join('--');
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(getInitialItems);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, options = {}) => {
    const size = options.size ?? product.sizes?.[0] ?? 'One Size';
    const color = options.color ?? product.colors?.[0]?.name ?? 'Standard';
    const quantity = Math.max(1, Number(options.quantity) || 1);
    const key = createItemKey(product.id, size, color);

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === key);

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      return [
        ...currentItems,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          image: options.image ?? product.image,
          quantity,
          size,
          color,
          collection: product.collection,
          category: product.category,
        },
      ];
    });
  };

  const removeItem = (key) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== key));
  };

  const updateQuantity = (key, nextQuantity) => {
    const normalizedQuantity = Math.max(1, Number(nextQuantity) || 1);

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.key === key ? { ...item, quantity: normalizedQuantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = items.length ? (subtotal > 220 ? 0 : 18) : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const getItemQuantity = (productId) =>
    items
      .filter((item) => item.id === productId)
      .reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        shipping,
        tax,
        total,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
