import Box, { type BoxProps } from '@mui/material/Box';
import { layout } from '@/theme';

export interface ContainerProps extends BoxProps {
  narrow?: boolean;
}

export function Container({ narrow, sx, ...props }: ContainerProps) {
  return (
    <Box
      sx={[
        {
          width: '100%',
          maxWidth: narrow ? 768 : layout.maxWidth,
          mx: 'auto',
          px: {
            xs: `${layout.containerPx}px`,
            md: `${layout.containerPxMd}px`,
            lg: `${layout.containerPxLg}px`,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
