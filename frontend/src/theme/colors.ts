// Single source of truth for every color value in Velora.
// Components must never hardcode hex values — always import from here.

export const rawColors = {
  // Warm neutrals — slight beige undertone, premium editorial feel
  neutral: {
    0:   '#FFFFFF',
    50:  '#FAFAF8',   // page background (light)
    100: '#F5F4F2',   // surface / card background
    150: '#EEECE8',   // subtle tint
    200: '#E5E2DC',   // border (light)
    300: '#D1CEC7',   // border (medium)
    400: '#B8B4AC',   // placeholder / disabled
    500: '#9E9890',   // muted text
    600: '#6B6860',   // secondary text
    700: '#4A4843',   // tertiary text
    800: '#2D2C29',   // strong text
    900: '#1C1B19',   // primary text (light mode)
    950: '#111110',   // page background (dark)
  },

  // Accent — champagne gold; applied only to CTAs and key active states
  gold: {
    50:  '#FAF5EB',
    100: '#F2E6CB',
    200: '#E6D0A3',
    300: '#D4BF9C',   // light accent
    400: '#C4A97C',   // main accent
    500: '#B4935E',   // hover
    600: '#A88B5C',   // dark accent
    700: '#8B6F44',
    800: '#6B5234',
    900: '#4A3822',
  },

  // Semantic — reserved for system states only; never decorative
  success: {
    light: '#7ECFA0',
    main:  '#4CAF6E',
    dark:  '#2E7D50',
    bg:    '#F0FBF4',
  },
  warning: {
    light: '#E8C87C',
    main:  '#D4A843',
    dark:  '#9E7A2A',
    bg:    '#FDF8EC',
  },
  error: {
    light: '#E8867F',
    main:  '#D4564E',
    dark:  '#9E3028',
    bg:    '#FDF3F2',
  },
  info: {
    light: '#9AB9DE',
    main:  '#5B8FC9',
    dark:  '#3469A0',
    bg:    '#F0F6FD',
  },
} as const;

// Semantic token aliases — these are what MUI theme and components reference

export const lightTokens = {
  background: {
    default: rawColors.neutral[50],
    paper:   rawColors.neutral[100],
    elevated: rawColors.neutral[0],
  },
  text: {
    primary:   rawColors.neutral[900],
    secondary: rawColors.neutral[600],
    disabled:  rawColors.neutral[400],
  },
  border: {
    subtle: rawColors.neutral[200],
    default: rawColors.neutral[300],
    strong: rawColors.neutral[400],
  },
  accent: {
    main:          rawColors.gold[400],
    light:         rawColors.gold[300],
    dark:          rawColors.gold[600],
    contrastText:  rawColors.neutral[950],
  },
} as const;

export const darkTokens = {
  background: {
    default: rawColors.neutral[950],
    paper:   rawColors.neutral[900],
    elevated: rawColors.neutral[800],
  },
  text: {
    primary:   rawColors.neutral[50],
    secondary: rawColors.neutral[500],
    disabled:  rawColors.neutral[700],
  },
  border: {
    subtle:  rawColors.neutral[800],
    default: rawColors.neutral[700],
    strong:  rawColors.neutral[600],
  },
  accent: {
    main:          rawColors.gold[400],
    light:         rawColors.gold[300],
    dark:          rawColors.gold[600],
    contrastText:  rawColors.neutral[950],
  },
} as const;
