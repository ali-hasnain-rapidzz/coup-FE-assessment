import { MotionProps } from "framer-motion";

export const TRANSITIONS = {
  DEFAULT: { duration: 1.5, ease: "easeInOut" as const },
  SMOOTH_OUT: { duration: 1.5, ease: "easeOut" as const },
  DELAYED: { delay: 0.5 },
};

export const ANIMATIONS: Record<string, MotionProps> = {
  slideUp: {
    initial: { opacity: 0, y: 500 },
    animate: { opacity: 1, y: 0 },
    transition: { ...TRANSITIONS.DEFAULT },
  },
  slideUpDelayed: {
    initial: { opacity: 0, y: 500 },
    animate: { opacity: 1, y: 0 },
    transition: { ...TRANSITIONS.DEFAULT, ...TRANSITIONS.DELAYED },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { ...TRANSITIONS.SMOOTH_OUT, ...TRANSITIONS.DELAYED },
  },
  flyRight: {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: { 
      opacity: [1, 1, 0],
      x: [0, -3500],
      y: [0, -500]
    },
    transition: { 
      duration: 3.7, 
      ease: "easeIn", 
      delay: 2,
      times: [0, 0.99, 1] 
    }
  },
  flyLeft: {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: { 
      opacity: [1, 1, 0],
      x: [0, 3500],
      y: [0, -500]
    },
    transition: { 
      duration: 4, 
      ease: "easeIn", 
      delay: 2,
      times: [0, 0.99, 1] 
    }
  },
  cloudFloat: {
    animate: { x: [0, -50, 0] },
    transition: { repeat: Infinity, duration: 20, ease: "easeInOut" }
  },
  bounce: {
    animate: { y: [0, 10, 0] },
    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
  }
};
