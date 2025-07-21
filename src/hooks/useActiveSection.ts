import { useState, useEffect, useCallback } from 'react';
import { getActiveSection } from '@/utils/smoothScroll';

interface UseActiveSectionOptions {
  sectionIds: string[];
  rootMargin?: string;
  threshold?: number;
}

export const useActiveSection = ({ sectionIds }: UseActiveSectionOptions) => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const updateActiveSection = useCallback(() => {
    const newActiveSection = getActiveSection(sectionIds);

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [sectionIds, activeSection]);

  useEffect(() => {
    // Initial check
    updateActiveSection();

    // Use throttled scroll listener for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [updateActiveSection]);

  return activeSection;
};
