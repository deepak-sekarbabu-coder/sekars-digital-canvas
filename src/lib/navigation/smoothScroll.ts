/**
 * Smooth scroll utility with offset for fixed headers
 */

interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  behavior?: ScrollBehavior;
}

/**
 * Get the height of the fixed header
 */
export const getHeaderHeight = (): number => {
  const header = document.querySelector('header');
  return header ? header.offsetHeight : 64; // Default to 64px if header not found
};

/**
 * Smooth scroll to element with offset for fixed header
 */
export const scrollToElement = (elementId: string, options: SmoothScrollOptions = {}): void => {
  const {
    offset = getHeaderHeight() + 20, // Header height + 20px padding
    behavior = 'smooth',
  } = options;

  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with id "${elementId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: Math.max(0, offsetPosition), // Ensure we don't scroll above the page
    behavior,
  });
};

/**
 * Smooth scroll to top of page
 */
export const scrollToTop = (options: SmoothScrollOptions = {}): void => {
  const { behavior = 'smooth' } = options;

  window.scrollTo({
    top: 0,
    behavior,
  });
};

/**
 * Check if an element is in viewport considering header offset
 */
export const isElementInViewport = (elementId: string, threshold: number = 0.3): boolean => {
  const element = document.getElementById(elementId);
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const headerHeight = getHeaderHeight();
  const viewportHeight = window.innerHeight;

  // Element is considered "in view" if its top is below the header
  // and at least 30% of it is visible
  const elementTop = rect.top - headerHeight;
  const elementBottom = rect.bottom - headerHeight;
  const visibleHeight =
    Math.min(elementBottom, viewportHeight - headerHeight) - Math.max(elementTop, 0);
  const elementHeight = rect.height;

  return visibleHeight / elementHeight >= threshold && elementTop < viewportHeight - headerHeight;
};

/**
 * Get the currently active section based on scroll position and header offset
 */
export const getActiveSection = (sectionIds: string[]): string => {
  const scrollPosition = window.scrollY;
  const headerHeight = getHeaderHeight();
  const triggerPoint = scrollPosition + headerHeight + 50; // Header height + 50px buffer

  let activeSection = sectionIds[0]; // Default to first section

  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + scrollPosition;

      if (triggerPoint >= elementTop) {
        activeSection = id;
      } else {
        break;
      }
    }
  }

  return activeSection;
};
