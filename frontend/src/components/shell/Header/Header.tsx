'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MuiIconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import MenuRounded from '@mui/icons-material/MenuRounded';
import Link from 'next/link';
import { useScrollManager } from '@/lib/scroll';
import { lightTokens, duration, easing } from '@/theme';
import { MobileDrawer } from './MobileDrawer';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'New Arrivals', href: '/new-arrivals' },
  { label: 'Collections', href: '/collections' },
  { label: 'Designer', href: '/designer' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export interface HeaderProps {
  // When true, header starts transparent at the top of the page.
  // Set to true for pages with a full-bleed hero section.
  transparentOnTop?: boolean;
  // When true, header transitions to a solid background on scroll.
  // Requires transparentOnTop to have a visible effect.
  solidOnScroll?: boolean;
}

const NAV_LINK_SX = {
  fontSize: '0.6875rem',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'text.secondary',
  textDecoration: 'none',
  transition: `color ${duration.fast}ms ${easing.standard}`,
  '&:hover': { color: 'text.primary' },
  '&:focus-visible': { outline: '2px solid', outlineOffset: 3, borderRadius: '2px' },
} as const;

const ACTION_ICON_SX = {
  color: 'text.secondary',
  '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
  transition: `color ${duration.fast}ms ${easing.standard}`,
};

export function Header({ transparentOnTop = true, solidOnScroll = true }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isAtTop } = useScrollManager();

  const isSolid = !transparentOnTop || (solidOnScroll && !isAtTop);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: isSolid ? 'background.paper' : 'transparent',
          borderBottom: isSolid
            ? `1px solid ${lightTokens.border.subtle}`
            : '1px solid transparent',
          color: 'text.primary',
          transition: `background-color ${duration.normal}ms ${easing.standard}, border-color ${duration.normal}ms ${easing.standard}`,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: { xs: 64, md: 72 },
            px: { xs: 3, md: 6, lg: 10 },
            maxWidth: 1440,
            mx: 'auto',
            width: '100%',
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            href="/"
            aria-label="Velora — home"
            sx={{ textDecoration: 'none', color: 'inherit', flexShrink: 0 }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'text.primary',
              }}
            >
              Velora
            </Typography>
          </Box>

          {/* Desktop navigation */}
          <Box
            component="nav"
            aria-label="Main navigation"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 4,
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {NAV_LINKS.filter((l) => l.href !== '/').map(({ label, href }) => (
              <Box key={href} component={Link} href={href} sx={NAV_LINK_SX}>
                {label}
              </Box>
            ))}
          </Box>

          {/* Action icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 'auto' }}>
            <MuiIconButton aria-label="Search" size="small" sx={ACTION_ICON_SX}>
              <SearchOutlined sx={{ fontSize: 20 }} />
            </MuiIconButton>

            <MuiIconButton
              aria-label="Account"
              size="small"
              sx={{ ...ACTION_ICON_SX, display: { xs: 'none', md: 'inline-flex' } }}
            >
              <PersonOutlineOutlined sx={{ fontSize: 20 }} />
            </MuiIconButton>

            <MuiIconButton aria-label="Shopping bag" size="small" sx={ACTION_ICON_SX}>
              <ShoppingBagOutlined sx={{ fontSize: 20 }} />
            </MuiIconButton>

            <MuiIconButton
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav"
              size="small"
              onClick={() => setDrawerOpen(true)}
              sx={{ ...ACTION_ICON_SX, display: { md: 'none' }, ml: 0.5, color: 'text.primary' }}
            >
              <MenuRounded sx={{ fontSize: 22 }} />
            </MuiIconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
