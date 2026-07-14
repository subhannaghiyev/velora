import Typography from '@mui/material/Typography';

interface ProductCountProps {
  count: number;
}

export function ProductCount({ count }: ProductCountProps) {
  return (
    <Typography
      component="p"
      aria-live="polite"
      aria-atomic="true"
      sx={{
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.04em',
        color: 'text.secondary',
        whiteSpace: 'nowrap',
      }}
    >
      {count} {count === 1 ? 'product' : 'products'}
    </Typography>
  );
}
