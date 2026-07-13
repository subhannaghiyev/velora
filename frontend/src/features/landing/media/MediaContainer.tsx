import Box, { type BoxProps } from '@mui/material/Box';

export interface MediaContainerProps extends BoxProps {
  radius?: string | number;
}

// Base wrapper for all media. Provides the position:relative context required
// by Next.js Image fill and the overflow:hidden needed for editorial cropping.
// All media components (HeroPoster, CampaignImage, ProductImage) must live inside this.
export function MediaContainer({ radius, sx, children, ...props }: MediaContainerProps) {
  return (
    <Box
      sx={[
        {
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          ...(radius !== undefined ? { borderRadius: radius } : {}),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Box>
  );
}
