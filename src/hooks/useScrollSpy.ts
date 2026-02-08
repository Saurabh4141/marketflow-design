import { useState, useEffect, useCallback, useRef } from 'react';

interface UseScrollSpyOptions {
  offset?: number;
  throttleMs?: number;
}

export const useScrollSpy = (
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
) => {
  const { offset = 120, throttleMs = 100 } = options;
  const [activeSection, setActiveSection] = useState<string>('');
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (throttleTimeout.current) return;

    throttleTimeout.current = setTimeout(() => {
      throttleTimeout.current = null;

      const scrollPosition = window.scrollY + offset;
      let currentSection = '';

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // If no section found, check if we're at the top
      if (!currentSection && sectionIds.length > 0) {
        const firstElement = document.getElementById(sectionIds[0]);
        if (firstElement && window.scrollY < firstElement.offsetTop) {
          currentSection = sectionIds[0];
        }
      }

      // If still no section, use the last visible one
      if (!currentSection && sectionIds.length > 0) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const element = document.getElementById(sectionIds[i]);
          if (element && scrollPosition >= element.offsetTop) {
            currentSection = sectionIds[i];
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    }, throttleMs);
  }, [sectionIds, offset, throttleMs, activeSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, [handleScroll]);

  // Handle hash on initial load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sectionIds.includes(hash)) {
      setTimeout(() => {
        scrollToSection(hash, offset);
      }, 100);
    }
  }, [sectionIds, offset]);

  return activeSection;
};

// Utility function to scroll to section
export const scrollToSection = (sectionId: string, offset: number = 120) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // Update URL hash without triggering scroll
    window.history.pushState(null, '', `#${sectionId}`);
  }
};

export default useScrollSpy;
