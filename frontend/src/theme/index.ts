import { createTheme } from '@mui/material/styles';
import { rawColors, lightTokens } from './colors';
import { typographyConfig } from './typography';
import { SPACING_BASE } from './spacing';
import { radius } from './radius';
import { muiShadows, shadowTokens } from './shadows';
import { duration, easing } from './motion';
import { breakpointsConfig } from './breakpoints';
import { zIndexConfig } from './zIndex';

export const theme = createTheme({
  // ─── Spacing ────────────────────────────────────────────────────────────────
  spacing: SPACING_BASE,

  // ─── Breakpoints ────────────────────────────────────────────────────────────
  breakpoints: breakpointsConfig,

  // ─── Shape ──────────────────────────────────────────────────────────────────
  shape: {
    borderRadius: radius.sm, // 4px — MUI base unit; components override per scale
  },

  // ─── Shadows ────────────────────────────────────────────────────────────────
  shadows: muiShadows,

  // ─── Z-Index ────────────────────────────────────────────────────────────────
  zIndex: zIndexConfig,

  // ─── Palette (light mode) ───────────────────────────────────────────────────
  palette: {
    mode: 'light',
    primary: {
      main:         lightTokens.accent.main,
      light:        lightTokens.accent.light,
      dark:         lightTokens.accent.dark,
      contrastText: lightTokens.accent.contrastText,
    },
    secondary: {
      main:         rawColors.neutral[700],
      light:        rawColors.neutral[500],
      dark:         rawColors.neutral[900],
      contrastText: rawColors.neutral[50],
    },
    error: {
      main:  rawColors.error.main,
      light: rawColors.error.light,
      dark:  rawColors.error.dark,
    },
    warning: {
      main:  rawColors.warning.main,
      light: rawColors.warning.light,
      dark:  rawColors.warning.dark,
    },
    info: {
      main:  rawColors.info.main,
      light: rawColors.info.light,
      dark:  rawColors.info.dark,
    },
    success: {
      main:  rawColors.success.main,
      light: rawColors.success.light,
      dark:  rawColors.success.dark,
    },
    grey: {
      50:   rawColors.neutral[50],
      100:  rawColors.neutral[100],
      200:  rawColors.neutral[200],
      300:  rawColors.neutral[300],
      400:  rawColors.neutral[400],
      500:  rawColors.neutral[500],
      600:  rawColors.neutral[600],
      700:  rawColors.neutral[700],
      800:  rawColors.neutral[800],
      900:  rawColors.neutral[900],
    },
    background: {
      default: lightTokens.background.default,
      paper:   lightTokens.background.paper,
    },
    text: {
      primary:   lightTokens.text.primary,
      secondary: lightTokens.text.secondary,
      disabled:  lightTokens.text.disabled,
    },
    divider: rawColors.neutral[200],
    action: {
      hoverOpacity:    0.06,
      selectedOpacity: 0.10,
      disabledOpacity: 0.38,
      focusOpacity:    0.12,
      activatedOpacity: 0.16,
    },
  },

  // ─── Typography ─────────────────────────────────────────────────────────────
  typography: typographyConfig,

  // ─── Transitions ────────────────────────────────────────────────────────────
  transitions: {
    duration: {
      shortest:       duration.instant,
      shorter:        duration.fast,
      short:          duration.fast,
      standard:       duration.normal,
      complex:        duration.moderate,
      enteringScreen: duration.normal,
      leavingScreen:  duration.fast,
    },
    easing: {
      easeInOut: easing.standard,
      easeOut:   easing.enter,
      easeIn:    easing.exit,
      sharp:     easing.sharp,
    },
  },

  // ─── Component Defaults ─────────────────────────────────────────────────────
  components: {
    // ── Button ──────────────────────────────────────────────────────────────
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius:  radius.sm,
          paddingTop:    '10px',
          paddingBottom: '10px',
          paddingLeft:   '24px',
          paddingRight:  '24px',
          fontWeight:    500,
          transition:    `background-color ${duration.fast}ms ${easing.standard}, box-shadow ${duration.fast}ms ${easing.standard}, border-color ${duration.fast}ms ${easing.standard}`,
        },
        sizeLarge: {
          paddingTop:    '14px',
          paddingBottom: '14px',
          paddingLeft:   '32px',
          paddingRight:  '32px',
          fontSize:      '1rem',
        },
        sizeSmall: {
          paddingTop:    '6px',
          paddingBottom: '6px',
          paddingLeft:   '16px',
          paddingRight:  '16px',
          fontSize:      '0.8125rem',
        },
      },
    },

    // ── TextField ───────────────────────────────────────────────────────────
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: radius.sm,
          transition: `border-color ${duration.fast}ms ${easing.standard}`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: lightTokens.border.default,
            transition: `border-color ${duration.fast}ms ${easing.standard}`,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: lightTokens.border.strong,
          },
        },
      },
    },

    // ── Card ────────────────────────────────────────────────────────────────
    MuiCard: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: {
          borderRadius:    radius.md,
          backgroundImage: 'none',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding:     '24px',
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },

    // ── Paper ───────────────────────────────────────────────────────────────
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: radius.md,
        },
      },
    },

    // ── Dialog ──────────────────────────────────────────────────────────────
    MuiDialog: {
      defaultProps: {
        slotProps: {
          paper: { elevation: 4 },
        },
      },
      styleOverrides: {
        paper: {
          borderRadius: radius.lg,
          boxShadow:    shadowTokens.lg,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '24px 24px 16px',
          fontSize: '1.25rem',
          fontWeight: 500,
          letterSpacing: '-0.01em',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0 24px 16px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '8px 24px 24px',
          gap: '8px',
        },
      },
    },

    // ── Chip ────────────────────────────────────────────────────────────────
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius:  radius.xs,
          fontWeight:    500,
          fontSize:      '0.75rem',
          letterSpacing: '0.01em',
          height:        '26px',
        },
      },
    },

    // ── Checkbox ────────────────────────────────────────────────────────────
    MuiCheckbox: {
      defaultProps: {
        disableRipple: false,
        size: 'small',
      },
      styleOverrides: {
        root: {
          transition: `color ${duration.fast}ms ${easing.standard}`,
        },
      },
    },

    // ── Radio ───────────────────────────────────────────────────────────────
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          transition: `color ${duration.fast}ms ${easing.standard}`,
        },
      },
    },

    // ── Switch ──────────────────────────────────────────────────────────────
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: '6px',
        },
        switchBase: {
          transition: `transform ${duration.fast}ms ${easing.standard}`,
        },
        thumb: {
          boxShadow: shadowTokens.xs,
        },
      },
    },

    // ── Tooltip ─────────────────────────────────────────────────────────────
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        enterDelay: 400,
        enterNextDelay: 200,
      },
      styleOverrides: {
        tooltip: {
          borderRadius:  radius.xs,
          fontSize:      '0.6875rem',
          fontWeight:    500,
          letterSpacing: '0.01em',
          padding:       '6px 10px',
          backgroundColor: rawColors.neutral[900],
          color:           rawColors.neutral[50],
        },
        arrow: {
          color: rawColors.neutral[900],
        },
      },
    },

    // ── Link ────────────────────────────────────────────────────────────────
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          transition: `color ${duration.fast}ms ${easing.standard}`,
        },
      },
    },

    // ── Divider ─────────────────────────────────────────────────────────────
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lightTokens.border.subtle,
        },
      },
    },

    // ── CssBaseline ─────────────────────────────────────────────────────────
    MuiCssBaseline: {
      styleOverrides: `
        html {
          scroll-behavior: smooth;
          -webkit-text-size-adjust: 100%;
          color-scheme: light;
        }

        ::selection {
          background-color: rgba(196, 169, 124, 0.20);
          color: inherit;
        }

        :focus-visible {
          outline: 2px solid ${lightTokens.accent.main};
          outline-offset: 3px;
          border-radius: ${radius.xs}px;
        }

        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: ${rawColors.neutral[300]};
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${rawColors.neutral[400]};
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img, video {
          max-width: 100%;
          display: block;
        }

        * {
          box-sizing: border-box;
        }
      `,
    },
  },
});

// Re-export all tokens for direct use in components (sx prop, styled)
export { rawColors, lightTokens, darkTokens } from './colors';
export { fontFamily, fontWeight, typeScale } from './typography';
export { spacingScale, layout } from './spacing';
export { radius } from './radius';
export { shadowTokens } from './shadows';
export { duration, durationS, easing, easingFM, transition } from './motion';
export { breakpointValues } from './breakpoints';
export { zIndexValues } from './zIndex';
