import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import CollectionSpotlight from '../../components/CollectionSpotlight';
import SectionHeader from '../../components/SectionHeader';
import { buttonStyles } from '../../utils/buttonStyles';

export default function Featured({ collections }) {
  const [primaryCollection, secondaryCollection] = collections;

  return (
    <section className="layout-shell pb-16 md:pb-24">
      <SectionHeader
        eyebrow="Collections"
        title="Curated Capsules"
        description="Each RAW NATION line explores a distinct tension between utility, silence, and industrial expression."
      />
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <CollectionSpotlight className="min-h-130" collection={primaryCollection} />
        <div className="grid gap-6">
          <CollectionSpotlight collection={secondaryCollection} compact tagTone="light" />
          <Card className="grid gap-6 bg-raw-ink p-8 text-white">
            <div>
              <p className="eyebrow text-raw-warning">The Manifesto</p>
              <h3 className="title-block mt-3 text-4xl">Built On The Ruins Of The Ordinary</h3>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-white/70">
                RAW NATION strips fashion back to material strength, silhouette discipline, and
                brutal honesty.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className={buttonStyles({ variant: 'primary' })} to="/about">
                Read the manifesto
              </Link>
              <Link
                className={buttonStyles({
                  variant: 'outline',
                  className: 'text-white hover:text-raw-ink',
                })}
                to="/collections"
              >
                View archive
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
