import MuiCard, { type CardProps as MuiCardProps } from '@mui/material/Card';
import { shadowTokens, duration, easing } from '@/theme';

export interface CardProps extends MuiCardProps {
  interactive?: boolean;
}

export function Card({ interactive, sx, ...props }: CardProps) {
  return (
    <MuiCard
      sx={[
        {
          transition: `box-shadow ${duration.fast}ms ${easing.standard}`,
        },
        interactive
          ? {
              cursor: 'pointer',
              '&:hover': { boxShadow: shadowTokens.sm },
            }
          : false,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
