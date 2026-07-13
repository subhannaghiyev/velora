import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { ProductCard, type ProductCardData } from './ProductCard';

const FEATURED_PRODUCTS: ProductCardData[] = [
  {
    id: '01',
    category: 'Outerwear',
    name: 'Tailored Linen Jacket',
    price: '$420',
    href: '/shop/tailored-linen-jacket',
    src: '/images/products/velora_ss26_linen-jacket_front_natural_v1.webp',
  },
  {
    id: '02',
    category: 'Knitwear',
    name: 'Merino Knit Pullover',
    price: '$280',
    href: '/shop/merino-knit-pullover',
  },
  {
    id: '03',
    category: 'Bottoms',
    name: 'Wide-Leg Trousers',
    price: '$195',
    href: '/shop/wide-leg-trousers',
  },
  {
    id: '04',
    category: 'Tops',
    name: 'Silk Blend Shirt',
    price: '$310',
    href: '/shop/silk-blend-shirt',
  },
];

export function FeaturedCollectionSection() {
  return (
    <Box
      component="section"
      aria-labelledby="featured-collection-heading"
      sx={{
        py: { xs: 16, md: 24, lg: 32 },
        px: { xs: 3, md: 6, lg: 10 },
      }}
    >
      <Box sx={{ maxWidth: 1440, mx: 'auto' }}>
        {/* Header row */}
        <Reveal>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'flex-end' },
              justifyContent: 'space-between',
              gap: 3,
              mb: { xs: 10, md: 16 },
            }}
          >
            <Box>
              <Typography
                component="p"
                sx={{
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                Featured
              </Typography>
              <Typography
                component="h2"
                id="featured-collection-heading"
                sx={{
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: 'text.primary',
                  lineHeight: 1.15,
                }}
              >
                This Season
              </Typography>
            </Box>

            <Box
              component="a"
              href="/shop"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'text.secondary',
                textDecoration: 'none',
                borderBottom: '1px solid',
                borderColor: 'text.secondary',
                pb: 0.5,
                transition: 'color 150ms ease, border-color 150ms ease',
                '&:hover': { color: 'text.primary', borderColor: 'text.primary' },
                flexShrink: 0,
                alignSelf: { xs: 'flex-start', sm: 'auto' },
              }}
            >
              View All
            </Box>
          </Box>
        </Reveal>

        {/* Product grid */}
        <Stagger staggerDelay={0.09}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: { xs: 2, md: 4 },
            }}
          >
            {FEATURED_PRODUCTS.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard {...product} />
              </StaggerItem>
            ))}
          </Box>
        </Stagger>
      </Box>
    </Box>
  );
}
