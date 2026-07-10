'use client';

import { ReactNode } from 'react';
import { EmotionRegistry } from './EmotionRegistry';
import { ThemeProvider } from './ThemeProvider';
import { QueryProvider } from './QueryProvider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <EmotionRegistry>
      <ThemeProvider>
        <QueryProvider>{children}</QueryProvider>
      </ThemeProvider>
    </EmotionRegistry>
  );
}
