import { Link } from 'react-router-dom';
import { buttonStyles } from '../utils/buttonStyles';

const footerLinks = [
  { label: 'Instagram', to: '/about' },
  { label: 'TikTok', to: '/collections' },
  { label: 'Customer Service', to: '/signup' },
  { label: 'Privacy', to: '/about' },
];

export default function Footer({ compact = false }) {
  return (
    <footer className="border-t-4 border-raw-warning bg-raw-night text-white">
      <div className="layout-shell py-12">
        {!compact ? (
          <div className="mb-10 flex flex-col gap-6 border-b-4 border-white/10 pb-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-raw-warning">Join The Nation</p>
              <h3 className="title-block mt-3 text-3xl sm:text-4xl">Register For Early Access To The Next Drop</h3>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-raw-night-copy sm:text-base">
                Secure release notes, industrial archive stories, and the first signal whenever a new
                capsule lands.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className={buttonStyles({ variant: 'primary', size: 'lg' })} to="/signup">
                Create account
              </Link>
              <Link
                className={buttonStyles({
                  variant: 'outline',
                  size: 'lg',
                  className: 'text-white hover:text-raw-ink',
                })}
                to="/collections"
              >
                View archive
              </Link>
            </div>
          </div>
        ) : null}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-headline text-xl font-black uppercase tracking-[-0.08em] text-raw-warning">
              RAW NATION
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-white/55">
              © RAW NATION. MADE IN HELL.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                className="text-xs font-bold uppercase tracking-[0.24em] text-white/55 transition hover:text-raw-warning"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
