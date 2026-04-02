import { Link } from 'react-router-dom';
import { buttonStyles } from '../../utils/buttonStyles';

export default function ProductNotFound() {
  return (
    <section className="layout-shell py-24">
      <div className="frame-panel bg-white p-10 text-center shadow-frame">
        <p className="eyebrow">Missing Product</p>
        <h1 className="title-block mt-4 text-4xl">This build does not exist in the archive.</h1>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-raw-muted">
          Head back to the product catalog to continue assembling your RAW NATION uniform.
        </p>
        <div className="mt-8">
          <Link className={buttonStyles({ variant: 'primary' })} to="/shop">
            Return to shop
          </Link>
        </div>
      </div>
    </section>
  );
}
