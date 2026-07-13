'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';
import { durationS, easingFM } from '@/theme';

export interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function SlideUp({
  children,
  delay = 0,
  duration = durationS.moderate,
  distance = 24,
  className,
}: SlideUpProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: easingFM.enter,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
