import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buttonStyles } from '../../utils/buttonStyles';

const heroStats = [
  ['500 GSM', 'Heavyweight cotton architecture'],
  ['Global Shipping', 'Berlin dispatch with tracked logistics'],
  ['Sharp Utility', 'Minimal forms and technical detailing'],
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        {/* <img
          alt="dramatic high-contrast fashion photography of a black oversized heavy cotton hoodie on a minimalist grey pedestal in industrial warehouse setting"
          className="w-full  object-bottom opacity-55 "
          src="/media/raw-nation/v4.jpg"
        /> */}
        <video
          aria-hidden="true"
          autoPlay
          className=" w-full object-cover opacity-35"
          loop
          muted
          playsInline
          // poster="/media/raw-nation/hero-model.jpg"
          preload="auto"
        >
          <source src="/media/raw-nation/v5.mp4" type="video/mp4" />
        </video>
        <div className="film-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-black/20 to-black" />
      </div>
      <div className="layout-shell relative flex min-h-[calc(100svh-5rem)] items-center py-20">
        <div className="max-w-4xl animate-fade-up">
          <p className="eyebrow mb-4 text-raw-warning">Industrial Streetwear</p>
          <h1 className="title-block text-[clamp(4rem,11vw,9.75rem)] text-white">
            RAW <span className="text-raw-warning">NATION</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-sm font-medium uppercase tracking-[0.18em] text-white/80 sm:text-base lg:text-lg">
            Structural integrity meets urban chaos. Heavy cotton, tactical layering, and premium
            silhouettes built for the modern nomad.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link className={buttonStyles({ variant: 'primary', size: 'lg' })} to="/shop">
              Shop the drop
              <ArrowRight size={18} />
            </Link>
            <Link
              className={buttonStyles({
                variant: 'outline',
                size: 'lg',
                className: 'border-white text-white hover:border-raw-border hover:text-white',
              })}
              to="/collections"
            >
              View lookbook
            </Link>
          </div>
          <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {heroStats.map(([label, copy]) => (
              <div key={label} className="border-l-4 border-raw-warning pl-4">
                <p className="font-headline text-lg font-black uppercase tracking-[-0.05em]">{label}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
