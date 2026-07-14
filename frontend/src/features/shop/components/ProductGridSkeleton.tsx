import Box from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';

const SKELETON_COUNT = 8;

export function ProductGridSkeleton() {
  return (
    <Box
      aria-label="Loading products"
      aria-busy="true"
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: { xs: 2, md: 3, lg: 4 },
      }}
    >
      {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
        <Box key={i}>
          <MuiSkeleton
            variant="rectangular"
            animation="pulse"
            sx={{ aspectRatio: '3 / 4', borderRadius: '8px', mb: 0 }}
          />
          <Box sx={{ pt: 2.5, px: 0.5 }}>
            <MuiSkeleton
              variant="text"
              animation="pulse"
              width="38%"
              sx={{ fontSize: '0.625rem', mb: 0.5 }}
            />
            <MuiSkeleton
              variant="text"
              animation="pulse"
              width="72%"
              sx={{ fontSize: '0.9375rem', mb: 0.5 }}
            />
            <MuiSkeleton
              variant="text"
              animation="pulse"
              width="28%"
              sx={{ fontSize: '0.875rem' }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
