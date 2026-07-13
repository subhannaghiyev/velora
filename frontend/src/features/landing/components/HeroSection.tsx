import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';

export function HeroSection() {
  return (
    <Box
      component="section"
      aria-label="Welcome to Velora"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // Top padding accounts for the fixed transparent header
        pt: { xs: '120px', md: '140px' },
        pb: { xs: 16, md: 24 },
        px: { xs: 3, sm: 6, lg: 10 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
      }}
    >
      {/*
       * Background slot — reserved for Sprint 4.2 video / 3D canvas.
       * Insert absolutely-positioned media here.
       */}

      <FadeIn duration={1.0} delay={0.1}>
        {/* Primary display headline */}
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem', lg: '8.5rem' },
            fontWeight: 300,
            letterSpacing: { xs: '-0.02em', md: '-0.03em' },
            lineHeight: 1.0,
            color: 'text.primary',
            mb: { xs: 6, md: 9 },
          }}
        >
          Wear Your
          <br />
          Identity.
        </Typography>

        {/* Supporting — editorial, two lines */}
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            maxWidth: 400,
            mx: 'auto',
            color: 'text.secondary',
            lineHeight: 1.7,
            mb: { xs: 8, md: 12 },
            px: { xs: 1, md: 0 },
          }}
        >
          Luxury is no longer something you buy.
          <br />
          It is something you create.
        </Typography>

        {/* CTAs */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            component="a"
            href="/shop"
            variant="contained"
            size="large"
            sx={{ minWidth: 200 }}
          >
            Explore the Collection
          </Button>
          <Button
            component="a"
            href="/designer"
            variant="outlined"
            size="large"
            sx={{
              minWidth: 200,
              borderColor: 'text.primary',
              color: 'text.primary',
              '&:hover': { borderColor: 'primary.main', color: 'primary.main', bgcolor: 'transparent' },
            }}
          >
            Start Designing
          </Button>
        </Box>
      </FadeIn>

      {/* Scroll indicator — static, decorative */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 28, md: 40 },
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          color: 'text.secondary',
          opacity: 0.4,
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        <Typography
          component="span"
          sx={{ fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          Scroll
        </Typography>
        <KeyboardArrowDownRounded sx={{ fontSize: 16 }} />
      </Box>
    </Box>
  );
}
