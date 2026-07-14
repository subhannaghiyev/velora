import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Reveal } from '@/components/motion/Reveal';
import { SlideUp } from '@/components/motion/SlideUp';
import { rawColors, duration, easing } from '@/theme';

const COLLECTION_FACTS = [
  {
    id: 'materials',
    label: 'Materials',
    value: 'Linen, merino, silk blend, organic cotton.',
  },
  {
    id: 'pieces',
    label: 'Pieces',
    value: 'Four garments. Each resolved completely.',
  },
  {
    id: 'season',
    label: 'Season',
    value: 'Spring / Summer 2026.',
  },
] as const;

export function CollectionSection() {
  return (
    <Box
      component="section"
      id="collection"
      aria-labelledby="collection-heading"
      sx={{
        py: { xs: 16, md: 24, lg: 32 },
        px: { xs: 3, md: 6, lg: 10 },
      }}
    >
      <Box sx={{ maxWidth: 1440, mx: 'auto' }}>
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
            Spring / Summer 2026
          </Typography>
        </Reveal>

        {/* Asymmetric editorial layout — headline left, copy + link right */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '5fr 3fr' },
            gap: { xs: 8, md: 16 },
            alignItems: 'end',
            mb: { xs: 12, md: 20 },
          }}
        >
          <SlideUp delay={0.1} distance={32}>
            <Typography
              component="h2"
              id="collection-heading"
              sx={{
                fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem', lg: '4.25rem' },
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: 'text.primary',
              }}
            >
              Designed once.
              <Box
                component="span"
                sx={{ display: 'block', color: rawColors.neutral[500], mt: 0.5 }}
              >
                Worn always.
              </Box>
            </Typography>
          </SlideUp>

          <SlideUp delay={0.2} distance={24}>
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}
              >
                The SS26 collection is built around restraint. Four garments,
                each resolved completely — designed to be worn together or
                apart, in any order, for any reason you find sufficient.
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 8 }}
              >
                Made to last years, not seasons.
              </Typography>
              <Box
                component="a"
                href="/shop"
                sx={{
                  display: 'inline-block',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'text.primary',
                  textDecoration: 'none',
                  borderBottom: `1px solid ${rawColors.neutral[900]}`,
                  pb: 0.5,
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
                Browse the collection
              </Box>
            </Box>
          </SlideUp>
        </Box>

        {/* Collection facts — three columns, rule-separated */}
        <Reveal delay={0.15} margin="-32px">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              borderTop: `1px solid ${rawColors.neutral[200]}`,
            }}
          >
            {COLLECTION_FACTS.map(({ id, label, value }, i) => (
              <Box
                key={id}
                sx={{
                  py: { xs: 5, md: 6 },
                  borderTop: {
                    xs: i > 0 ? `1px solid ${rawColors.neutral[200]}` : 'none',
                    sm: 'none',
                  },
                  pl: { sm: i > 0 ? 6 : 0 },
                  pr: { sm: i < COLLECTION_FACTS.length - 1 ? 6 : 0 },
                  borderRight: {
                    sm:
                      i < COLLECTION_FACTS.length - 1
                        ? `1px solid ${rawColors.neutral[200]}`
                        : 'none',
                  },
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'text.secondary',
                    mb: 2,
                  }}
                >
                  {label}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: '0.9375rem', md: '1rem' },
                    fontWeight: 400,
                    color: 'text.primary',
                    lineHeight: 1.5,
                  }}
                >
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}
