'use client';

import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import { type SxProps, type Theme } from '@mui/material/styles';
import { type ReactNode } from 'react';

interface FooterLinkProps {
  href: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

// Client Component boundary: component={NextLink} (a function) stays inside
// this boundary so Footer.tsx can remain a Server Component.
export function FooterLink({ href, children, sx }: FooterLinkProps) {
  return (
    <MuiLink component={NextLink} href={href} underline="none" sx={sx}>
      {children}
    </MuiLink>
  );
}
