import MuiStack, { type StackProps } from '@mui/material/Stack';

export type { StackProps };

export function Stack(props: StackProps) {
  return <MuiStack {...props} />;
}
