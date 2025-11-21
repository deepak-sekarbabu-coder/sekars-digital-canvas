// Utility functions for responsive image handling

export interface ResponsiveImageConfig {
  fileName: string;
  hasResponsiveVersions: boolean;
  breakpoints: number[];
  format: 'webp' | 'jpg' | 'png';
  responsivePath: string;
}

// Configuration for images that have responsive versions
export const RESPONSIVE_IMAGE_CONFIG: Record<string, ResponsiveImageConfig> = {
  deepak1: {
    fileName: 'deepak1',
    hasResponsiveVersions: true,
    breakpoints: [320, 480, 640, 768, 1024, 1280, 1536, 1920],
    format: 'webp',
    responsivePath: './pics/responsive',
  },
};

/**
 * Generate srcSet for responsive images
 */
export const generateResponsiveSrcSet = (
  baseSrc: string,
  maxWidth?: number
): { srcSet: string; sizes: string; hasResponsive: boolean } => {
  const fileName = baseSrc
    .split('/')
    .pop()
    ?.replace(/\.[^/.]+$/, '')
    ?.toLowerCase();
  const config = fileName ? RESPONSIVE_IMAGE_CONFIG[fileName] : null;

  // Debug logging in development
  if (import.meta.env.DEV) {
    console.log(`🔍 Checking responsive images for: ${baseSrc}`);
    console.log(`📁 Extracted filename: ${fileName}`);
    console.log(`⚙️ Config found:`, config ? 'Yes' : 'No');
  }

  if (config && config.hasResponsiveVersions) {
    // Use responsive images
    const filteredBreakpoints = config.breakpoints.filter((bp) => !maxWidth || bp <= maxWidth * 2);

    const srcSet = filteredBreakpoints
      .map((bp) => `${config.responsivePath}/${config.fileName}-${bp}w.${config.format} ${bp}w`)
      .join(', ');

    const sizes = maxWidth
      ? `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${maxWidth}px`
      : '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px';

    // Debug logging in development
    if (import.meta.env.DEV) {
      console.log(`📸 Generated srcSet:`, srcSet);
      console.log(`📐 Generated sizes:`, sizes);
    }

    return { srcSet, sizes, hasResponsive: true };
  } else {
    // Fallback to original image
    const breakpoints = [320, 480, 640, 768, 1024, 1280, 1536, 1920];
    const filteredBreakpoints = breakpoints.filter((bp) => !maxWidth || bp <= maxWidth * 2);

    const srcSet = filteredBreakpoints.map((bp) => `${baseSrc} ${bp}w`).join(', ');

    const sizes = maxWidth
      ? `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${maxWidth}px`
      : '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px';

    return { srcSet, sizes, hasResponsive: false };
  }
};

/**
 * Get the best image source for a given width
 */
export const getBestImageSrc = (baseSrc: string, targetWidth: number): string => {
  const fileName = baseSrc
    .split('/')
    .pop()
    ?.replace(/\.[^/.]+$/, '')
    ?.toLowerCase();
  const config = fileName ? RESPONSIVE_IMAGE_CONFIG[fileName] : null;

  if (config && config.hasResponsiveVersions) {
    // Find the best breakpoint for the target width
    const bestBreakpoint =
      config.breakpoints.filter((bp) => bp >= targetWidth).sort((a, b) => a - b)[0] ||
      config.breakpoints[config.breakpoints.length - 1];

    return `${config.responsivePath}/${config.fileName}-${bestBreakpoint}w.${config.format}`;
  }

  return baseSrc;
};

/**
 * Check if an image has responsive versions
 */
export const hasResponsiveVersions = (baseSrc: string): boolean => {
  const fileName = baseSrc
    .split('/')
    .pop()
    ?.replace(/\.[^/.]+$/, '')
    ?.toLowerCase();
  return fileName ? RESPONSIVE_IMAGE_CONFIG[fileName]?.hasResponsiveVersions || false : false;
};

/**
 * Add a new responsive image configuration
 */
export const addResponsiveImageConfig = (
  fileName: string,
  config: Omit<ResponsiveImageConfig, 'fileName'>
) => {
  RESPONSIVE_IMAGE_CONFIG[fileName] = {
    fileName,
    ...config,
  };
};
