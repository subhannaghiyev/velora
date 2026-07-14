import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Reveal } from '@/components/motion/Reveal';
import { SlideUp } from '@/components/motion/SlideUp';
import { rawColors } from '@/theme';
import { MediaContainer, CampaignImage } from '@/features/landing/media';

export function BrandStorySection() {
  return (
    <Box
      component="section"
      id="about"
      aria-labelledby="brand-story-heading"
      sx={{
        py: { xs: 18, md: 28, lg: 36 },
        px: { xs: 3, md: 6, lg: 10 },
        maxWidth: 1440,
        mx: 'auto',
        width: '100%',
      }}
    >
      {/* Section label */}
      <Reveal delay={0}>
        <Typography
          component="p"
          sx={{
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'text.secondary',
            mb: { xs: 10, md: 16 },
          }}
        >
          Our Story
        </Typography>
      </Reveal>

      {/* Asymmetric editorial layout — headline left, copy right */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '5fr 3fr' },
          gap: { xs: 8, md: 16 },
          alignItems: 'end',
        }}
      >
        <SlideUp delay={0.1} distance={32}>
          <Typography
            component="h2"
            id="brand-story-heading"
            sx={{
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem', lg: '4.25rem' },
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: 'text.primary',
            }}
          >
            Most fashion platforms
            <br />
            are catalogues.
            <Box
              component="span"
              sx={{ display: 'block', color: rawColors.neutral[500], mt: 0.5 }}
            >
              Velora is a canvas.
            </Box>
          </Typography>
        </SlideUp>

        <SlideUp delay={0.2} distance={24}>
          <Box sx={{ pt: { md: 2 } }}>
            <Typography
              variant="body1"
              component="p"
              sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}
            >
              We built Velora because we believe clothing is the most personal
              form of self-expression. It should not be passive — selected from
              a grid, shipped in a box, worn without authorship.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Every garment on this platform is a starting point. You bring it
              to life.
            </Typography>
          </Box>
        </SlideUp>
      </Box>

      {/*
       * Editorial campaign image — ultra-wide cinema format (21:9).
       * ART_DIRECTION §6: close-up fabric or construction detail shot.
       * Target: velora_ss26_brand-story_detail-fabric_natural_v1.jpg
       * Higgsfield spec: 85-135mm, f/2.8, directional side light, neutral bg.
       */}
      <Reveal delay={0.15} margin="-32px">
        <MediaContainer
          radius={0}
          sx={{ aspectRatio: '21/9', mt: { xs: 10, md: 16 } }}
        >
          <CampaignImage
            alt="Velora brand story — fabric close-up"
            sizes="(max-width: 900px) 100vw, 1200px"
          />
        </MediaContainer>
      </Reveal>
    </Box>
  );
}
