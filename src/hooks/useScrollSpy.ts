import { useState, useEffect, useCallback, useRef } from 'react';

interface UseScrollSpyOptions {
  offset?: number;
  rootMargin?: string;
}

// Store for manual override (click-triggered active state)
let manualOverride: { id: string; timestamp: number } | null = null;
const MANUAL_OVERRIDE_DURATION = 800; // ms to ignore observer after click

export const useScrollSpy = (
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
) => {
  const { offset = 120, rootMargin = '-20% 0px -70% 0px' } = options;
  const [activeSection, setActiveSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Check if reduced motion is preferred
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    if (sectionIds.length === 0) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Check if manual override is active
      if (manualOverride && Date.now() - manualOverride.timestamp < MANUAL_OVERRIDE_DURATION) {
        return;
      }

      // Find the most visible section
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Sort by intersection ratio and pick the most visible
        const mostVisible = visibleEntries.reduce((prev, current) => 
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        
        const newActiveId = mostVisible.target.id;
        if (newActiveId !== activeSection) {
          setActiveSection(newActiveId);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    });

    // Observe all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    // Set initial active section
    if (!activeSection && sectionIds.length > 0) {
      setActiveSection(sectionIds[0]);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds, rootMargin]);

  // Handle hash on initial load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sectionIds.includes(hash)) {
      setTimeout(() => {
        scrollToSection(hash, offset, prefersReducedMotion);
        setActiveSection(hash);
      }, 100);
    }
  }, [sectionIds, offset, prefersReducedMotion]);

  // Method to manually set active section (for click handling)
  const setActiveSectionManual = useCallback((sectionId: string) => {
    manualOverride = { id: sectionId, timestamp: Date.now() };
    setActiveSection(sectionId);
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
