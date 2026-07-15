import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { rawColors, duration, easing } from '@/theme';
import type { Product } from '../types';

interface ProductBreadcrumbProps {
  product: Product;
}

const LINK_SX = {
  fontSize:       '0.6875rem',
  fontWeight:     500,
  letterSpacing:  '0.1em',
  textTransform:  'uppercase',
  color:          rawColors.neutral[500],
  textDecoration: 'none',
  transition:     `color ${duration.fast}ms ${easing.standard}`,
  '&:hover': { color: rawColors.neutral[900] },
  '&:focus-visible': {
    outline:       `2px solid ${rawColors.gold[400]}`,
    outlineOffset: 2,
    borderRadius:  '2px',
  },
} as const;

const SEP_SX = {
  fontSize:   '0.6875rem',
  color:      rawColors.neutral[300],
  mx:         1.5,
  userSelect: 'none',
} as const;

const CURRENT_SX = {
  fontSize:      '0.6875rem',
  fontWeight:    500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color:         rawColors.neutral[700],
} as const;

export function ProductBreadcrumb({ product }: ProductBreadcrumbProps) {
  return (
    <Box
      component="nav"
      aria-label="Breadcrumb"
      sx={{ mb: { xs: 6, md: 8 } }}
    >
      <Box
        component="ol"
        sx={{
          display:    'flex',
          flexWrap:   'wrap',
          alignItems: 'center',
          listStyle:  'none',
          m: 0,
          p: 0,
        }}
      >
        <Box component="li">
          <Box component="a" href="/" sx={LINK_SX}>Home</Box>
        </Box>

        <Box component="li" aria-hidden="true" sx={SEP_SX}>/</Box>

        <Box component="li">
          <Box component="a" href="/shop" sx={LINK_SX}>Shop</Box>
        </Box>

        <Box component="li" aria-hidden="true" sx={SEP_SX}>/</Box>

        <Box component="li">
          <Box component="a" href="/shop" sx={LINK_SX}>{product.season}</Box>
        </Box>

        <Box component="li" aria-hidden="true" sx={SEP_SX}>/</Box>

        <Box component="li">
          <Typography component="span" aria-current="page" sx={CURRENT_SX}>
            {product.name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
