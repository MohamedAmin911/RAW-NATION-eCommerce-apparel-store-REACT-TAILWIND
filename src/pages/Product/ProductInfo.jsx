import { useState } from 'react';
import Button from '../../components/Button';
import { formatCurrency } from '../../utils/currency';

export default function ProductInfo({
  product,
  selectedSize,
  selectedColor,
  quantity,
  onSelectSize,
  onSelectColor,
  onQuantityChange,
  onAddToCart,
  notice,
}) {
  const [openSection, setOpenSection] = useState('fabric');
  const detailSections = [
    { id: 'fabric', title: 'Fabric & Care', content: product.details.fabric },
    { id: 'fit', title: 'Fit & Construction', content: product.details.fit },
    { id: 'shipping', title: 'Shipping & Returns', content: product.details.shipping },
  ];

  return (
    <div className="space-y-8 lg:sticky lg:top-28">
      <div>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="border-2 border-raw-border px-3 py-1 font-headline text-[0.62rem] font-black uppercase tracking-[0.24em]">
            {product.collection}
          </span>
          {product.badge ? (
            <span className="border-2 border-raw-border bg-raw-warning px-3 py-1 font-headline text-[0.62rem] font-black uppercase tracking-[0.24em]">
              {product.badge}
            </span>
          ) : null}
        </div>
        <h1 className="title-block text-5xl sm:text-6xl">{product.name}</h1>
        <p className="mt-4 max-w-xl text-sm font-medium uppercase tracking-[0.16em] text-raw-muted sm:text-base">
          {product.description}
        </p>
        <p className="mt-6 font-headline text-3xl font-black uppercase tracking-[-0.05em]">
          {formatCurrency(product.price)}
        </p>
      </div>

      <div>
        <p className="mb-3 font-headline text-[0.62rem] font-black uppercase tracking-[0.28em] text-raw-muted">
          Select size
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`border-4 px-4 py-4 font-headline text-sm font-black uppercase tracking-[0.2em] transition ${
                selectedSize === size
                  ? 'border-raw-border bg-raw-ink text-white'
                  : 'border-raw-border bg-white hover:bg-raw-panel'
              }`}
              onClick={() => onSelectSize(size)}
              type="button"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 font-headline text-[0.62rem] font-black uppercase tracking-[0.28em] text-raw-muted">
          Color: {selectedColor.name}
        </p>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              className={`flex items-center gap-3 border-4 px-3 py-2 transition ${
                selectedColor.name === color.name
                  ? 'border-raw-warning bg-raw-warning/10'
                  : 'border-raw-border bg-white hover:bg-raw-panel'
              }`}
              onClick={() => onSelectColor(color)}
              type="button"
            >
              <span className="h-5 w-5 border-2 border-raw-border" style={{ backgroundColor: color.swatch }} />
              <span className="font-headline text-[0.62rem] font-black uppercase tracking-[0.24em]">
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 font-headline text-[0.62rem] font-black uppercase tracking-[0.28em] text-raw-muted">
            Quantity
          </p>
          <div className="inline-flex border-4 border-raw-border bg-white">
            <button className="px-4 py-4 font-headline text-lg font-black" onClick={() => onQuantityChange(quantity - 1)} type="button">
              -
            </button>
            <span className="border-x-4 border-raw-border px-6 py-4 font-headline text-lg font-black">
              {String(quantity).padStart(2, '0')}
            </span>
            <button className="px-4 py-4 font-headline text-lg font-black" onClick={() => onQuantityChange(quantity + 1)} type="button">
              +
            </button>
          </div>
        </div>
        <Button className="sm:flex-1" fullWidth size="lg" onClick={onAddToCart}>
          Add to cart
        </Button>
      </div>

      {notice ? (
        <p className="border-l-4 border-raw-warning bg-raw-panel px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-raw-ink">
          {notice}
        </p>
      ) : null}

      <div className="grid gap-3">
        {product.specs.map((spec) => (
          <div key={spec} className="flex items-center gap-3">
            <span className="h-2 w-2 bg-raw-warning" />
            <span className="font-headline text-xs font-black uppercase tracking-[0.24em] text-raw-muted">
              {spec}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t-4 border-raw-border pt-6">
        {detailSections.map((section) => {
          const isOpen = openSection === section.id;

          return (
            <div key={section.id} className="border-b-2 border-black/10 py-4">
              <button
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setOpenSection(isOpen ? '' : section.id)}
                type="button"
              >
                <span className="font-headline text-sm font-black uppercase tracking-[0.24em]">
                  {section.title}
                </span>
                <span className="font-headline text-xl font-black">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen ? (
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-raw-muted">
                  {section.content}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
