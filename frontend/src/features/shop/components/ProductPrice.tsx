import Typography from '@mui/material/Typography';
import type { Product } from '../types';

interface ProductPriceProps {
  product: Product;
}

export function ProductPrice({ product }: ProductPriceProps) {
  const display = new Intl.NumberFormat('en-US', {
    style:                 'currency',
    currency:              product.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <Typography
      component="p"
      sx={{
        fontSize:      { xs: '1.25rem', md: '1.5rem' },
        fontWeight:    400,
        letterSpacing: '-0.01em',
        color:         'text.primary',
        mt:  3,
        mb:  { xs: 6, md: 8 },
      }}
    >
      {display}
    </Typography>
  );
}
