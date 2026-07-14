import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { lightTokens, rawColors, duration, easing, shadowTokens, radius } from '@/theme';
import { PRODUCT_CATEGORY_LABELS } from '../constants/shop.constants';
import type { ProductCardV2Props } from '../types';

export function ProductCard({ product, priority = false }: ProductCardV2Props) {
  const primaryImage = product.images.find((img) => img.isPrimary) ?? product.images[0];

  const priceDisplay = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  const categoryLabel = PRODUCT_CATEGORY_LABELS[product.category];

  return (
    <Box
      component="a"
      href={`/shop/${product.slug}`}
      aria-label={`${product.name} — ${priceDisplay}`}
      sx={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        '& .shop-card-image img': {
          transition: `transform ${duration.slow}ms ${easing.standard}`,
          willChange: 'transform',
        },
        '&:hover .shop-card-image img': {
          transform: 'scale(1.04)',
        },
        '&:hover .shop-card-wrap': {
          boxShadow: shadowTokens.sm,
        },
        '&:focus-visible': {
          outline: 'none',
        },
        '&:focus-visible .shop-card-wrap': {
          outline: `2px solid ${rawColors.gold[400]}`,
          outlineOffset: '3px',
          borderRadius: `${radius.md}px`,
        },
      }}
    >
      <Box
        className="shop-card-wrap"
        sx={{
          bgcolor: 'background.paper',
          border: `1px solid ${lightTokens.border.subtle}`,
          borderRadius: `${radius.md}px`,
          overflow: 'hidden',
          transition: `box-shadow ${duration.fast}ms ${easing.standard}`,
          boxShadow: shadowTokens.xs,
        }}
      >
        {/* Product image — 3:4 portrait per ART_DIRECTION §11 */}
        <Box
          className="shop-card-image"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '3 / 4',
            bgcolor: rawColors.neutral[50],
          }}
        >
          {primaryImage ? (
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt}
              fill
              priority={priority}
              sizes="(max-width: 600px) 50vw, (max-width: 1200px) 33vw, 25vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          ) : (
            <Box
              aria-hidden="true"
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.5,
                border: `1px solid ${rawColors.neutral[200]}`,
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: '0.5625rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: rawColors.neutral[400],
                }}
              >
                Image
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: '0.625rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  color: rawColors.neutral[400],
                  textAlign: 'center',
                  px: 3,
                  lineHeight: 1.5,
                }}
              >
                Reserved for editorial campaign
              </Typography>
            </Box>
          )}
        </Box>

        {/* Product details */}
        <Box sx={{ px: 3, pt: 3, pb: 3 }}>
          <Typography
            component="p"
            sx={{
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'text.secondary',
              mb: 1,
            }}
          >
            {categoryLabel}
          </Typography>

          <Typography
            component="h3"
            sx={{
              fontSize: '0.9375rem',
              fontWeight: 400,
              letterSpacing: '-0.005em',
              color: 'text.primary',
              lineHeight: 1.3,
              mb: 1,
            }}
          >
            {product.name}
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'text.secondary',
            }}
          >
            {priceDisplay}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
