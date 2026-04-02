export default function ProductEditorial({ product }) {
  return (
    <section className="bg-raw-ink py-16 text-white md:py-24">
      <div className="layout-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow text-raw-warning">Experience The Rawness</p>
          <h2 className="title-block mt-4 text-5xl sm:text-6xl">Built For The Void</h2>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-white/70 sm:text-base">
            {product.description} Every seam, finish, and wash is tuned to feel structural
            instead of decorative.
          </p>
          <div className="mt-8 grid gap-3">
            {product.specs.map((spec) => (
              <div key={spec} className="flex items-center gap-3">
                <span className="h-2 w-2 bg-raw-warning" />
                <span className="font-headline text-xs font-black uppercase tracking-[0.24em] text-white/70">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="frame-panel overflow-hidden border-raw-warning bg-raw-night-soft">
          <img
            alt={`${product.name} editorial detail`}
            className="h-full w-full object-cover"
            src={product.editorialImage}
          />
        </div>
      </div>
    </section>
  );
}
