import ProductCard from '../../components/ProductCard';
import SectionHeader from '../../components/SectionHeader';

export default function RelatedProducts({ items, onAddToCart }) {
  return (
    <section className="layout-shell py-16 md:py-24">
      <SectionHeader
        eyebrow="Related Gear"
        title="Gear For The Void"
        description="More pieces that share the same silhouette language, material weight, or collection DNA."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} onAddToCart={onAddToCart} product={product} showCollection />
        ))}
      </div>
    </section>
  );
}
