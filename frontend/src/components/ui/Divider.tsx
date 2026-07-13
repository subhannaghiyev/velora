import MuiDivider, { type DividerProps as MuiDividerProps } from '@mui/material/Divider';

export interface DividerProps extends MuiDividerProps {
  spacing?: number | string;
}

// spacing adds vertical margin (my) — avoids hardcoding margin at every call-site.
export function Divider({ spacing, sx, ...props }: DividerProps) {
  return (
    <MuiDivider
      sx={[
        spacing !== undefined ? { my: spacing } : false,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
