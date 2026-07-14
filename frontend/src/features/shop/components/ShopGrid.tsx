import Box from '@mui/material/Box';
import { ShopProductView } from './ShopProductView';
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
      <ShopProductView products={products} isLoading={isLoading} />
    </Box>
  );
}
