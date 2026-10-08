"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Jeda animasi dalam detik (untuk efek berurutan). */
  delay?: number;
  /** Jarak geser dalam pixel. */
  y?: number;
};

/**
 * Wrapper animasi fade-in + slide saat masuk viewport.
 * Pakai di semua section supaya animasi konsisten.
 * Otomatis mematikan efek geser kalau user minta reduced motion.
 */
export function FadeIn({ children, className, delay = 0, y = 20 }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
