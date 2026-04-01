import { cn } from '../utils/classNames';

const toneStyles = {
  warning: 'bg-raw-warning text-raw-ink border-y-4 border-raw-border',
  inverse: 'bg-raw-ink text-white border-y-4 border-raw-warning',
};

export default function Marquee({ items, tone = 'warning', className }) {
  const repeatedItems = [...items, ...items];

  return (
    <div className={cn('overflow-hidden whitespace-nowrap', toneStyles[tone], className)}>
      <div className="marquee-track flex min-w-max items-center gap-5 py-3">
        {repeatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-5">
            <span className="font-headline text-xs font-black uppercase tracking-[0.28em] sm:text-sm">
              {item}
            </span>
            <span className="h-2 w-2 bg-current" />
          </div>
        ))}
      </div>
    </div>
  );
}
