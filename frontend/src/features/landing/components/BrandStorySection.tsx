import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Reveal } from '@/components/motion/Reveal';
import { SlideUp } from '@/components/motion/SlideUp';
import { rawColors } from '@/theme';

export function BrandStorySection() {
  return (
    <Box
      component="section"
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

      {/* Asymmetric editorial layout */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '5fr 3fr' },
          gap: { xs: 8, md: 16 },
          alignItems: 'end',
        }}
      >
        {/* Left — editorial headline */}
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

        {/* Right — body copy */}
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
    </Box>
  );
}
