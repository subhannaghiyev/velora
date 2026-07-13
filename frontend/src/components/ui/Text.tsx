import Typography, { type TypographyProps } from '@mui/material/Typography';

type TextSize = 'lg' | 'md' | 'sm' | 'xs';

const SIZE_VARIANT: Record<TextSize, TypographyProps['variant']> = {
  lg: 'subtitle1',
  md: 'body1',
  sm: 'body2',
  xs: 'caption',
};

export interface TextProps extends Omit<TypographyProps, 'variant'> {
  size?: TextSize;
  muted?: boolean;
}

export function Text({ size = 'md', muted, sx, ...props }: TextProps) {
  return (
    <Typography
      variant={SIZE_VARIANT[size]}
      sx={[
        muted ? { color: 'text.secondary' } : false,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
