const specs = [
  ['Density', '500 GSM'],
  ['Origin', 'Berlin'],
  ['Stitch', 'Triple'],
  ['Palette', 'Binary'],
];

export default function AboutHardware() {
  return (
    <section className="bg-raw-ink py-16 text-white md:py-24">
      <div className="layout-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="frame-panel overflow-hidden border-raw-warning bg-raw-night-soft">
          <img
            alt="Heavy machinery"
            className="h-full w-full object-cover"
            src="/media/raw-nation/about-hardware.jpg"
          />
        </div>
        <div>
          <p className="eyebrow text-raw-warning">Technical Spec V2.0</p>
          <h2 className="title-block mt-4 text-5xl sm:text-6xl">The Hardware</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map(([label, value]) => (
              <div key={label}>
                <p className="font-headline text-[0.62rem] font-black uppercase tracking-[0.28em] text-white/45">
                  {label}
                </p>
                <p className="mt-2 font-headline text-2xl font-black uppercase tracking-[-0.05em]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
