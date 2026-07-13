import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { rawColors } from '@/theme';

export interface MediaFallbackProps {
  dark?: boolean;
  label?: string;
  sublabel?: string;
}

// Premium editorial placeholder. Replaces missing media assets.
// Must not look like a loading skeleton or a broken state — it is an
// intentionally reserved space that communicates curation, not absence.
export function MediaFallback({
  dark = false,
  label = 'Image',
  sublabel = 'Reserved for Editorial Campaign',
}: MediaFallbackProps) {
  const bg = dark ? rawColors.neutral[900] : rawColors.neutral[50];
  const border = dark ? rawColors.neutral[800] : rawColors.neutral[200];
  const textColor = dark ? rawColors.neutral[600] : rawColors.neutral[400];

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        inset: 0,
        bgcolor: bg,
        border: `1px solid ${border}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
      }}
    >
      <Typography
        component="span"
        sx={{
          fontSize: '0.5625rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: textColor,
        }}
      >
        {label}
      </Typography>
      <Typography
        component="span"
        sx={{
          fontSize: '0.625rem',
          fontWeight: 400,
          letterSpacing: '0.08em',
          color: textColor,
          textAlign: 'center',
          px: 4,
          lineHeight: 1.5,
        }}
      >
        {sublabel}
      </Typography>
    </Box>
  );
}
