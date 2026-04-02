import { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Marquee from '../../components/Marquee';
import { getProductById, products } from '../../data/products';
import { useCartActions } from '../../hooks/useCartActions';
import { useProductSelection } from '../../hooks/useProductSelection';
import ProductEditorial from './ProductEditorial';
import ProductNotFound from './ProductNotFound';
import RelatedProducts from './RelatedProducts';
import ProductShowcase from './ProductShowcase';

export default function Product() {
  const { id } = useParams();
  const { addConfiguredItem, quickAddItem } = useCartActions();
  const product = getProductById(id);
  const {
    selectedImage,
    selectedSize,
    selectedColor,
    quantity,
    notice,
    cartOptions,
    setSelectedImage,
    setSelectedSize,
    setSelectedColor,
    setQuantity,
    showNotice,
  } = useProductSelection(product);

  const relatedProducts = useMemo(
    () => {
      if (!product) {
        return [];
      }

      return products
        .filter((candidate) => candidate.id !== product.id)
        .filter(
          (candidate) =>
            candidate.collection === product.collection || candidate.category === product.category,
        )
        .slice(0, 4);
    },
    [product],
  );

  const handleAddToCart = useCallback(() => {
    if (!product || !cartOptions) {
      return;
    }

    addConfiguredItem(product, cartOptions);
    showNotice(`${product.name} added to your cart.`);
  }, [addConfiguredItem, cartOptions, product, showNotice]);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <>
      <Marquee
        items={[
          'Limited stock',
          product.collection,
          'Global shipping available',
          '14 day returns',
        ]}
      />
      <ProductShowcase
        notice={notice}
        onAddToCart={handleAddToCart}
        onQuantityChange={(nextQuantity) => setQuantity(Math.max(1, nextQuantity))}
        onSelectColor={setSelectedColor}
        onSelectImage={setSelectedImage}
        onSelectSize={setSelectedSize}
        product={product}
        quantity={quantity}
        selectedColor={selectedColor}
        selectedImage={selectedImage}
        selectedSize={selectedSize}
      />
      <ProductEditorial product={product} />
      <RelatedProducts items={relatedProducts} onAddToCart={quickAddItem} />
    </>
  );
}
