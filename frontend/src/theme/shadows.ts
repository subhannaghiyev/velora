import type { Shadows } from '@mui/material/styles';

// Luxury shadow scale — intentionally restrained.
// Principles from DESIGN_BIBLE: no excessive blur, no layered effects, no glassmorphism.
// Shadow color is warm near-black (matching our neutral[950]) not generic rgba black.

const SHADOW_COLOR = '28, 27, 25'; // RGB of neutral[950] = #1C1B19

export const shadowTokens = {
  none: 'none',
  xs:   `0 1px 2px rgba(${SHADOW_COLOR}, 0.06)`,                              // resting card
  sm:   `0 2px 8px rgba(${SHADOW_COLOR}, 0.08)`,                              // card hover / floating chip
  md:   `0 4px 16px rgba(${SHADOW_COLOR}, 0.10)`,                             // dropdown / popover
  lg:   `0 8px 32px rgba(${SHADOW_COLOR}, 0.12)`,                             // dialog / modal
  xl:   `0 16px 48px rgba(${SHADOW_COLOR}, 0.14)`,                            // sheet / command palette
  focus: `0 0 0 3px rgba(196, 169, 124, 0.35)`,                               // focus ring (accent gold at 35%)
} as const;

export type ShadowKey = keyof typeof shadowTokens;

// MUI requires exactly 25 shadow slots (indices 0–24).
// We map our 5-level scale and repeat xl for higher indices.
export const muiShadows: Shadows = [
  shadowTokens.none,       // 0 — no elevation
  shadowTokens.xs,         // 1 — resting card
  shadowTokens.sm,         // 2 — card hover
  shadowTokens.md,         // 3 — dropdown
  shadowTokens.lg,         // 4 — dialog
  shadowTokens.xl,         // 5
  shadowTokens.xl,         // 6
  shadowTokens.xl,         // 7
  shadowTokens.xl,         // 8
  shadowTokens.xl,         // 9
  shadowTokens.xl,         // 10
  shadowTokens.xl,         // 11
  shadowTokens.xl,         // 12
  shadowTokens.xl,         // 13
  shadowTokens.xl,         // 14
  shadowTokens.xl,         // 15
  shadowTokens.xl,         // 16
  shadowTokens.xl,         // 17
  shadowTokens.xl,         // 18
  shadowTokens.xl,         // 19
  shadowTokens.xl,         // 20
  shadowTokens.xl,         // 21
  shadowTokens.xl,         // 22
  shadowTokens.xl,         // 23
  shadowTokens.xl,         // 24
];
