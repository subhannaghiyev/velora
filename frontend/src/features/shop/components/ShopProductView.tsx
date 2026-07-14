'use client';

import { useState, useMemo, useCallback } from 'react';
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
import { useDebounce } from '@/hooks/useDebounce';
import { SHOP_PRODUCTS_PER_PAGE } from '../constants/shop.constants';
import type { Product } from '../types';
import type { ShopChipCategoryId, ShopSortDisplay } from '../constants/shop.constants';

const DEFAULT_CATEGORY: ShopChipCategoryId = 'all';
const DEFAULT_SORT: ShopSortDisplay = 'Featured';

interface ShopProductViewProps {
  products: Product[];
  isLoading?: boolean;
}

export function ShopProductView({ products, isLoading = false }: ShopProductViewProps) {
  const [categoryId, setCategoryId] = useState<ShopChipCategoryId>(DEFAULT_CATEGORY);
  const [sort, setSort] = useState<ShopSortDisplay>(DEFAULT_SORT);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(searchQuery, 300);

  // Pipeline: filter → search → sort → paginate
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

  // Clamp the displayed page to the valid range without extra state
  const displayPage = Math.min(Math.max(1, page), Math.max(1, totalPages));

  // Category change → reset page to 1
  const handleCategory = useCallback((id: ShopChipCategoryId) => {
    setCategoryId(id);
    setPage(1);
  }, []);

  // Search input change → reset page to 1 (batched with searchQuery update in React 18)
  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
    setPage(1);
  }, []);

  const handleReset = useCallback(() => {
    setCategoryId(DEFAULT_CATEGORY);
    setSort(DEFAULT_SORT);
    setSearchQuery('');
    setPage(1);
  }, []);

  return (
    <>
      <SearchInput value={searchQuery} onChange={handleSearch} />

      <ShopToolbar
        productCount={totalCount}
        category={categoryId}
        onCategory={handleCategory}
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
