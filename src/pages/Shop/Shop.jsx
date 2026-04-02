import { useSearchParams } from 'react-router-dom';
import Marquee from '../../components/Marquee';
import SectionHeader from '../../components/SectionHeader';
import { categories, collectionNames, products } from '../../data/products';
import { useCartActions } from '../../hooks/useCartActions';
import { useShopCatalog } from '../../hooks/useShopCatalog';
import Filters from './Filters';
import ProductGrid from './ProductGrid';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const { quickAddItem } = useCartActions();
  const {
    filters,
    maxPrice,
    filteredProducts,
    visibleProducts,
    hasMore,
    updateFilter,
    resetFilters,
    loadMore,
  } = useShopCatalog(products, searchParams);

  return (
    <>
      <Marquee
        items={[
          'New drop live now',
          'Free global shipping on orders over $220',
          'Industrial grade streetwear',
          'Heavyweight cotton only',
        ]}
      />
      <section className="layout-shell py-16 md:py-20">
        <SectionHeader
          eyebrow="Product Catalog"
          title="Build Your Uniform"
          description="Filter by category, collection, and price to assemble a full RAW NATION system."
        />
        <Filters
          categories={categories}
          collections={collectionNames}
          filters={filters}
          maxPrice={maxPrice}
          onChange={updateFilter}
          onReset={resetFilters}
          productCount={filteredProducts.length}
        />
        <div className="mt-10">
          <ProductGrid
            hasMore={hasMore}
            onAddToCart={quickAddItem}
            onLoadMore={loadMore}
            onReset={resetFilters}
            products={visibleProducts}
          />
        </div>
      </section>
    </>
  );
}
