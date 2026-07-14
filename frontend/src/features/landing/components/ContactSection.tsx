import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiDivider from '@mui/material/Divider';
import { Reveal } from '@/components/motion/Reveal';
import { rawColors, duration, easing } from '@/theme';

const CONTACT_CHANNELS = [
  {
    id: 'general',
    type: 'General',
    address: 'hello@velora.com',
    description: 'Questions about the collection, orders, or the platform.',
  },
  {
    id: 'press',
    type: 'Press',
    address: 'press@velora.com',
    description: 'Media inquiries, lookbook requests, and brand partnerships.',
  },
  {
    id: 'wholesale',
    type: 'Wholesale',
    address: 'trade@velora.com',
    description: 'Retailer terms, pricing, and minimum quantities.',
  },
] as const;

export function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      aria-labelledby="contact-heading"
      sx={{
        py: { xs: 16, md: 24, lg: 32 },
        px: { xs: 3, md: 6, lg: 10 },
        bgcolor: rawColors.neutral[100],
      }}
    >
      <Box sx={{ maxWidth: 1440, mx: 'auto' }}>
        {/* Section header */}
        <Reveal>
          <Typography
            component="p"
            sx={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: rawColors.neutral[500],
              mb: 5,
            }}
          >
            Contact
          </Typography>
          <Typography
            component="h2"
            id="contact-heading"
            sx={{
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: 'text.primary',
              maxWidth: 480,
              mb: { xs: 4, md: 6 },
            }}
          >
            We reply within
            <br />
            one business day.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.75,
              maxWidth: 440,
              mb: { xs: 12, md: 20 },
            }}
          >
            Velora is a small team. Every message is read by a person.
          </Typography>
        </Reveal>

        {/* Contact channels */}
        <Reveal delay={0.1} margin="-32px">
          <Box>
            {CONTACT_CHANNELS.map(({ id, type, address, description }, i) => (
              <Box key={id}>
                {i > 0 && (
                  <MuiDivider sx={{ borderColor: rawColors.neutral[200] }} />
                )}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '160px 1fr auto' },
                    gap: { xs: 1.5, sm: 8 },
                    alignItems: 'start',
                    py: { xs: 5, md: 7 },
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: rawColors.neutral[500],
                    }}
                  >
                    {type}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                  >
                    {description}
                  </Typography>
                  <Box
                    component="a"
                    href={`mailto:${address}`}
                    aria-label={`${type} enquiries — ${address}`}
                    sx={{
                      display: 'inline-block',
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      color: 'text.primary',
                      textDecoration: 'none',
                      borderBottom: `1px solid transparent`,
                      pb: 0.25,
                      whiteSpace: 'nowrap',
                      transition: `color ${duration.fast}ms ${easing.standard}, border-color ${duration.fast}ms ${easing.standard}`,
                      '&:hover': {
                        color: rawColors.gold[400],
                        borderBottomColor: rawColors.gold[400],
                      },
                      '&:focus-visible': {
                        outline: `2px solid ${rawColors.gold[400]}`,
                        outlineOffset: 3,
                        borderRadius: '2px',
                      },
                    }}
                  >
                    {address}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}
