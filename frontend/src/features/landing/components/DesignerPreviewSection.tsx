import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Reveal } from '@/components/motion/Reveal';
import { FadeIn } from '@/components/motion/FadeIn';
import { rawColors } from '@/theme';

export function DesignerPreviewSection() {
  return (
    <Box
      component="section"
      aria-labelledby="designer-preview-heading"
      sx={{
        bgcolor: rawColors.neutral[950],
        py: { xs: 14, md: 20, lg: 28 },
        px: { xs: 3, md: 6, lg: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '2fr 3fr' },
          gap: { xs: 10, lg: 16 },
          alignItems: 'center',
        }}
      >
        {/* Left — copy */}
        <Reveal distance={20}>
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: rawColors.neutral[600],
                mb: 5,
              }}
            >
              Innovation
            </Typography>
            <Typography
              component="h2"
              id="designer-preview-heading"
              sx={{
                fontSize: { xs: '2.25rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: rawColors.neutral[50],
                mb: 5,
              }}
            >
              The 3D
              <br />
              Designer.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{
                color: rawColors.neutral[500],
                lineHeight: 1.75,
                maxWidth: 380,
              }}
            >
              Select a garment. Swap materials. Change the silhouette.
              See the result in real time, in three dimensions — before
              a single thread is cut.
            </Typography>
          </Box>
        </Reveal>

        {/* Right — 3D placeholder */}
        <FadeIn delay={0.15} duration={0.9}>
          <Box
            aria-label="3D Designer experience placeholder — coming soon"
            sx={{
              aspectRatio: { xs: '4/3', lg: '16/10' },
              borderRadius: '8px',
              border: `1px solid ${rawColors.neutral[800]}`,
              bgcolor: rawColors.neutral[900],
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Placeholder content */}
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                border: `1px solid ${rawColors.neutral[700]}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-hidden="true"
            >
              <Box
                component="span"
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: '2px',
                  border: `1.5px solid ${rawColors.neutral[600]}`,
                  display: 'block',
                  transform: 'rotate(15deg)',
                }}
              />
            </Box>
            <Typography
              component="p"
              sx={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: rawColors.neutral[600],
              }}
            >
              3D Experience — Coming Soon
            </Typography>
          </Box>
        </FadeIn>
      </Box>
    </Box>
  );
}
