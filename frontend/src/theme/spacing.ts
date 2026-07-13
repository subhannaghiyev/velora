// MUI spacing base unit: 8px. All spacing is a multiple.
// Usage in components: theme.spacing(2) = 16px

export const SPACING_BASE = 8;

// Named scale for reference — do not use these raw values directly.
// Always use theme.spacing() in MUI components.
export const spacingScale = {
  0:    0,
  0.5:  4,    // 4px  — micro gap (icon + text)
  1:    8,    // 8px  — tight
  1.5: 12,    // 12px — compact
  2:   16,    // 16px — default component padding
  2.5: 20,    // 20px
  3:   24,    // 24px — section padding (small)
  4:   32,    // 32px — section padding (default)
  5:   40,    // 40px
  6:   48,    // 48px — section padding (large)
  8:   64,    // 64px — section gap
  10:  80,    // 80px — major section break
  12:  96,    // 96px
  16: 128,    // 128px — hero padding
  20: 160,    // 160px
  24: 192,    // 192px
} as const;

// Page layout constants
export const layout = {
  maxWidth:       1440,   // px — maximum content width
  containerPx:    24,     // px — horizontal padding (mobile)
  containerPxMd:  48,     // px — horizontal padding (tablet)
  containerPxLg:  80,     // px — horizontal padding (desktop)
  navHeight:      64,     // px — fixed navigation bar height
  navHeightMd:    72,     // px — navigation height (desktop)
} as const;
