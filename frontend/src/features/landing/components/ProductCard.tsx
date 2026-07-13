import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Card } from '@/components/ui/Card';
import { rawColors, lightTokens } from '@/theme';

export interface ProductCardData {
  id: string;
  category: string;
  name: string;
  price: string;
  href: string;
}

export function ProductCard({ category, name, price, href }: ProductCardData) {
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
        {/*
         * Image slot — 3:4 aspect ratio (fashion standard).
         * Future Sprint: replace with Next.js <Image fill alt={`${name} editorial photo`} />.
         */}
        <Box
          sx={{
            aspectRatio: '3 / 4',
            bgcolor: rawColors.neutral[50],
            border: `1px solid ${rawColors.neutral[200]}`,
            borderBottom: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1.5,
          }}
          aria-hidden="true"
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
            Reserved for Editorial Campaign
          </Typography>
        </Box>

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
            sx={{
              fontSize: '0.875rem',
              color: 'text.secondary',
            }}
          >
            {price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
