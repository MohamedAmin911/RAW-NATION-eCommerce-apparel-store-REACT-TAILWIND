export default function CollectionsHero() {
  return (
    <section className="layout-shell py-16 md:py-20">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="eyebrow">Collections</p>
          <h1 className="title-block mt-4 text-[clamp(3.5rem,9vw,7.5rem)]">
            Archival Collections
          </h1>
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-raw-muted sm:text-base">
          Exploring the boundaries of industrial utility and urban subculture. Raw materials
          refined for the nation.
        </p>
      </div>
    </section>
  );
}
