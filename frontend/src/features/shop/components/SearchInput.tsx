'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { rawColors, lightTokens, duration, easing, radius } from '@/theme';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Box sx={{ mb: { xs: 4, md: 5 } }}>
      <Typography
        component="label"
        htmlFor="shop-search"
        sx={{
          display: 'block',
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'text.secondary',
          mb: 1.5,
        }}
      >
        Search
      </Typography>

      <OutlinedInput
        id="shop-search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Garment name"
        size="small"
        inputProps={{ 'aria-label': 'Search products by name' }}
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined
              sx={{ fontSize: 15, color: rawColors.neutral[400] }}
              aria-hidden="true"
            />
          </InputAdornment>
        }
        sx={{
          width: { xs: '100%', md: 320 },
          borderRadius: `${radius.xs}px`,
          fontSize: '0.875rem',
          fontWeight: 400,
          color: 'text.primary',
          bgcolor: 'background.default',
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
          '& input': {
            py: 1,
            px: 0.5,
          },
          '& input::placeholder': {
            color: rawColors.neutral[400],
            opacity: 1,
          },
          transition: `border-color ${duration.fast}ms ${easing.standard}`,
        }}
      />
    </Box>
  );
}
