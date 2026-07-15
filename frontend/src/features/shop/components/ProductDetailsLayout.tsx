import type { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface ProductDetailsLayoutProps {
  gallery:     ReactNode;
  information: ReactNode;
}

export function ProductDetailsLayout({ gallery, information }: ProductDetailsLayoutProps) {
  return (
    <Box
      sx={{
        display:               'grid',
        gridTemplateColumns:   { xs: '1fr', md: '1fr 1fr', lg: '11fr 9fr' },
        gap:                   { xs: 0, md: 8, lg: 10 },
        alignItems:            'start',
      }}
    >
      {/* Gallery column — sticky on desktop so it remains visible while info scrolls */}
      <Box
        sx={{
          position:  { md: 'sticky' },
          top:       { md: '96px' },
        }}
      >
        {gallery}
      </Box>

      {information}
    </Box>
  );
}
