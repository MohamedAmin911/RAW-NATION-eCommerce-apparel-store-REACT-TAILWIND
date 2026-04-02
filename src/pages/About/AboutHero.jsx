export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-raw-border bg-raw-surface">
      <img
        alt="Industrial architecture"
        className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
        src="/media/raw-nation/about-architecture.jpg"
      />
      <div className="layout-shell relative flex min-h-[65svh] items-center justify-center py-20 text-center">
        <div className="max-w-4xl">
          <p className="inline-block border-2 border-raw-border bg-raw-warning px-4 py-2 font-headline text-[0.62rem] font-black uppercase tracking-[0.28em]">
            Established In Chaos
          </p>
          <h1 className="title-block mt-6 text-[clamp(3.5rem,9vw,8rem)]">The Manifesto</h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium uppercase tracking-[0.16em] text-raw-muted sm:text-base">
            RAW NATION is a study in strength, utility, and brutal honesty. We build garments with
            the same respect usually reserved for architecture and hardware.
          </p>
        </div>
      </div>
    </section>
  );
}
