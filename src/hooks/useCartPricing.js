import { useCallback, useMemo, useState } from 'react';
import { formatCurrency } from '../utils/currency';

const couponRates = {
  RAW10: 0.1,
  VOID15: 0.15,
};

export function useCartPricing(items, subtotal) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [feedback, setFeedback] = useState('');

  const itemCount = useMemo(
    () => items.reduce((count, item) => count + item.quantity, 0),
    [items],
  );

  const checkoutItems = useMemo(
    () =>
      items.map((item) => ({
        key: item.key,
        label: `${item.name} x${item.quantity}`,
        lineTotal: formatCurrency(item.price * item.quantity),
      })),
    [items],
  );

  const discountRate = couponRates[appliedCoupon] ?? 0;
  const discount = subtotal * discountRate;
  const discountedSubtotal = subtotal - discount;
  const shipping = items.length ? (discountedSubtotal > 220 ? 0 : 18) : 0;
  const tax = discountedSubtotal * 0.08;
  const total = discountedSubtotal + shipping + tax;

  const updateCouponCode = useCallback((value) => {
    setCouponCode(value);
    setFeedback('');
  }, []);

  const applyCoupon = useCallback(() => {
    const normalizedCode = couponCode.trim().toUpperCase();

    if (!normalizedCode) {
      setFeedback('Enter a voucher code first.');
      setAppliedCoupon('');
      return;
    }

    if (!couponRates[normalizedCode]) {
      setFeedback('That code is not recognized by the archive.');
      setAppliedCoupon('');
      return;
    }

    setAppliedCoupon(normalizedCode);
    setFeedback(`${normalizedCode} applied successfully.`);
  }, [couponCode]);

  return {
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
  };
}
