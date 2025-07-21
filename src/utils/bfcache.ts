// Back/Forward Cache optimization utilities
export const initializeBfcacheOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Handle page visibility changes to help with bfcache
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      // Clean up any ongoing operations when page becomes hidden
      // This helps with bfcache eligibility
    }
  };

  // Handle page show/hide events for bfcache
  const handlePageShow = (event: PageTransitionEvent) => {
    if (event.persisted) {
      // Page was restored from bfcache
      // Reinitialize any necessary components
    }
  };

  const handlePageHide = (event: PageTransitionEvent) => {
    if (event.persisted) {
      // Page is being stored in bfcache
      // Clean up any resources that might prevent caching
    }
  };

  // Add event listeners with proper cleanup
  document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true });
  window.addEventListener('pageshow', handlePageShow, { passive: true });
  window.addEventListener('pagehide', handlePageHide, { passive: true });

  // Return cleanup function
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('pageshow', handlePageShow);
    window.removeEventListener('pagehide', handlePageHide);
  };
};

// Check if page was restored from bfcache
export const wasRestoredFromBfcache = () => {
  return (
    typeof window !== 'undefined' &&
    window.performance &&
    window.performance.getEntriesByType &&
    window.performance.getEntriesByType('navigation').length > 0 &&
    (window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming).type ===
      'back_forward'
  );
};
