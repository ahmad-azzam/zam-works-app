import type { TVariantAnimationParam } from "@/@types/index.type";
import type { Variants } from "framer-motion";

const fadeIn = ({ delay, direction }: TVariantAnimationParam): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1.2,
        ease: [0.25, 0.6, 0.3, 0.8],
        delay,
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay,
      },
    },
  };
};

const statContainer = (): Variants => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4, duration: 0.5, ease: "linear" },
    },
  };
};

const statItem = (): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.6, 0.3, 0.8] },
    },
  };
};

export { fadeIn, statContainer, statItem };
