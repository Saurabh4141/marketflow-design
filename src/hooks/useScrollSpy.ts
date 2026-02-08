import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

interface UseScrollSpyOptions {
  offset?: number;
  throttleMs?: number;
}

export const useScrollSpy = (
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
) => {
  const { offset = 120, throttleMs = 50 } = options;
  const [activeSection, setActiveSection] = useState<string>('');
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);
  const activeSectionRef = useRef<string>('');

  // Keep ref in sync with state
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Check if reduced motion is preferred - memoized to avoid dependency issues
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Deterministic scroll position logic - find the last section that has scrolled past the offset
  const calculateActiveSection = useCallback(() => {
    if (sectionIds.length === 0) return '';

    const scrollY = window.scrollY;
    const buffer = 20; // Small buffer to prevent edge flickering
    const threshold = scrollY + offset + buffer;

    let activeId = sectionIds[0]; // Default to first section

    // Find the last section whose top has crossed the threshold
    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementTop = element.offsetTop;
        if (elementTop <= threshold) {
          activeId = sectionId;
        } else {
          // Once we find a section that hasn't crossed, stop
          break;
        }
      }
    }

    return activeId;
  }, [sectionIds, offset]);

  // Throttled scroll handler - stable effect that doesn't depend on activeSection
  useEffect(() => {
    if (sectionIds.length === 0) return;

    const handleScroll = () => {
      // Skip if we're in a click-triggered scroll
      if (isScrollingRef.current) return;

      // Cancel any pending RAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use RAF for smooth updates
      rafRef.current = requestAnimationFrame(() => {
        const newActiveSection = calculateActiveSection();
        // Use ref to compare to avoid stale closure
        if (newActiveSection && newActiveSection !== activeSectionRef.current) {
          setActiveSection(newActiveSection);
        }
      });
    };

    // Throttle scroll events
    let lastCall = 0;
    const throttledScroll = () => {
      const now = Date.now();
      if (now - lastCall >= throttleMs) {
        lastCall = now;
        handleScroll();
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Set initial active section
    const initialActive = calculateActiveSection();
    if (initialActive) {
      setActiveSection(initialActive);
    }

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [sectionIds, calculateActiveSection, throttleMs]);

  // Handle hash on initial load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sectionIds.includes(hash)) {
      // Set active immediately
      setActiveSection(hash);
      // Then scroll after a brief delay
      setTimeout(() => {
        scrollToSection(hash, offset, prefersReducedMotion);
      }, 100);
    }
  }, [sectionIds, offset, prefersReducedMotion]);

  // Manual set with scroll suspension
  const setActiveSectionManual = useCallback((sectionId: string) => {
    // Immediately update active state
    setActiveSection(sectionId);
    
    // Suspend scroll observer
    isScrollingRef.current = true;
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Resume observer after scroll settles
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 400);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return { activeSection, setActiveSectionManual };
};

// Utility function to scroll to section
export const scrollToSection = (
  sectionId: string, 
  offset: number = 120,
  prefersReducedMotion: boolean = false
) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    // Update URL hash without triggering scroll
    window.history.pushState(null, '', `#${sectionId}`);
  }
};

export default useScrollSpy;
