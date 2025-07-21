import { useState, useEffect, useCallback } from 'react';

interface UseActiveSectionOptions {
  sectionIds: string[];
  rootMargin?: string;
  threshold?: number;
}

export const useActiveSection = ({ sectionIds }: UseActiveSectionOptions) => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const triggerPoint = scrollPosition + windowHeight * 0.3; // 30% from top of viewport

    // Find the section that should be active based on scroll position
    let newActiveSection = sectionIds[0]; // Default to first section

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;

        // If the trigger point has passed this section's top, it becomes active
        if (triggerPoint >= elementTop) {
          newActiveSection = id;
        } else {
          break; // Stop at the first section we haven't reached yet
        }
      }
    }

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
