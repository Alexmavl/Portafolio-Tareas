// src/components/RevealSection.tsx
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { PropsWithChildren } from "react";

type RevealSectionProps = {
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  amount?: number;
  className?: string;
  id?: string;
};

const dirMap = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

export default function RevealSection({
  direction = "up",
  duration = 0.6,
  amount = 0.25,
  className = "",
  id,
  children,
}: PropsWithChildren<RevealSectionProps>) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  const baseOffset = dirMap[direction];
  const offset = reduce ? { x: 0, y: 0 } : baseOffset;

  return (
    <motion.section
      ref={ref as any}
      id={id}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : offset.x,
        y: inView ? 0 : offset.y,
      }}
      transition={{
        duration: reduce ? 0.001 : duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.section>
  );
}
