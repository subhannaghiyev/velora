import { Suspense } from 'react';
import Box from '@mui/material/Box';
import { ShopProductView } from './ShopProductView';
import { ProductGridSkeleton } from './ProductGridSkeleton';
import type { Product } from '../types';

export interface ShopGridProps {
  products: Product[];
  isLoading?: boolean;
}

export function ShopGrid({ products, isLoading = false }: ShopGridProps) {
  return (
    <Box
      component="section"
      aria-label="Products"
      sx={{
        px: { xs: 3, md: 6, lg: 10 },
        pb: { xs: 16, md: 24 },
        maxWidth: 1440,
        mx: 'auto',
      }}
    >
      <Suspense fallback={<ProductGridSkeleton />}>
        <ShopProductView products={products} isLoading={isLoading} />
      </Suspense>
    </Box>
  );
}
