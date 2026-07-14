import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';

export interface ShopGridProps {
  products: Product[];
}

export function ShopGrid({ products }: ShopGridProps) {
  return (
    <Box
      component="section"
      aria-labelledby="shop-collection-heading"
      sx={{
        px: { xs: 3, md: 6, lg: 10 },
        pb: { xs: 16, md: 24 },
        maxWidth: 1440,
        mx: 'auto',
      }}
    >
      <Typography
        component="h2"
        id="shop-collection-heading"
        sx={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        All pieces
      </Typography>

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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
}
