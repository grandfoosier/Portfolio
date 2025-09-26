import type { Variants } from "framer-motion";

// For scroll reveal
export const scrollVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// For hover lift
export const hoverVariants: Variants = {
  whileHover: {
    y: -6,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};
