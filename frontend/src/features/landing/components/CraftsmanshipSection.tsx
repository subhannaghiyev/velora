import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiDivider from '@mui/material/Divider';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { rawColors } from '@/theme';

const PILLARS = [
  {
    id: 'materials',
    label: 'Materials',
    statement: 'Every fabric considered.',
    body: 'We work with mills that specialize in natural fibres — linen, merino, silk blends. Nothing synthetic unless it serves a purpose.',
  },
  {
    id: 'fit',
    label: 'Fit',
    statement: 'Engineered for the body.',
    body: 'Patterns developed across dozens of fit sessions. Cut to move naturally, hold their form, and improve with wear.',
  },
  {
    id: 'finish',
    label: 'Finish',
    statement: 'The details that remain.',
    body: 'Hand-finished seams. Considered hardware. Every closure chosen for feel, not just function.',
  },
] as const;

export function CraftsmanshipSection() {
  return (
    <Box
      component="section"
      aria-labelledby="craftsmanship-heading"
      sx={{
        py: { xs: 16, md: 24, lg: 32 },
        px: { xs: 3, md: 6, lg: 10 },
        bgcolor: rawColors.neutral[100],
      }}
    >
      <Box sx={{ maxWidth: 1440, mx: 'auto' }}>
        {/* Section label + headline */}
        <Reveal>
          <Typography
            component="p"
            sx={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: rawColors.neutral[500],
              mb: 4,
            }}
          >
            Quality
          </Typography>
          <Typography
            component="h2"
            id="craftsmanship-heading"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: 'text.primary',
              mb: { xs: 12, md: 20 },
              maxWidth: 520,
            }}
          >
            Craft is not a feature. It is the foundation.
          </Typography>
        </Reveal>

        {/* Three pillars */}
        <Stagger staggerDelay={0.1}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 0, md: 8 },
            }}
          >
            {PILLARS.map(({ id, label, statement, body }, i) => (
              <StaggerItem key={id}>
                <Box>
                  {i > 0 && (
                    <MuiDivider
                      sx={{
                        display: { xs: 'block', md: 'none' },
                        borderColor: rawColors.neutral[200],
                        my: 6,
                      }}
                    />
                  )}
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: rawColors.neutral[500],
                      mb: 3,
                    }}
                  >
                    {label}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: '1.125rem', md: '1.25rem' },
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      color: 'text.primary',
                      mb: 3,
                      lineHeight: 1.4,
                    }}
                  >
                    {statement}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ color: 'text.secondary', lineHeight: 1.75 }}
                  >
                    {body}
                  </Typography>
                </Box>
              </StaggerItem>
            ))}
          </Box>
        </Stagger>
      </Box>
    </Box>
  );
}
