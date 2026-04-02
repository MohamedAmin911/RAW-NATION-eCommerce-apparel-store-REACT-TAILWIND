import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import ProductCard from '../../components/ProductCard';
import { buttonStyles } from '../../utils/buttonStyles';

export default function ProductGrid({ products, onAddToCart, onLoadMore, hasMore, onReset }) {
  if (!products.length) {
    return (
      <Card className="bg-white p-10 text-center">
        <p className="eyebrow">No Match Found</p>
        <h3 className="title-block mt-4 text-4xl">The Void Is Empty</h3>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-raw-muted">
          No products meet the current filter set. Reset the controls or jump back into the full
          catalog.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button className={buttonStyles({ variant: 'primary' })} onClick={onReset} type="button">
            Reset filters
          </button>
          <Link className={buttonStyles({ variant: 'outline' })} to="/collections">
            Explore collections
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            onAddToCart={onAddToCart}
            product={product}
            showCollection
          />
        ))}
      </div>
      {hasMore ? (
        <div className="mt-12 flex justify-center">
          <button className={buttonStyles({ variant: 'inverse', size: 'lg' })} onClick={onLoadMore} type="button">
            Load more products
          </button>
        </div>
      ) : null}
    </>
  );
}
