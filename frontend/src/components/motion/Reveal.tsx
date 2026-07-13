'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';
import { durationS, easingFM } from '@/theme';

export interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  margin?: string;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = durationS.moderate,
  distance = 24,
  once = true,
  margin = '-64px',
  className,
}: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
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
