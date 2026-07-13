import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Card } from '@/components/ui/Card';
import { lightTokens } from '@/theme';
import { MediaContainer, ProductImage } from '@/features/landing/media';

export interface ProductCardData {
  id: string;
  category: string;
  name: string;
  price: string;
  href: string;
  src?: string;
}

export function ProductCard({ category, name, price, href, src }: ProductCardData) {
  return (
    <Box
      component="a"
      href={href}
      aria-label={`${name} — ${price}`}
      sx={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
    >
      <Card
        interactive
        elevation={0}
        sx={{
          border: `1px solid ${lightTokens.border.subtle}`,
          bgcolor: 'background.paper',
        }}
      >
        {/* Product image — 3:4 portrait (ART_DIRECTION §11) */}
        <MediaContainer sx={{ aspectRatio: '3 / 4' }}>
          <ProductImage
            src={src}
            alt={`${name} — editorial product photo`}
            sizes="(max-width: 900px) 50vw, 25vw"
          />
        </MediaContainer>

        <CardContent sx={{ pt: 3 }}>
          <Typography
            component="p"
            sx={{
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'text.secondary',
              mb: 1,
            }}
          >
            {category}
          </Typography>
          <Typography
            component="h3"
            sx={{
              fontSize: '0.9375rem',
              fontWeight: 400,
              letterSpacing: '-0.005em',
              color: 'text.primary',
              mb: 1,
            }}
          >
            {name}
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: '0.875rem', color: 'text.secondary' }}
          >
            {price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
