'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@/components/ui/Button';
import { rawColors } from '@/theme';

interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <Box
      role="status"
      sx={{
        py: { xs: 16, md: 24 },
        textAlign: 'center',
        maxWidth: 400,
        mx: 'auto',
      }}
    >
      <Typography
        component="h3"
        sx={{
          fontSize: { xs: '1.5rem', md: '2rem' },
          fontWeight: 300,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          color: 'text.primary',
          mb: 3,
        }}
      >
        No garments found.
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: '0.9375rem',
          fontWeight: 400,
          color: 'text.secondary',
          lineHeight: 1.7,
          mb: 8,
        }}
      >
        Explore another collection.
      </Typography>
      <Button
        variant="outlined"
        size="small"
        onClick={onReset}
        sx={{
          borderColor: rawColors.neutral[300],
          color: 'text.primary',
          '&:hover': {
            borderColor: rawColors.neutral[900],
            bgcolor: 'transparent',
          },
        }}
      >
        Reset filters
      </Button>
    </Box>
  );
}
