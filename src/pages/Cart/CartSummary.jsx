import Button from '../../components/Button';
import { formatCurrency } from '../../utils/currency';

export default function CartSummary({ subtotal, discount, shipping, tax, total, itemCount, onCheckout }) {
  return (
    <div className="space-y-6 lg:sticky lg:top-28">
      <div className="frame-panel bg-raw-ink p-6 text-white shadow-hard md:p-8">
        <h2 className="title-block text-4xl">Summary</h2>
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-headline text-xs font-black uppercase tracking-[0.24em] text-white/60">
              Items ({itemCount})
            </span>
            <span className="font-headline text-lg font-black">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-headline text-xs font-black uppercase tracking-[0.24em] text-white/60">
              Discount
            </span>
            <span className="font-headline text-lg font-black">{formatCurrency(discount)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-headline text-xs font-black uppercase tracking-[0.24em] text-white/60">
              Shipping
            </span>
            <span className="font-headline text-lg font-black">{formatCurrency(shipping)}</span>
          </div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-headline text-xs font-black uppercase tracking-[0.24em] text-white/60">
              Tax
            </span>
            <span className="font-headline text-lg font-black">{formatCurrency(tax)}</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="font-headline text-xl font-black uppercase tracking-[-0.05em]">Total</span>
            <span className="font-headline text-3xl font-black uppercase tracking-[-0.05em]">
              {formatCurrency(total)}
            </span>
          </div>
        </div>
        <Button className="mt-8" fullWidth size="lg" onClick={onCheckout}>
          Checkout now
        </Button>
        <p className="mt-6 text-center font-headline text-[0.62rem] font-black uppercase tracking-[0.24em] text-white/50">
          Payments secured by global encryption protocols.
        </p>
      </div>
      <div className="frame-panel bg-white p-6 shadow-frame">
        <h3 className="font-headline text-sm font-black uppercase tracking-[0.24em] text-raw-muted">
          Shipping info
        </h3>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-raw-muted">
          Orders above $220 ship free. Every parcel leaves our Berlin hub within 48 hours and uses
          recycled industrial polymer packaging.
        </p>
      </div>
    </div>
  );
}
