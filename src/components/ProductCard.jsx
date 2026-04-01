import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/currency';
import Button from './Button';
import Card from './Card';

export default function ProductCard({ product, onAddToCart, showCollection = false }) {
  const { getItemQuantity } = useCart();
  const quantityInCart = getItemQuantity(product.id);

  return (
    <Card className="flex h-full flex-col overflow-hidden bg-white">
      <Link className="group block" to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-raw-panel">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 transition-snappy group-hover:scale-105"
            src={product.image}
          />
          {product.badge ? (
            <span className="absolute left-4 top-4 border-2 border-raw-border bg-raw-warning px-3 py-1 font-headline text-[0.62rem] font-black uppercase tracking-[0.2em]">
              {product.badge}
            </span>
          ) : null}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-5 flex-1">
          {showCollection ? (
            <p className="mb-2 font-headline text-[0.62rem] font-black uppercase tracking-[0.28em] text-raw-warning-deep">
              {product.collection}
            </p>
          ) : null}
          <Link to={`/product/${product.id}`}>
            <h3 className="title-block text-2xl">{product.name}</h3>
          </Link>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-raw-muted">
            {product.shortDescription}
          </p>
        </div>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="font-headline text-xl font-black uppercase tracking-[-0.05em]">
              {formatCurrency(product.price)}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-raw-muted">
              {product.category}
            </p>
          </div>
          {quantityInCart ? (
            <p className="border-2 border-raw-border bg-raw-panel px-2 py-1 font-headline text-[0.62rem] font-black uppercase tracking-[0.24em]">
              In cart x{quantityInCart}
            </p>
          ) : null}
        </div>
        <Button fullWidth onClick={() => onAddToCart(product)}>
          Add to cart
        </Button>
      </div>
    </Card>
  );
}
