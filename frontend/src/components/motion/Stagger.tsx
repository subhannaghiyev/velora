'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';
import { durationS, easingFM } from '@/theme';

// ─── Stagger container ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: { staggerChildren: staggerDelay },
  }),
};

export interface StaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function Stagger({ children, staggerDelay = 0.08, className }: StaggerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={reduced ? 0 : staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger item — must be a direct child of <Stagger> ─────────────────────

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durationS.normal, ease: easingFM.enter },
  },
};

export interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
