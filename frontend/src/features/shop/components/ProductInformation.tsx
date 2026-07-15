import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { rawColors, lightTokens, radius } from '@/theme';
import { PRODUCT_SIZE_ORDER } from '../constants/shop.constants';
import { ProductMeta } from './ProductMeta';
import { ProductPrice } from './ProductPrice';
import { ProductDescription } from './ProductDescription';
import type { Product, ProductSize } from '../types';

interface ProductInformationProps {
  product: Product;
}

const LABEL_SX = {
  fontSize:      '0.6875rem',
  fontWeight:    600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color:         rawColors.neutral[500],
  mb:            2.5,
} as const;

export function ProductInformation({ product }: ProductInformationProps) {
  const availableSizes: ProductSize[] = PRODUCT_SIZE_ORDER.filter((size) =>
    product.variants.some((v) => v.size === size),
  );

  return (
    <Box
      component="section"
      aria-labelledby="product-name"
      sx={{ pt: { xs: 6, md: 0 } }}
    >
      <ProductMeta product={product} />

      <Typography
        component="h1"
        id="product-name"
        sx={{
          fontSize:      { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
          fontWeight:    300,
          letterSpacing: '-0.02em',
          lineHeight:    1.1,
          color:         'text.primary',
        }}
      >
        {product.name}
      </Typography>

      <ProductPrice product={product} />

      {/* Colorways — display only */}
      {product.colors.length > 0 && (
        <Box sx={{ mb: 6 }}>
          <Typography component="p" sx={LABEL_SX}>
            Colorway
          </Typography>
          <Box
            sx={{
              display:    'flex',
              flexWrap:   'wrap',
              gap:        3,
              alignItems: 'flex-start',
            }}
          >
            {product.colors.map((color) => (
              <Box
                key={color.id}
                sx={{
                  display:       'flex',
                  flexDirection: 'column',
                  alignItems:    'center',
                  gap:           1,
                }}
              >
                <Box
                  role="img"
                  aria-label={color.name}
                  sx={{
                    width:     24,
                    height:    24,
                    borderRadius: '50%',
                    bgcolor:   color.hex,
                    border:    `1px solid ${lightTokens.border.subtle}`,
                    boxShadow: 'inset 0 0 0 1px rgba(28,27,25,0.06)',
                  }}
                />
                <Typography
                  component="span"
                  sx={{
                    fontSize:      '0.5rem',
                    fontWeight:    600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         rawColors.neutral[500],
                  }}
                >
                  {color.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Sizes — display only */}
      {availableSizes.length > 0 && (
        <Box sx={{ mb: 8 }}>
          <Typography component="p" sx={LABEL_SX}>
            Sizes
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {availableSizes.map((size) => (
              <Box
                key={size}
                sx={{
                  px:            2,
                  py:            0.875,
                  border:        `1px solid ${lightTokens.border.subtle}`,
                  borderRadius:  `${radius.xs}px`,
                  fontSize:      '0.625rem',
                  fontWeight:    600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         'text.secondary',
                  userSelect:    'none',
                }}
              >
                {size}
              </Box>
            ))}
          </Box>
        </Box>
      )}

      <ProductDescription product={product} />
    </Box>
  );
}
