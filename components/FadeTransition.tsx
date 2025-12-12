"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";


interface FadeTransitionProps {
  children: ReactNode;
}

export default function FadeTransition({ children }: FadeTransitionProps) {
  const pathname = usePathname();

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}