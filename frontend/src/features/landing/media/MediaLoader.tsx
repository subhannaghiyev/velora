import Box from '@mui/material/Box';
import { rawColors } from '@/theme';

export interface MediaLoaderProps {
  dark?: boolean;
}

// Subtle loading overlay — opacity pulse only.
// No spinner, no shimmer, no progress bar.
// Appears while media is fetching; parent unmounts it on load.
export function MediaLoader({ dark = false }: MediaLoaderProps) {
  const bg = dark ? rawColors.neutral[900] : rawColors.neutral[100];

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        inset: 0,
        bgcolor: bg,
        zIndex: 1,
        '@keyframes velora-media-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        animation: 'velora-media-pulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}
    />
  );
}
