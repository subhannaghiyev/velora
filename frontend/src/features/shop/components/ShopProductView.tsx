'use client';

import { useMemo, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import { ProductCard } from './ProductCard';
import { SearchInput } from './SearchInput';
import { ShopToolbar } from './ShopToolbar';
import { EmptyState } from './EmptyState';
import { ProductGridSkeleton } from './ProductGridSkeleton';
import { ShopPagination } from './ShopPagination';
import { filterProducts } from '../utils/filterProducts';
import { searchProducts } from '../utils/searchProducts';
import { sortProducts } from '../utils/sortProducts';
import { paginateProducts } from '../utils/paginateProducts';
import { useShopQueryState } from '../hooks/useShopQueryState';
import { useDebounce } from '@/hooks/useDebounce';
import { SHOP_PRODUCTS_PER_PAGE } from '../constants/shop.constants';
import type { Product } from '../types';

interface ShopProductViewProps {
  products: Product[];
  isLoading?: boolean;
}

export function ShopProductView({ products, isLoading = false }: ShopProductViewProps) {
  const {
    categoryId,
    sort,
    searchQuery,
    page,
    setCategory,
    setSort,
    setSearch,
    setPage,
    setPageSilent,
    reset,
  } = useShopQueryState();

  // Debounce only the filtering step so rapid typing stays smooth.
  // The URL and input display both update immediately via setSearch.
  const debouncedQuery = useDebounce(searchQuery, 300);

  // ── Pipeline: filter → search → sort → paginate ──────────────────────────

  const filteredProducts = useMemo(
    () => filterProducts(products, categoryId),
    [products, categoryId],
  );

  const searchedProducts = useMemo(
    () => searchProducts(filteredProducts, debouncedQuery),
    [filteredProducts, debouncedQuery],
  );

  const sortedProducts = useMemo(
    () => sortProducts(searchedProducts, sort),
    [searchedProducts, sort],
  );

  const { items: pageItems, totalPages, totalCount } = useMemo(
    () => paginateProducts(sortedProducts, page, SHOP_PRODUCTS_PER_PAGE),
    [sortedProducts, page],
  );

  // ── Page clamping ─────────────────────────────────────────────────────────
  // When URL holds a page number that exceeds totalPages (e.g. user edits the
  // URL manually or category filtering reduces the result set), silently
  // replace the URL with the last valid page.
  // This calls router.replace (an external navigation API, NOT setState),
  // so it does not violate the react-hooks/set-state-in-effect rule.
  useEffect(() => {
    if (totalPages > 0 && page > totalPages) {
      setPageSilent(totalPages);
    }
  }, [page, totalPages, setPageSilent]);

  // Clamped page for the pagination UI (avoids a flicker between effect fires).
  const displayPage = Math.min(Math.max(1, page), Math.max(1, totalPages));

  // ── Reset handler ─────────────────────────────────────────────────────────

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      <SearchInput value={searchQuery} onChange={setSearch} />

      <ShopToolbar
        productCount={totalCount}
        category={categoryId}
        onCategory={setCategory}
        sort={sort}
        onSort={setSort}
      />

      {isLoading ? (
        <ProductGridSkeleton />
      ) : pageItems.length === 0 ? (
        <EmptyState onReset={handleReset} />
      ) : (
        <>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: { xs: 2, md: 3, lg: 4 },
            }}
          >
            {pageItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>

          <ShopPagination
            page={displayPage}
            totalPages={totalPages}
            onChange={setPage}
          />
        </>
      )}
    </>
  );
}
