import Button from '../../components/Button';
import Input from '../../components/Input';
import { formatCurrency } from '../../utils/currency';

export default function Filters({
  categories,
  collections,
  filters,
  maxPrice,
  onChange,
  onReset,
  productCount,
}) {
  return (
    <section className="frame-panel shadow-frame bg-white p-6 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <Input
          helperText={`${productCount} products matched`}
          label="Search the catalog"
          onChange={(event) => onChange('search', event.target.value)}
          placeholder="Search by product or collection"
          value={filters.search}
          variant="panel"
        />
        <label className="block">
          <span className="mb-2 block font-headline text-[0.62rem] font-black uppercase tracking-[0.28em] text-raw-muted">
            Collection
          </span>
          <select
            className="w-full border-4 border-raw-border bg-white px-4 py-3 font-headline text-sm font-black uppercase tracking-[0.18em] outline-none transition focus:bg-raw-warning/10"
            onChange={(event) => onChange('collection', event.target.value)}
            value={filters.collection}
          >
            {collections.map((collection) => (
              <option key={collection} value={collection}>
                {collection}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block font-headline text-[0.62rem] font-black uppercase tracking-[0.28em] text-raw-muted">
            Sort
          </span>
          <select
            className="w-full border-4 border-raw-border bg-white px-4 py-3 font-headline text-sm font-black uppercase tracking-[0.18em] outline-none transition focus:bg-raw-warning/10"
            onChange={(event) => onChange('sort', event.target.value)}
            value={filters.sort}
          >
            <option value="featured">Featured First</option>
            <option value="newest">Newest First</option>
            <option value="price-low">Price Low To High</option>
            <option value="price-high">Price High To Low</option>
            <option value="name">Alphabetical</option>
          </select>
        </label>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => {
          const active = filters.category === category;

          return (
            <button
              key={category}
              className={`border-4 px-4 py-3 font-headline text-xs font-black uppercase tracking-[0.24em] transition duration-150 transition-snappy ${
                active
                  ? 'border-raw-border bg-raw-warning text-raw-ink'
                  : 'border-raw-border bg-white text-raw-ink hover:bg-raw-panel'
              }`}
              onClick={() => onChange('category', category)}
              type="button"
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div className="mb-2 flex items-center justify-between font-headline text-[0.62rem] font-black uppercase tracking-[0.28em] text-raw-muted">
            <span>Price ceiling</span>
            <span>{formatCurrency(filters.maxPrice)}</span>
          </div>
          <input
            className="h-3 w-full cursor-pointer appearance-none bg-raw-panel accent-black"
            max={maxPrice}
            min="50"
            onChange={(event) => onChange('maxPrice', Number(event.target.value))}
            step="5"
            type="range"
            value={filters.maxPrice}
          />
        </div>
        <Button variant="outline" onClick={onReset}>
          Reset filters
        </Button>
      </div>
    </section>
  );
}
