import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { cn } from '../utils/classNames';

const links = [
  {
    label: 'Shop',
    to: '/shop',
    matches: (pathname) => pathname.startsWith('/shop') || pathname.startsWith('/product'),
  },
  {
    label: 'Collections',
    to: '/collections',
    matches: (pathname) => pathname.startsWith('/collections'),
  },
  {
    label: 'About',
    to: '/about',
    matches: (pathname) => pathname.startsWith('/about'),
  },
];

export default function Navbar({ minimal = false, backTo = '/shop', backLabel = 'Back to shop' }) {
  const { pathname } = useLocation();
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (minimal) {
    return (
      <header className="sticky top-0 z-50 border-b-4 border-raw-border bg-raw-surface/90 backdrop-blur-xl">
        <div className="layout-shell flex h-20 items-center justify-between">
          <Link className="font-headline text-xl font-black uppercase tracking-[-0.08em]" to="/">
            RAW NATION
          </Link>
          <Link
            className="font-headline text-[0.7rem] font-black uppercase tracking-[0.28em] text-raw-muted transition hover:text-raw-ink"
            to={backTo}
          >
            {backLabel}
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b-4 border-raw-border bg-raw-surface/90 backdrop-blur-xl">
      <div className="layout-shell flex h-20 items-center justify-between">
        <Link className="font-headline text-xl font-black uppercase tracking-[-0.08em] sm:text-2xl" to="/">
          RAW NATION
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = link.matches(pathname);

            return (
              <Link
                key={link.to}
                className={cn(
                  'border-b-4 pb-1 font-headline text-sm font-black uppercase tracking-[0.24em] transition duration-150 transition-snappy hover:text-raw-ink',
                  active ? 'border-raw-border text-raw-ink' : 'border-transparent text-raw-muted',
                )}
                to={link.to}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            aria-label="Search the catalog"
            className="inline-flex h-11 w-11 items-center justify-center border-4 border-transparent transition hover:border-raw-border hover:bg-white"
            to="/shop"
          >
            <Search size={18} strokeWidth={2.6} />
          </Link>
          <Link
            aria-label="View cart"
            className="relative inline-flex h-11 w-11 items-center justify-center border-4 border-transparent transition hover:border-raw-border hover:bg-white"
            to="/cart"
          >
            <ShoppingCart size={18} strokeWidth={2.6} />
            {itemCount ? (
              <span className="absolute -right-1 -top-1 min-w-6 border-2 border-raw-border bg-raw-warning px-1 text-center font-headline text-[0.65rem] font-black">
                {itemCount}
              </span>
            ) : null}
          </Link>
          <button
            aria-expanded={open}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            className="inline-flex h-11 w-11 items-center justify-center border-4 border-transparent transition hover:border-raw-border hover:bg-white md:hidden"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            {open ? <X size={18} strokeWidth={2.6} /> : <Menu size={18} strokeWidth={2.6} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="layout-shell pb-4 md:hidden">
          <div className="frame-panel bg-white p-4 shadow-frame">
            <nav className="flex flex-col gap-3">
              {links.map((link) => {
                const active = link.matches(pathname);

                return (
                  <Link
                    key={link.to}
                    className={cn(
                      'border-b-4 px-1 py-3 font-headline text-xs font-black uppercase tracking-[0.28em]',
                      active ? 'border-raw-border text-raw-ink' : 'border-transparent text-raw-muted',
                    )}
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
