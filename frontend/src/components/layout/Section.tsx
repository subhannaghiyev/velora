import Box, { type BoxProps } from '@mui/material/Box';

type SectionSize = 'sm' | 'md' | 'lg' | 'xl';

const SECTION_PY: Record<SectionSize, object> = {
  sm: { xs: 6, md: 8 },
  md: { xs: 8, md: 10, lg: 12 },
  lg: { xs: 10, md: 14, lg: 16 },
  xl: { xs: 12, md: 16, lg: 20 },
};

export interface SectionProps extends BoxProps {
  size?: SectionSize;
}

export function Section({ size = 'md', sx, ...props }: SectionProps) {
  return (
    <Box
      component="section"
      sx={[
        { py: SECTION_PY[size] },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
