import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { rawColors } from '@/theme';
import type { Product } from '../types';

interface ProductDescriptionProps {
  product: Product;
}

const LABEL_SX = {
  fontSize:      '0.6875rem',
  fontWeight:    600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color:         rawColors.neutral[500],
  mb:            3,
} as const;

export function ProductDescription({ product }: ProductDescriptionProps) {
  return (
    <Box>
      <Typography
        variant="body1"
        component="p"
        sx={{ color: 'text.secondary', lineHeight: 1.8 }}
      >
        {product.description}
      </Typography>

      <Divider sx={{ my: 6, borderColor: rawColors.neutral[200] }} />

      <Box sx={{ mb: 5 }}>
        <Typography component="h2" sx={LABEL_SX}>
          Material
        </Typography>
        <Typography variant="body2" component="p" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
          {product.material.composition}
        </Typography>
      </Box>

      <Box>
        <Typography component="h2" sx={LABEL_SX}>
          Care
        </Typography>
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          {product.material.careInstructions.map((instruction) => (
            <Box component="li" key={instruction}>
              <Typography variant="body2" component="span" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {instruction}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
