import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ReactNode, useEffect, useState, useLayoutEffect } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Mark first render complete after mount
  useLayoutEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    const raf = requestAnimationFrame(() => {
      setIsFirstRender(false);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // No animation on first render or if user prefers reduced motion
  if (prefersReducedMotion || isFirstRender) {
    return <div key={location.pathname}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0.85, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.85, y: -4 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
