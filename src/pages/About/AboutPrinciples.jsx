import Card from '../../components/Card';

const principles = [
  {
    title: 'Raw Materials',
    copy: 'We source heavyweight cotton and technical blends that feel structural before they feel soft.',
  },
  {
    title: 'Minimal Utility',
    copy: 'Every seam, strap, zipper, and silhouette move has a job. Nothing exists just for decoration.',
  },
  {
    title: 'Made In Hell',
    copy: 'The brand language is born from the grit, pressure, and physicality of industrial landscapes.',
  },
];

export default function AboutPrinciples() {
  return (
    <section className="layout-shell py-16 md:py-24">
      <div className="mb-10">
        <p className="eyebrow">Core Module 01</p>
        <h2 className="title-block mt-4 text-5xl">Principles</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {principles.map((principle) => (
          <Card key={principle.title} className="bg-white p-8 transition hover:bg-raw-warning/10">
            <span className="inline-flex h-14 w-14 items-center justify-center border-4 border-raw-border bg-raw-ink font-headline text-xl font-black text-white">
              {principle.title.charAt(0)}
            </span>
            <h3 className="title-block mt-6 text-3xl">{principle.title}</h3>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-raw-muted">
              {principle.copy}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
