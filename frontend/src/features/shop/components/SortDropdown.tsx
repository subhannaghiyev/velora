'use client';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { rawColors, lightTokens, radius } from '@/theme';
import { SHOP_SORT_DISPLAY } from '../constants/shop.constants';
import type { ShopSortDisplay } from '../constants/shop.constants';

interface SortDropdownProps {
  value: ShopSortDisplay;
  onChange: (value: ShopSortDisplay) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <Select
      value={value}
      onChange={(e) => onChange(e.target.value as ShopSortDisplay)}
      variant="outlined"
      size="small"
      inputProps={{ 'aria-label': 'Sort products by' }}
      sx={{
        minWidth: 188,
        fontSize: '0.6875rem',
        fontWeight: 500,
        letterSpacing: '0.06em',
        color: 'text.secondary',
        borderRadius: `${radius.xs}px`,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: lightTokens.border.subtle,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: rawColors.neutral[300],
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: rawColors.gold[400],
          borderWidth: 2,
        },
        '& .MuiSelect-select': {
          py: 1,
          px: 1.5,
        },
        '&.Mui-focused': {
          outline: `2px solid ${rawColors.gold[400]}`,
          outlineOffset: 2,
        },
      }}
      MenuProps={{
        slotProps: {
          paper: {
            sx: {
              borderRadius: `${radius.md}px`,
              boxShadow: '0 4px 16px rgba(28,27,25,0.10)',
              mt: 0.5,
              bgcolor: 'background.paper',
            },
          },
        },
      }}
    >
      {SHOP_SORT_DISPLAY.map((option) => (
        <MenuItem
          key={option}
          value={option}
          sx={{
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '0.02em',
            color: 'text.primary',
            py: 1.25,
            px: 2,
            '&.Mui-selected': {
              bgcolor: rawColors.neutral[100],
            },
            '&.Mui-selected:hover': {
              bgcolor: rawColors.neutral[150],
            },
            '&:hover': {
              bgcolor: rawColors.neutral[50],
            },
          }}
        >
          {option}
        </MenuItem>
      ))}
    </Select>
  );
}
