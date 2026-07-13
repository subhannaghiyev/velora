import Typography, { type TypographyProps } from '@mui/material/Typography';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const LEVEL_VARIANT: Record<HeadingLevel, TypographyProps['variant']> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

export interface HeadingProps extends Omit<TypographyProps, 'variant' | 'component'> {
  level?: HeadingLevel;
  display?: boolean;
}

export function Heading({ level = 2, display, ...props }: HeadingProps) {
  const visualVariant = display ? 'h1' : LEVEL_VARIANT[level];
  const semanticTag = `h${level}` as React.ElementType;
  return (
    <Typography
      variant={visualVariant}
      component={semanticTag}
      {...props}
    />
  );
}
