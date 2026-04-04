import * as React from 'react';

// Breakpoints matching Tailwind config
const BREAKPOINTS = {
  '2xs': 375,
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1400,
  '3xl': 1600,
  '4xl': 1920,
} as const;

type Breakpoint = keyof typeof BREAKPOINTS;
type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'wide';

interface ResponsiveState {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWide: boolean;
  deviceType: DeviceType;
  isPortrait: boolean;
  isLandscape: boolean;
  breakpoint: Breakpoint | null;
  isAbove: (bp: Breakpoint) => boolean;
  isBelow: (bp: Breakpoint) => boolean;
  isBetween: (min: Breakpoint, max: Breakpoint) => boolean;
}

function getDeviceType(width: number): DeviceType {
  if (width < BREAKPOINTS.md) return 'mobile';
  if (width < BREAKPOINTS.lg) return 'tablet';
  if (width < BREAKPOINTS['2xl']) return 'desktop';
  return 'wide';
}

function getBreakpoint(width: number): Breakpoint | null {
  const entries = Object.entries(BREAKPOINTS) as [Breakpoint, number][];
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i];
    if (entry) {
      const [key, value] = entry;
      if (width >= value) return key;
    }
  }
  return null;
}

export function useResponsive(): ResponsiveState {
  const [state, setState] = React.useState<ResponsiveState>(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 0;
    const height = typeof window !== 'undefined' ? window.innerHeight : 0;
    const deviceType = getDeviceType(width);
    const breakpoint = getBreakpoint(width);

    return {
      width,
      height,
      isMobile: deviceType === 'mobile',
      isTablet: deviceType === 'tablet',
      isDesktop: deviceType === 'desktop',
      isWide: deviceType === 'wide',
      deviceType,
      isPortrait: height > width,
      isLandscape: width > height,
      breakpoint,
      isAbove: (bp: Breakpoint) => width >= BREAKPOINTS[bp],
      isBelow: (bp: Breakpoint) => width < BREAKPOINTS[bp],
      isBetween: (min: Breakpoint, max: Breakpoint) =>
        width >= BREAKPOINTS[min] && width < BREAKPOINTS[max],
    };
  });

  React.useEffect(() => {
    let rafId: number;

    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const deviceType = getDeviceType(width);
        const breakpoint = getBreakpoint(width);

        setState({
          width,
          height,
          isMobile: deviceType === 'mobile',
          isTablet: deviceType === 'tablet',
          isDesktop: deviceType === 'desktop',
          isWide: deviceType === 'wide',
          deviceType,
          isPortrait: height > width,
          isLandscape: width > height,
          breakpoint,
          isAbove: (bp: Breakpoint) => width >= BREAKPOINTS[bp],
          isBelow: (bp: Breakpoint) => width < BREAKPOINTS[bp],
          isBetween: (min: Breakpoint, max: Breakpoint) =>
            width >= BREAKPOINTS[min] && width < BREAKPOINTS[max],
        });
      });
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize, { passive: true });

    // Handle orientation change on mobile
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return state;
}

// Simple mobile check hook
export function useIsMobile() {
  const { isMobile } = useResponsive();
  return isMobile;
}

// Simple tablet check hook
export function useIsTablet() {
  const { isTablet } = useResponsive();
  return isTablet;
}

// Touch device detection
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = React.useState(false);

  React.useEffect(() => {
    const checkTouch = () => {
      setIsTouch(
        'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          // @ts-expect-error - msMaxTouchPoints is IE-specific
          navigator.msMaxTouchPoints > 0
      );
    };
    checkTouch();
  }, []);

  return isTouch;
}

// Reduced motion preference
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
