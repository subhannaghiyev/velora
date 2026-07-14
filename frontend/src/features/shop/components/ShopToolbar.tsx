'use client';

import Box from '@mui/material/Box';
import { ProductCount } from './ProductCount';
import { CategoryChips } from './CategoryChips';
import { SortDropdown } from './SortDropdown';
import type { ShopChipCategoryId, ShopSortDisplay } from '../constants/shop.constants';

interface ShopToolbarProps {
  productCount: number;
  category: ShopChipCategoryId;
  onCategory: (id: ShopChipCategoryId) => void;
  sort: ShopSortDisplay;
  onSort: (value: ShopSortDisplay) => void;
}

export function ShopToolbar({
  productCount,
  category,
  onCategory,
  sort,
  onSort,
}: ShopToolbarProps) {
  return (
    <Box
      role="toolbar"
      aria-label="Shop controls"
      sx={{ mb: { xs: 6, md: 8 } }}
    >
      <Box
        sx={{
          display: 'grid',
          alignItems: 'center',
          columnGap: { md: 4 },
          rowGap: 3,
          gridTemplateColumns: {
            xs: '1fr auto',
            md: 'auto auto 1fr auto',
          },
          gridTemplateAreas: {
            xs: `"chips chips" "count sort"`,
            md: `"count chips . sort"`,
          },
        }}
      >
        <Box sx={{ gridArea: 'count' }}>
          <ProductCount count={productCount} />
        </Box>

        <Box sx={{ gridArea: 'chips' }}>
          <CategoryChips selected={category} onSelect={onCategory} />
        </Box>

        <Box sx={{ gridArea: 'sort', display: 'flex', justifyContent: 'flex-end' }}>
          <SortDropdown value={sort} onChange={onSort} />
        </Box>
      </Box>
    </Box>
  );
}
