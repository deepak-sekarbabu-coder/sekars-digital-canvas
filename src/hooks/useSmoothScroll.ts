import { useCallback } from 'react';
import { scrollToElement, scrollToTop } from '@/utils/smoothScroll';

/**
 * Custom hook for smooth scrolling with header offset
 */
export const useSmoothScroll = () => {
  const scrollTo = useCallback((elementId: string, offset?: number) => {
    if (elementId === 'hero' || elementId === 'top') {
      scrollToTop();
    } else {
      scrollToElement(elementId, { offset });
    }
  }, []);

  const scrollToWithCustomOffset = useCallback((elementId: string, offset: number) => {
    scrollToElement(elementId, { offset });
  }, []);

  return {
    scrollTo,
    scrollToWithCustomOffset,
    scrollToTop: () => scrollToTop(),
  };
};
