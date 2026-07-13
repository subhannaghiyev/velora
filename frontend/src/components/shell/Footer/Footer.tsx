import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiIconButton from '@mui/material/IconButton';
import MuiDivider from '@mui/material/Divider';
import Instagram from '@mui/icons-material/Instagram';
import Pinterest from '@mui/icons-material/Pinterest';
import { rawColors, duration, easing } from '@/theme';
import { NewsletterForm } from './NewsletterForm';
import { FooterLink } from './FooterLink';

const SHOP_LINKS = [
  { label: 'All Products', href: '/shop' },
  { label: 'New Arrivals', href: '/new-arrivals' },
  { label: 'Collections', href: '/collections' },
  { label: '3D Designer', href: '/designer' },
];

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

const FOOTER_LINK_SX = {
  display: 'block',
  fontSize: '0.8125rem',
  color: rawColors.neutral[600],
  transition: `color ${duration.fast}ms ${easing.standard}`,
  '&:hover': { color: rawColors.neutral[400] },
  '&:focus-visible': {
    outline: `2px solid ${rawColors.gold[400]}`,
    outlineOffset: 3,
    borderRadius: '2px',
  },
} as const;

const COLUMN_LABEL_SX = {
  fontSize: '0.6875rem',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: rawColors.neutral[500],
  mb: 2.5,
} as const;

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: rawColors.neutral[950],
        color: rawColors.neutral[400],
        pt: { xs: 10, md: 14 },
        pb: { xs: 6, md: 8 },
        px: { xs: 3, md: 6, lg: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '2fr 1fr 1fr 1.5fr',
          },
          gap: { xs: 6, md: 8 },
          mb: { xs: 8, md: 12 },
        }}
      >
        {/* Brand column */}
        <Box>
          <Typography
            component="p"
            sx={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: rawColors.neutral[50],
              mb: 2,
            }}
          >
            Velora
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: '0.875rem',
              lineHeight: 1.7,
              color: rawColors.neutral[600],
              maxWidth: 260,
            }}
          >
            Wear Your Identity. Personalize clothing through an immersive 3D experience.
          </Typography>
          {/* Social links — component="a" (string) is serializable from Server Component */}
          <Box sx={{ display: 'flex', gap: 0.5, mt: 3 }}>
            {(
              [
                { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
                { label: 'Pinterest', href: 'https://pinterest.com', Icon: Pinterest },
              ] as const
            ).map(({ label, href, Icon }) => (
              <MuiIconButton
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                size="small"
                sx={{
                  color: rawColors.neutral[600],
                  p: 0.75,
                  '&:hover': { color: rawColors.neutral[400], bgcolor: 'transparent' },
                  transition: `color ${duration.fast}ms ${easing.standard}`,
                }}
              >
                <Icon sx={{ fontSize: 18 }} />
            </MuiIconButton>
            ))}
          </Box>
        </Box>

        {/* Shop column */}
        <Box>
          <Typography component="p" sx={COLUMN_LABEL_SX}>Shop</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {SHOP_LINKS.map(({ label, href }) => (
              <FooterLink key={href} href={href} sx={FOOTER_LINK_SX}>
                {label}
              </FooterLink>
            ))}
          </Box>
        </Box>

        {/* Company column */}
        <Box>
          <Typography component="p" sx={COLUMN_LABEL_SX}>Company</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {COMPANY_LINKS.map(({ label, href }) => (
              <FooterLink key={href} href={href} sx={FOOTER_LINK_SX}>
                {label}
              </FooterLink>
            ))}
          </Box>
        </Box>

        {/* Newsletter column */}
        <Box>
          <Typography component="p" sx={COLUMN_LABEL_SX}>Stay in the loop</Typography>
          <Typography
            component="p"
            sx={{
              fontSize: '0.8125rem',
              color: rawColors.neutral[600],
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            New collections, editorial, and early access.
          </Typography>
          <NewsletterForm />
        </Box>
      </Box>

      <MuiDivider sx={{ borderColor: rawColors.neutral[800], mb: 4 }} />

      {/* Bottom row */}
      <Box
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { sm: 'center' },
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Typography
          component="p"
          sx={{ fontSize: '0.75rem', color: rawColors.neutral[700] }}
        >
          © {new Date().getFullYear()} Velora. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {LEGAL_LINKS.map(({ label, href }) => (
            <FooterLink
              key={href}
              href={href}
              sx={{ ...FOOTER_LINK_SX, fontSize: '0.75rem', color: rawColors.neutral[700] }}
            >
              {label}
            </FooterLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
