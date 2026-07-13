import MuiIconButton, { type IconButtonProps } from '@mui/material/IconButton';

export type { IconButtonProps };

// Velora standard: size="small" for all icon buttons.
// Matches the compact, editorial aesthetic defined in DESIGN_BIBLE.
export function IconButton({ size = 'small', ...props }: IconButtonProps) {
  return <MuiIconButton size={size} {...props} />;
}
