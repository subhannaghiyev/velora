'use client';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiIconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseRounded from '@mui/icons-material/CloseRounded';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { rawColors, duration, easing } from '@/theme';

interface NavLink {
  label: string;
  href: string;
}

export interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export function MobileDrawer({ open, onClose, navLinks }: MobileDrawerProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: { xs: '100vw', sm: 360 },
            bgcolor: 'background.paper',
            boxShadow: 'none',
          },
        },
      }}
    >
      <Box
        role="dialog"
        aria-label="Navigation menu"
        sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}
      >
        {/* Header row */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'text.primary',
            }}
          >
            Velora
          </Typography>
          <MuiIconButton
            aria-label="Close menu"
            onClick={onClose}
            size="small"
            sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
          >
            <CloseRounded />
          </MuiIconButton>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Nav links */}
        <Box
          component="nav"
          aria-label="Mobile navigation"
          sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
        >
          {navLinks.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Box
                key={href}
                component={Link}
                href={href}
                onClick={onClose}
                aria-current={active ? 'page' : undefined}
                sx={{
                  display: 'block',
                  py: 1.5,
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: active ? 'text.primary' : 'text.secondary',
                  textDecoration: 'none',
                  transition: `color ${duration.fast}ms ${easing.standard}`,
                  '&:hover': { color: 'text.primary' },
                  '&:focus-visible': {
                    outline: `2px solid ${rawColors.gold[400]}`,
                    outlineOffset: 3,
                    borderRadius: 1,
                  },
                }}
              >
                {label}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Drawer>
  );
}
