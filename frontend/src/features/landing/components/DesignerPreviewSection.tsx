import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Reveal } from '@/components/motion/Reveal';
import { FadeIn } from '@/components/motion/FadeIn';
import { rawColors } from '@/theme';
import { MediaContainer, HeroPoster } from '@/features/landing/media';

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

        {/*
         * Right — 3D Designer preview image.
         * This slot will receive a HeroPoster of the 3D scene once Sprint 7 is built.
         * Target: velora_ss26_3d-designer-preview_front_charcoal_v1.jpg
         * Spec: dark studio environment, product in focus, subtle edge lighting.
         */}
        <FadeIn delay={0.15} duration={0.9}>
          <MediaContainer
            radius="8px"
            sx={{ aspectRatio: { xs: '4/3', lg: '16/10' } }}
          >
            <HeroPoster
              alt="3D Designer experience — a preview of the Velora design studio"
              sizes="(max-width: 1200px) 100vw, 55vw"
              dark
            />
          </MediaContainer>
        </FadeIn>
      </Box>
    </Box>
  );
}
