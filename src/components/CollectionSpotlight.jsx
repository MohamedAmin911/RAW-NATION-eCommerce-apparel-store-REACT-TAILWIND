import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/classNames';

const tagToneStyles = {
  warning: 'border-raw-warning text-white',
  light: 'border-white text-white',
};

export default function CollectionSpotlight({
  collection,
  className,
  compact = false,
  tagTone = 'warning',
}) {
  return (
    <Link
      className={cn('group relative overflow-hidden border-4 border-raw-border', compact ? 'min-h-62.5' : 'min-h-105', className)}
      to={`/shop?collection=${encodeURIComponent(collection.name)}`}
    >
      <img
        alt={collection.name}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 transition-snappy group-hover:scale-105"
        src={collection.image}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-8 text-white">
        <p
          className={cn(
            'mb-4 inline-flex w-fit border-2 bg-black px-3 py-1 font-headline text-[0.62rem] font-black uppercase tracking-[0.2em]',
            tagToneStyles[tagTone],
          )}
        >
          {collection.tag}
        </p>
        <h3 className={cn('title-block', compact ? 'text-4xl' : 'text-5xl sm:text-6xl')}>
          {collection.name}
        </h3>
        <p className="mt-4 max-w-md text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
          {compact ? collection.highlight : collection.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 font-headline text-sm font-black uppercase tracking-[0.24em] text-raw-warning">
          Discover
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
