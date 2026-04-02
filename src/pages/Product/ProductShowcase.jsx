import { Link } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';

export default function ProductShowcase({
  notice,
  onAddToCart,
  onQuantityChange,
  onSelectColor,
  onSelectImage,
  onSelectSize,
  product,
  quantity,
  selectedColor,
  selectedImage,
  selectedSize,
}) {
  return (
    <section className="layout-shell py-16 md:py-20">
      <div className="mb-8">
        <Link
          className="font-headline text-xs font-black uppercase tracking-[0.28em] text-raw-muted transition hover:text-raw-ink"
          to="/shop"
        >
          Back to catalog
        </Link>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <ProductGallery
          product={product}
          selectedImage={selectedImage}
          onSelectImage={onSelectImage}
        />
        <ProductInfo
          notice={notice}
          onAddToCart={onAddToCart}
          onQuantityChange={onQuantityChange}
          onSelectColor={onSelectColor}
          onSelectSize={onSelectSize}
          product={product}
          quantity={quantity}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />
      </div>
    </section>
  );
}
