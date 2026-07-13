import Box, { type BoxProps } from '@mui/material/Box';

export type PageContainerProps = BoxProps;

export function PageContainer({ sx, ...props }: PageContainerProps) {
  return (
    <Box
      component="main"
      sx={[
        { flex: 1, display: 'flex', flexDirection: 'column' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
