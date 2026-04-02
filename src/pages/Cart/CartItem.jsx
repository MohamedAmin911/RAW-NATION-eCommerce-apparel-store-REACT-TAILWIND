import { formatCurrency } from '../../utils/currency';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <article className="frame-panel grid gap-6 bg-white p-4 shadow-frame md:grid-cols-[220px_1fr] md:p-0">
      <div className="overflow-hidden bg-raw-panel">
        <img alt={item.name} className="h-full w-full object-cover" src={item.image} />
      </div>
      <div className="flex flex-col justify-between gap-6 p-2 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="title-block text-3xl">{item.name}</h3>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-raw-muted">
              {item.color} / size {item.size} / {item.collection}
            </p>
          </div>
          <p className="font-headline text-xl font-black uppercase tracking-[-0.05em]">
            {formatCurrency(item.price)}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex w-fit border-4 border-raw-border bg-white">
            <button className="px-4 py-3 font-headline text-lg font-black" onClick={() => onUpdateQuantity(item.quantity - 1)} type="button">
              -
            </button>
            <span className="border-x-4 border-raw-border px-5 py-3 font-headline text-lg font-black">
              {String(item.quantity).padStart(2, '0')}
            </span>
            <button className="px-4 py-3 font-headline text-lg font-black" onClick={() => onUpdateQuantity(item.quantity + 1)} type="button">
              +
            </button>
          </div>
          <button
            className="font-headline text-xs font-black uppercase tracking-[0.24em] text-raw-muted transition hover:text-[#b42318]"
            onClick={onRemove}
            type="button"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
