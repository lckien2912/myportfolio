import { type Variants } from "framer-motion";

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const motionContainer = (
  delayChildren: number,
  staggerChildren: number
) => ({
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const eventMotion = (
  scaleHover: number,
  scaleTap: number
): Variants => ({
  hover: {
    scale: scaleHover,
  },
  tap: {
    scale: scaleTap,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
});

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: "tween" | "spring" | "linear",
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: "tween" | "spring" | "linear",
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
