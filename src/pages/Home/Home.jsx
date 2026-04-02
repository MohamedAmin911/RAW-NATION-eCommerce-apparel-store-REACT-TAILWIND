import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Marquee from '../../components/Marquee';
import { useCartActions } from '../../hooks/useCartActions';
import { collections, newArrivals } from '../../data/products';
import { buttonStyles } from '../../utils/buttonStyles';
import Featured from './Featured';
import Hero from './Hero';
import NewArrivals from './NewArrivals';

const hypeItems = [
  'New drop live now',
  'Limited quantities',
  'Free shipping on orders over $220',
  'Industrial grade silhouettes',
];
const featuredCollections = collections.slice(0, 2);

export default function Home() {
  const { quickAddItem } = useCartActions();

  return (
    <>
      <Hero />
      <Marquee items={hypeItems} />
      <NewArrivals onAddToCart={quickAddItem} products={newArrivals} />
      <Featured collections={featuredCollections} />
      <section className="layout-shell pb-16 md:pb-24">
        <Card className="grid gap-8 bg-white p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Join The Resistance</p>
            <h2 className="title-block mt-4 text-4xl sm:text-5xl">Secure The Next Signal Before It Hits Public Release</h2>
            <p className="mt-4 max-w-2xl text-sm font-medium uppercase tracking-[0.16em] text-raw-muted sm:text-base">
              Create an account to save favorites, track every order, and receive early access
              notices for new capsules and artist collaborations.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link className={buttonStyles({ variant: 'primary', size: 'lg' })} to="/signup">
              Create account
            </Link>
            <Link className={buttonStyles({ variant: 'outline', size: 'lg' })} to="/shop">
              Explore the catalog
            </Link>
          </div>
        </Card>
      </section>
    </>
  );
}
