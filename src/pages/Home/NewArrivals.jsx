import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import SectionHeader from '../../components/SectionHeader';
import { buttonStyles } from '../../utils/buttonStyles';

export default function NewArrivals({ products, onAddToCart }) {
  return (
    <section className="layout-shell py-16 md:py-24">
      <SectionHeader
        eyebrow="The Latest Releases"
        title="New Arrivals"
        description="Fresh cuts from the latest RAW NATION capsule. Every piece is designed to feel heavy, sharp, and unmistakably deliberate."
        action={
          <Link className={buttonStyles({ variant: 'outline' })} to="/shop?sort=newest">
            See all
          </Link>
        }
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
