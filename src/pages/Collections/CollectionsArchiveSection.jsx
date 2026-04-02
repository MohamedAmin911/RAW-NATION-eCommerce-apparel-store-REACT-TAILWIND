import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { buttonStyles } from '../../utils/buttonStyles';

const archiveSpecs = [
  ['Batch', 'RN-2026-A'],
  ['Origin', 'SH-ASIA'],
  ['QC Rank', 'A-Grade'],
  ['Status', 'Active'],
];

export default function CollectionsArchiveSection() {
  return (
    <section className="layout-shell py-16 md:py-24">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="bg-white p-8">
          <p className="eyebrow">Technical Archive</p>
          <h3 className="title-block mt-4 text-4xl">Documented To The Seam</h3>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-raw-muted">
            Every garment in the archive is documented with fabric density, origin notes, and
            batch information. Transparency is part of the design language.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {archiveSpecs.map(([label, value]) => (
              <div key={label} className="border-4 border-raw-border bg-raw-panel p-4">
                <p className="font-headline text-[0.62rem] font-black uppercase tracking-[0.24em] text-raw-muted">
                  {label}
                </p>
                <p className="mt-2 font-headline text-xl font-black uppercase tracking-[-0.05em]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="flex flex-col justify-between bg-raw-warning p-8">
          <div>
            <p className="eyebrow">Join The Nation</p>
            <h3 className="title-block mt-4 text-4xl">Create A Member Build</h3>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-raw-muted">
              Register to save your archive picks, cart state, and upcoming drop alerts.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <Link className={buttonStyles({ variant: 'primary', size: 'lg' })} to="/signup">
              Create account
            </Link>
            <Link className={buttonStyles({ variant: 'outline', size: 'lg' })} to="/shop">
              Shop now
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
