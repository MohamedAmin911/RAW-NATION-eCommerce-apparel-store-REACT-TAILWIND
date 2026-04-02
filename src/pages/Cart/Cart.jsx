import { startTransition, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Marquee from '../../components/Marquee';
import Modal from '../../components/Modal';
import { useCart } from '../../hooks/useCart';
import { useCartPricing } from '../../hooks/useCartPricing';
import { buttonStyles } from '../../utils/buttonStyles';
import { formatCurrency } from '../../utils/currency';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

export default function Cart() {
  const navigate = useNavigate();
  const { items, subtotal, clearCart, removeItem, updateQuantity } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const {
    couponCode,
    feedback,
    itemCount,
    checkoutItems,
    discount,
    shipping,
    tax,
    total,
    updateCouponCode,
    applyCoupon,
  } = useCartPricing(items, subtotal);

  const confirmCheckout = () => {
    clearCart();
    setCheckoutOpen(false);
    startTransition(() => navigate('/shop'));
  };

  if (!items.length) {
    return (
      <>
        <Marquee items={['Your cart is empty', 'Start shopping', 'Heavyweight cotton only', 'New drop live now']} />
        <section className="layout-shell py-20">
          <Card className="bg-white p-10 text-center">
            <p className="eyebrow">The Void Is Empty</p>
            <h1 className="title-block mt-4 text-5xl">Your cart has no active build.</h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-raw-muted">
              Add pieces from the catalog to begin a new RAW NATION loadout.
            </p>
            <div className="mt-8">
              <Link className={buttonStyles({ variant: 'primary', size: 'lg' })} to="/shop">
                Start shopping
              </Link>
            </div>
          </Card>
        </section>
      </>
    );
  }

  return (
    <>
      <Marquee items={['Secure transactions only', 'Raw cotton', 'Global shipping', 'Limited quantities']} />
      <section className="layout-shell py-16 md:py-20">
        <div className="mb-10 border-l-8 border-raw-border pl-5">
          <p className="eyebrow">Your Cart</p>
          <h1 className="title-block mt-3 text-5xl sm:text-6xl">Checkout The Build</h1>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            {items.map((item) => (
              <CartItem
                key={item.key}
                item={item}
                onRemove={() => removeItem(item.key)}
                onUpdateQuantity={(nextQuantity) => updateQuantity(item.key, nextQuantity)}
              />
            ))}
            <Card className="bg-white p-6">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <Input
                  helperText={feedback || 'Use RAW10 or VOID15'}
                  label="Discount code / voucher"
                  onChange={(event) => updateCouponCode(event.target.value)}
                  placeholder="Enter code"
                  value={couponCode}
                  variant="panel"
                />
                <div className="sm:self-end">
                  <button className={buttonStyles({ variant: 'inverse' })} onClick={applyCoupon} type="button">
                    Apply
                  </button>
                </div>
              </div>
            </Card>
          </div>
          <CartSummary
            discount={discount}
            itemCount={itemCount}
            onCheckout={() => setCheckoutOpen(true)}
            shipping={shipping}
            subtotal={subtotal}
            tax={tax}
            total={total}
          />
        </div>
      </section>
      <Modal
        description="This project uses a simulated checkout so you can validate the full UX flow end-to-end."
        onClose={() => setCheckoutOpen(false)}
        open={checkoutOpen}
        title="Confirm Checkout"
      >
        <div className="space-y-4">
          {checkoutItems.map((item) => (
            <div key={item.key} className="flex items-center justify-between border-b border-black/10 pb-3">
              <span className="font-headline text-xs font-black uppercase tracking-[0.24em] text-raw-muted">
                {item.label}
              </span>
              <span className="font-headline text-lg font-black">{item.lineTotal}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2">
            <span className="font-headline text-sm font-black uppercase tracking-[0.24em] text-raw-muted">
              Grand total
            </span>
            <span className="font-headline text-3xl font-black">{formatCurrency(total)}</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button className={buttonStyles({ variant: 'primary', size: 'lg' })} onClick={confirmCheckout} type="button">
            Complete checkout
          </button>
          <button
            className={buttonStyles({ variant: 'outline', size: 'lg' })}
            onClick={() => setCheckoutOpen(false)}
            type="button"
          >
            Continue shopping
          </button>
        </div>
      </Modal>
    </>
  );
}
