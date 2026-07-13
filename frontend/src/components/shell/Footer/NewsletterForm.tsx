'use client';

import { useState, type FormEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';
import { rawColors, duration, easing, radius } from '@/theme';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}
    >
      <TextField
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email address for newsletter"
        size="small"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: `${radius.sm}px`,
            fontSize: '0.875rem',
            color: rawColors.neutral[50],
            '& fieldset': { borderColor: rawColors.neutral[700] },
            '&:hover fieldset': { borderColor: rawColors.neutral[500] },
            '&.Mui-focused fieldset': { borderColor: rawColors.gold[400] },
          },
          '& .MuiOutlinedInput-input': {
            '&::placeholder': { color: rawColors.neutral[600], opacity: 1 },
          },
        }}
      />
      <MuiButton
        type="submit"
        variant="outlined"
        size="small"
        fullWidth
        sx={{
          borderColor: rawColors.neutral[700],
          color: rawColors.neutral[400],
          fontSize: '0.6875rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          borderRadius: `${radius.sm}px`,
          transition: `border-color ${duration.fast}ms ${easing.standard}, color ${duration.fast}ms ${easing.standard}`,
          '&:hover': {
            borderColor: rawColors.gold[400],
            color: rawColors.gold[400],
            bgcolor: 'transparent',
          },
        }}
      >
        Subscribe
      </MuiButton>
    </Box>
  );
}
