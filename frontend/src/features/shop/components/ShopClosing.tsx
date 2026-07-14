import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function ShopClosing() {
  return (
    <Box
      component="section"
      aria-label="Collection note"
      sx={{
        pt: { xs: 20, md: 32 },
        pb: { xs: 20, md: 32 },
        px: { xs: 3, md: 6, lg: 10 },
        maxWidth: 1440,
        mx: 'auto',
      }}
    >
      <Typography
        component="p"
        sx={{
          fontSize: { xs: '1rem', md: '1.125rem' },
          fontWeight: 400,
          color: 'text.secondary',
          lineHeight: 1.7,
          maxWidth: 560,
        }}
      >
        Each piece ships in a cloth bag with care instructions printed
        on uncoated card. No tissue paper. No unnecessary packaging.
        Just the garment, as it should arrive.
      </Typography>
    </Box>
  );
}
