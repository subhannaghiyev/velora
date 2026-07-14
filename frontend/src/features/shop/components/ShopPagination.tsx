'use client';

import Box from '@mui/material/Box';
import MuiPagination from '@mui/material/Pagination';
import type { ChangeEvent } from 'react';
import { rawColors, radius } from '@/theme';

interface ShopPaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function ShopPagination({ page, totalPages, onChange }: ShopPaginationProps) {
  if (totalPages <= 1) return null;

  function handleChange(_event: ChangeEvent<unknown>, value: number) {
    onChange(value);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: { xs: 8, md: 10 },
      }}
    >
      <MuiPagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        size="small"
        aria-label="Product pagination"
        sx={{
          '& .MuiPaginationItem-root': {
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: 'text.secondary',
            borderRadius: `${radius.xs}px`,
            minWidth: 32,
            height: 32,
            border: 'none',
            transition: 'background-color 150ms ease, color 150ms ease',
            '&:hover': {
              bgcolor: rawColors.neutral[150],
              color: 'text.primary',
            },
            '&.Mui-selected': {
              bgcolor: rawColors.neutral[900],
              color: rawColors.neutral[50],
              '&:hover': {
                bgcolor: rawColors.neutral[800],
              },
            },
            '&:focus-visible': {
              outline: `2px solid ${rawColors.gold[400]}`,
              outlineOffset: 2,
            },
            '&.MuiPaginationItem-ellipsis': {
              color: rawColors.neutral[400],
              cursor: 'default',
            },
          },
        }}
      />
    </Box>
  );
}
