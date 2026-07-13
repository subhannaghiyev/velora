import type { ThemeOptions } from '@mui/material/styles';

// Geist is loaded via Next.js font API in layout.tsx.
// The CSS variable --font-geist-sans is injected on the <html> element.
const FONT_SANS = 'var(--font-geist-sans), system-ui, -apple-system, sans-serif';
const FONT_MONO = 'var(--font-geist-mono), ui-monospace, "Cascadia Code", monospace';

export const fontFamily = {
  sans: FONT_SANS,
  mono: FONT_MONO,
} as const;

export const fontWeight = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
} as const;

// Type scale — size in px, defined as rem for MUI
// Base: 16px (1rem)
export const typeScale = {
  // Display — hero headings, one-liners
  display:   { fontSize: '4rem',    lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: fontWeight.light },
  // Headline — section headings
  headline:  { fontSize: '2.5rem',  lineHeight: 1.2, letterSpacing: '-0.02em', fontWeight: fontWeight.light },
  // Title — card and panel headings
  title:     { fontSize: '1.75rem', lineHeight: 1.3, letterSpacing: '-0.01em', fontWeight: fontWeight.regular },
  // Subheading
  subhead:   { fontSize: '1.25rem', lineHeight: 1.4, letterSpacing: '-0.01em', fontWeight: fontWeight.regular },
  // Body — primary reading text
  body:      { fontSize: '1rem',    lineHeight: 1.7, letterSpacing: '0',       fontWeight: fontWeight.regular },
  // Secondary body text
  bodySmall: { fontSize: '0.875rem',lineHeight: 1.6, letterSpacing: '0',       fontWeight: fontWeight.regular },
  // UI labels and captions
  label:     { fontSize: '0.75rem', lineHeight: 1.5, letterSpacing: '0.02em',  fontWeight: fontWeight.medium },
  // Category labels — uppercase tracked
  overline:  { fontSize: '0.6875rem',lineHeight: 1.5,letterSpacing: '0.12em',  fontWeight: fontWeight.semibold },
  // CTA / button text
  button:    { fontSize: '0.875rem',lineHeight: 1,   letterSpacing: '0.01em',  fontWeight: fontWeight.medium },
} as const;

export const typographyConfig: ThemeOptions['typography'] = {
  fontFamily: FONT_SANS,
  fontWeightLight:   fontWeight.light,
  fontWeightRegular: fontWeight.regular,
  fontWeightMedium:  fontWeight.medium,
  fontWeightBold:    fontWeight.bold,

  // MUI variant mapping
  h1: {
    fontFamily: FONT_SANS,
    fontSize:      typeScale.display.fontSize,
    lineHeight:    typeScale.display.lineHeight,
    letterSpacing: typeScale.display.letterSpacing,
    fontWeight:    typeScale.display.fontWeight,
  },
  h2: {
    fontFamily: FONT_SANS,
    fontSize:      typeScale.headline.fontSize,
    lineHeight:    typeScale.headline.lineHeight,
    letterSpacing: typeScale.headline.letterSpacing,
    fontWeight:    typeScale.headline.fontWeight,
  },
  h3: {
    fontFamily: FONT_SANS,
    fontSize:      typeScale.title.fontSize,
    lineHeight:    typeScale.title.lineHeight,
    letterSpacing: typeScale.title.letterSpacing,
    fontWeight:    typeScale.title.fontWeight,
  },
  h4: {
    fontFamily: FONT_SANS,
    fontSize:      typeScale.subhead.fontSize,
    lineHeight:    typeScale.subhead.lineHeight,
    letterSpacing: typeScale.subhead.letterSpacing,
    fontWeight:    fontWeight.medium,
  },
  h5: {
    fontFamily: FONT_SANS,
    fontSize:      '1.125rem',
    lineHeight:    1.4,
    letterSpacing: '-0.005em',
    fontWeight:    fontWeight.medium,
  },
  h6: {
    fontFamily: FONT_SANS,
    fontSize:      '1rem',
    lineHeight:    1.4,
    letterSpacing: '0',
    fontWeight:    fontWeight.semibold,
  },
  subtitle1: {
    fontFamily: FONT_SANS,
    fontSize:      '1.125rem',
    lineHeight:    1.6,
    letterSpacing: '-0.005em',
    fontWeight:    fontWeight.regular,
  },
  subtitle2: {
    fontFamily: FONT_SANS,
    fontSize:      '1rem',
    lineHeight:    1.5,
    letterSpacing: '0',
    fontWeight:    fontWeight.medium,
  },
  body1: {
    fontFamily: FONT_SANS,
    fontSize:      typeScale.body.fontSize,
    lineHeight:    typeScale.body.lineHeight,
    letterSpacing: typeScale.body.letterSpacing,
    fontWeight:    typeScale.body.fontWeight,
  },
  body2: {
    fontFamily: FONT_SANS,
    fontSize:      typeScale.bodySmall.fontSize,
    lineHeight:    typeScale.bodySmall.lineHeight,
    letterSpacing: typeScale.bodySmall.letterSpacing,
    fontWeight:    typeScale.bodySmall.fontWeight,
  },
  button: {
    fontFamily:    FONT_SANS,
    fontSize:      typeScale.button.fontSize,
    lineHeight:    typeScale.button.lineHeight,
    letterSpacing: typeScale.button.letterSpacing,
    fontWeight:    typeScale.button.fontWeight,
    textTransform: 'none',
  },
  caption: {
    fontFamily: FONT_SANS,
    fontSize:      typeScale.label.fontSize,
    lineHeight:    typeScale.label.lineHeight,
    letterSpacing: typeScale.label.letterSpacing,
    fontWeight:    typeScale.label.fontWeight,
  },
  overline: {
    fontFamily:    FONT_SANS,
    fontSize:      typeScale.overline.fontSize,
    lineHeight:    typeScale.overline.lineHeight,
    letterSpacing: typeScale.overline.letterSpacing,
    fontWeight:    typeScale.overline.fontWeight,
    textTransform: 'uppercase',
  },
};
