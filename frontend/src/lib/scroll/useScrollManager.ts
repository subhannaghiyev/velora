import { useState, useEffect, useCallback } from 'react';

export interface ScrollState {
  y: number;
  isAtTop: boolean;
  direction: 'up' | 'down' | null;
}

export interface ScrollManager extends ScrollState {
  scrollToTop: () => void;
}

// Centralized scroll state. All scroll-aware components use this hook
// so future route-level scroll logic has a single place to extend.
export function useScrollManager(): ScrollManager {
  const [state, setState] = useState<ScrollState>({
    y: 0,
    isAtTop: true,
    direction: null,
  });

  useEffect(() => {
    let prevY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      setState({
        y,
        isAtTop: y < 10,
        direction: y > prevY ? 'down' : 'up',
      });
      prevY = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { ...state, scrollToTop };
}
