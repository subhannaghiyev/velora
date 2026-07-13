// Motion constants — duration and easing only.
// Do NOT implement animations here. These are shared primitives consumed
// by both MUI transitions and Framer Motion variants.

// Duration in milliseconds
export const duration = {
  instant:  100,   // micro feedback (button press, toggle)
  fast:     150,   // hover states, small reveals
  normal:   200,   // standard transitions (most interactions)
  moderate: 300,   // larger reveals, panel open
  slow:     400,   // page transitions, complex entrances
  deliberate: 600, // 3D scene transitions — used only in the product viewer
} as const;

// Duration in seconds — for Framer Motion (which uses seconds)
export const durationS = {
  instant:   duration.instant   / 1000,
  fast:      duration.fast      / 1000,
  normal:    duration.normal    / 1000,
  moderate:  duration.moderate  / 1000,
  slow:      duration.slow      / 1000,
  deliberate: duration.deliberate / 1000,
} as const;

// Easing curves
export const easing = {
  // Standard — most transitions (enter + exit)
  standard:  'cubic-bezier(0.4, 0, 0.2, 1)',
  // Enter — elements appearing (decelerating)
  enter:     'cubic-bezier(0.0, 0, 0.2, 1)',
  // Exit — elements disappearing (accelerating)
  exit:      'cubic-bezier(0.4, 0, 1, 1)',
  // Sharp — snappy toggles
  sharp:     'cubic-bezier(0.4, 0, 0.6, 1)',
} as const;

// Easing arrays for Framer Motion [x1, y1, x2, y2]
export const easingFM = {
  standard:  [0.4, 0, 0.2, 1],
  enter:     [0.0, 0, 0.2, 1],
  exit:      [0.4, 0, 1.0, 1],
  sharp:     [0.4, 0, 0.6, 1],
} as const;

// Ready-made Framer Motion transition presets
export const transition = {
  instant:  { duration: durationS.instant,  ease: easingFM.standard },
  fast:     { duration: durationS.fast,     ease: easingFM.standard },
  normal:   { duration: durationS.normal,   ease: easingFM.standard },
  moderate: { duration: durationS.moderate, ease: easingFM.enter    },
  slow:     { duration: durationS.slow,     ease: easingFM.enter    },
  page:     { duration: durationS.slow,     ease: easingFM.enter    },
} as const;
