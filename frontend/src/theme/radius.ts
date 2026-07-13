// Border radius tokens — do not use arbitrary px values anywhere.
// Always reference from this scale.

export const radius = {
  none: 0,
  xs:   2,    // subtle rounding — tags, badges
  sm:   4,    // default — inputs, chips
  md:   8,    // cards, panels
  lg:   12,   // dialogs, drawers
  xl:   16,   // large surfaces
  pill: 9999, // fully rounded — buttons (pill variant), avatars
} as const;

export type RadiusKey = keyof typeof radius;
