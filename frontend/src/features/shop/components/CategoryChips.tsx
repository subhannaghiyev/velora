'use client';

import Box from '@mui/material/Box';
import MuiChip from '@mui/material/Chip';
import { rawColors, duration, easing, radius } from '@/theme';
import { SHOP_CHIP_CATEGORIES } from '../constants/shop.constants';
import type { ShopChipCategoryId } from '../constants/shop.constants';

interface CategoryChipsProps {
  selected: ShopChipCategoryId;
  onSelect: (id: ShopChipCategoryId) => void;
}

export function CategoryChips({ selected, onSelect }: CategoryChipsProps) {
  return (
    <Box
      component="ul"
      aria-label="Filter by category"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        listStyle: 'none',
        m: 0,
        p: 0,
      }}
    >
      {SHOP_CHIP_CATEGORIES.map(({ id, label }) => {
        const isSelected = selected === id;
        return (
          <Box component="li" key={id}>
            <MuiChip
              label={label}
              clickable
              aria-pressed={isSelected}
              onClick={() => onSelect(id)}
              sx={{
                height: 30,
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: `${radius.xs}px`,
                cursor: 'pointer',
                border: '1px solid',
                bgcolor: isSelected ? rawColors.neutral[900] : 'transparent',
                color: isSelected ? rawColors.neutral[50] : rawColors.neutral[600],
                borderColor: isSelected ? rawColors.neutral[900] : rawColors.neutral[200],
                transition: [
                  `background-color ${duration.fast}ms ${easing.standard}`,
                  `color ${duration.fast}ms ${easing.standard}`,
                  `border-color ${duration.fast}ms ${easing.standard}`,
                ].join(', '),
                '&:hover': {
                  bgcolor: isSelected ? rawColors.neutral[800] : rawColors.neutral[150],
                  borderColor: isSelected ? rawColors.neutral[800] : rawColors.neutral[300],
                  color: isSelected ? rawColors.neutral[50] : rawColors.neutral[900],
                },
                '&:focus-visible': {
                  outline: `2px solid ${rawColors.gold[400]}`,
                  outlineOffset: 2,
                  boxShadow: 'none',
                },
                '& .MuiChip-label': {
                  px: 1.5,
                  lineHeight: 1,
                },
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}
