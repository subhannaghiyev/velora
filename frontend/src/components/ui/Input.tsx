import TextField, { type TextFieldProps } from '@mui/material/TextField';

export type InputProps = TextFieldProps;

// Velora standard: outlined variant, full-width by default.
// fullWidth can be overridden inline when the context requires it.
export function Input({ variant = 'outlined', fullWidth = true, ...props }: InputProps) {
  return <TextField variant={variant} fullWidth={fullWidth} {...props} />;
}
