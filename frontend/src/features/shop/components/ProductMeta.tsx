import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { rawColors } from '@/theme';
import { PRODUCT_CATEGORY_LABELS } from '../constants/shop.constants';
import type { Product } from '../types';

interface ProductMetaProps {
  product: Product;
}

const OVERLINE_SX = {
  fontSize: '0.6875rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  lineHeight: 1.5,
} as const;

export function ProductMeta({ product }: ProductMetaProps) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
      <Typography component="p" sx={{ ...OVERLINE_SX, color: 'text.secondary' }}>
        {PRODUCT_CATEGORY_LABELS[product.category]}
      </Typography>
      <Typography component="p" sx={{ ...OVERLINE_SX, color: rawColors.neutral[400] }}>
        {product.season}
      </Typography>
    </Box>
  );
}
