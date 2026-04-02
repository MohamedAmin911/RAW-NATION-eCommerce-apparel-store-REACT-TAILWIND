import { Link } from 'react-router-dom';
import { buttonStyles } from '../../utils/buttonStyles';

export default function AboutPhilosophy() {
  return (
    <section className="grid border-b-4 border-raw-border lg:grid-cols-2">
      <div className="layout-shell py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">The Philosophy</p>
          <h2 className="title-block mt-4 text-5xl">Strength In The Unfinished</h2>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-raw-muted sm:text-base">
            RAW NATION is not a fashion brand. It is an industrial response to a saturated world.
            We strip away the noise to find the structural remains of style.
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-raw-muted sm:text-base">
            Our silhouettes are architectural, our colors are binary, and our intent is absolute.
            Every seam is a blueprint and every garment is an artifact.
          </p>
          <div className="mt-8">
            <Link className={buttonStyles({ variant: 'primary' })} to="/shop">
              Shop the catalog
            </Link>
          </div>
        </div>
      </div>
      <div className="relative min-h-105 overflow-hidden bg-black">
        <img
          alt="Concrete texture"
          className="h-full w-full object-cover opacity-85"
          src="/media/raw-nation/about-concrete.jpg"
        />
        <div className="absolute bottom-8 left-8 right-8 border-4 border-raw-warning bg-black/60 p-6 text-white backdrop-blur-sm">
          <p className="title-block text-3xl">"Strength In The Unfinished."</p>
        </div>
      </div>
    </section>
  );
}
