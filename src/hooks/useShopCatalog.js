import { startTransition, useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react';

function buildInitialFilters(searchParams, maxPrice) {
  return {
    search: searchParams.get('search') ?? '',
    category: searchParams.get('category') ?? 'All',
    collection: searchParams.get('collection') ?? 'All',
    sort: searchParams.get('sort') ?? 'featured',
    maxPrice: Number(searchParams.get('maxPrice') ?? maxPrice),
  };
}

export function useShopCatalog(products, searchParams) {
  const maxPrice = useMemo(
    () => Math.max(...products.map((product) => product.price)),
    [products],
  );

  const [visibleCount, setVisibleCount] = useState(6);
  const [filters, setFilters] = useState(() => buildInitialFilters(searchParams, maxPrice));
  const deferredSearch = useDeferredValue(filters.search);

  useEffect(() => {
    setVisibleCount(6);
  }, [filters.category, filters.collection, filters.maxPrice, filters.search, filters.sort]);

  const updateFilter = useCallback((field, value) => {
    startTransition(() => {
      setFilters((currentFilters) => ({
        ...currentFilters,
        [field]: value,
      }));
    });
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      search: '',
      category: 'All',
      collection: 'All',
      sort: 'featured',
      maxPrice,
    });
  }, [maxPrice]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = deferredSearch.trim().toLowerCase();
    const catalog = products.filter((product) => {
      const haystack =
        `${product.name} ${product.collection} ${product.category} ${product.description}`.toLowerCase();
      const matchesSearch = !normalizedSearch || haystack.includes(normalizedSearch);
      const matchesCategory = filters.category === 'All' || product.category === filters.category;
      const matchesCollection =
        filters.collection === 'All' || product.collection === filters.collection;
      const matchesPrice = product.price <= filters.maxPrice;

      return matchesSearch && matchesCategory && matchesCollection && matchesPrice;
    });

    switch (filters.sort) {
      case 'newest':
        return [...catalog].sort((first, second) => Number(second.newArrival) - Number(first.newArrival));
      case 'price-low':
        return [...catalog].sort((first, second) => first.price - second.price);
      case 'price-high':
        return [...catalog].sort((first, second) => second.price - first.price);
      case 'name':
        return [...catalog].sort((first, second) => first.name.localeCompare(second.name));
      default:
        return [...catalog].sort((first, second) => {
          const featuredScore = Number(second.featured) - Number(first.featured);
          return featuredScore || second.price - first.price;
        });
    }
  }, [deferredSearch, filters.category, filters.collection, filters.maxPrice, filters.sort, products]);

  const visibleProducts = useMemo(
    () => filteredProducts.slice(0, visibleCount),
    [filteredProducts, visibleCount],
  );

  const loadMore = useCallback(() => {
    setVisibleCount((count) => count + 3);
  }, []);

  return {
    filters,
    maxPrice,
    filteredProducts,
    visibleProducts,
    hasMore: visibleCount < filteredProducts.length,
    updateFilter,
    resetFilters,
    loadMore,
  };
}
