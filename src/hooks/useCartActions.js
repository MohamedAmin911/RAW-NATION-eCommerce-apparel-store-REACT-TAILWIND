import { useCallback } from 'react';
import { useCart } from './useCart';

function getDefaultCartOptions(product) {
  return {
    size: product.sizes?.[0] ?? 'One Size',
    color: product.colors?.[0]?.name ?? 'Standard',
    quantity: 1,
    image: product.image,
  };
}

export function useCartActions() {
  const { addItem } = useCart();

  const addConfiguredItem = useCallback(
    (product, overrides = {}) => {
      if (!product) {
        return;
      }

      addItem(product, {
        ...getDefaultCartOptions(product),
        ...overrides,
      });
    },
    [addItem],
  );

  const quickAddItem = useCallback(
    (product) => {
      addConfiguredItem(product);
    },
    [addConfiguredItem],
  );

  return {
    addConfiguredItem,
    quickAddItem,
  };
}
