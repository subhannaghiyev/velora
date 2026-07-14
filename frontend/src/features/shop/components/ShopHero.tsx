import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function ShopHero() {
  return (
    <Box
      component="section"
      aria-labelledby="shop-hero-heading"
      sx={{
        pt: { xs: 16, md: 24, lg: 32 },
        pb: { xs: 12, md: 16, lg: 20 },
        px: { xs: 3, md: 6, lg: 10 },
        maxWidth: 1440,
        mx: 'auto',
      }}
    >
      <Typography
        component="p"
        sx={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'text.secondary',
          mb: 5,
        }}
      >
        Spring / Summer 2026
      </Typography>

      <Typography
        component="h1"
        id="shop-hero-heading"
        sx={{
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
          fontWeight: 300,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          color: 'text.primary',
          maxWidth: { xs: '100%', md: 760 },
          mb: { xs: 7, md: 9 },
        }}
      >
        The collection
      </Typography>

      <Typography
        component="p"
        sx={{
          fontSize: { xs: '0.9375rem', md: '1rem' },
          fontWeight: 400,
          color: 'text.secondary',
          lineHeight: 1.7,
          maxWidth: 480,
        }}
      >
        Four garments. Each one resolved. Designed to be worn
        together or separately — in any order, for any reason you
        find sufficient.
      </Typography>
    </Box>
  );
}
