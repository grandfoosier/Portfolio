import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
      exit={{ opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
