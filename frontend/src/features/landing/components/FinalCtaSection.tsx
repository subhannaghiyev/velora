import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FadeIn } from '@/components/motion/FadeIn';
import { Button } from '@/components/ui/Button';
import { rawColors } from '@/theme';

export function FinalCtaSection() {
  return (
    <Box
      component="section"
      aria-labelledby="final-cta-heading"
      sx={{
        py: { xs: 20, md: 28, lg: 36 },
        px: { xs: 3, md: 6 },
        textAlign: 'center',
        bgcolor: rawColors.neutral[50],
        borderTop: `1px solid ${rawColors.neutral[200]}`,
      }}
    >
      <FadeIn delay={0.05} duration={0.9}>
        <Typography
          component="h2"
          id="final-cta-heading"
          sx={{
            fontSize: { xs: '2.75rem', sm: '4rem', md: '5.5rem', lg: '6.5rem' },
            fontWeight: 300,
            letterSpacing: { xs: '-0.02em', md: '-0.03em' },
            lineHeight: 1.08,
            color: 'text.primary',
            mb: { xs: 10, md: 14 },
          }}
        >
          Your story
          <br />
          deserves
          <br />
          its own design.
        </Typography>

        <Button
          component="a"
          href="/designer"
          variant="contained"
          size="large"
          pill
          sx={{
            minWidth: 220,
            fontSize: '0.875rem',
            letterSpacing: '0.03em',
          }}
        >
          Start Designing
        </Button>
      </FadeIn>
    </Box>
  );
}
