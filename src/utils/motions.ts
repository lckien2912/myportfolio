import { type Variants } from "framer-motion";

export const eventMotion = (
  scaleHover: number,
  scaleTap: number
): Variants => ({
  hover: {
    scale: scaleHover,
    // opacity: 0.85,
  },
  tap: {
    scale: scaleTap,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
});
