import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { radius } from '@/theme';

export interface ButtonProps extends MuiButtonProps {
  pill?: boolean;
}

export function Button({ pill, sx, ...props }: ButtonProps) {
  return (
    <MuiButton
      sx={[
        pill ? { borderRadius: `${radius.pill}px` } : false,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
