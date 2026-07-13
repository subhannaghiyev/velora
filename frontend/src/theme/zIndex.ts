import type { ThemeOptions } from '@mui/material/styles';

// Z-index scale — every layer has a named slot.
// Velora-specific layers extend MUI defaults.

export const zIndexValues = {
  scene:         -1,    // 3D canvas layer (behind everything)
  base:           0,
  raised:        10,    // slightly elevated content
  sticky:       100,    // sticky headers / table headers
  dropdown:    1000,    // dropdowns / popovers
  appBar:      1100,    // navigation bar
  drawer:      1200,    // side drawers
  modal:       1300,    // dialogs / modals
  snackbar:    1400,    // toast notifications
  tooltip:     1500,    // tooltips
} as const;

export const zIndexConfig: ThemeOptions['zIndex'] = {
  mobileStepper: 1000,
  fab:           1050,
  speedDial:     1050,
  appBar:        zIndexValues.appBar,
  drawer:        zIndexValues.drawer,
  modal:         zIndexValues.modal,
  snackbar:      zIndexValues.snackbar,
  tooltip:       zIndexValues.tooltip,
};
