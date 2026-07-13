import type { ThemeOptions } from '@mui/material/styles';

// Velora breakpoint system — mobile-first.
// These values are consumed by MUI's sx prop, useMediaQuery, and Grid.

export const breakpointValues = {
  xs:   0,     // mobile portrait
  sm:   600,   // mobile landscape / small tablet
  md:   900,   // tablet
  lg:   1200,  // desktop
  xl:   1536,  // large desktop
} as const;

export const breakpointsConfig: ThemeOptions['breakpoints'] = {
  values: breakpointValues,
};
