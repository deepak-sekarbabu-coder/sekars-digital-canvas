import { useMemo } from 'react';
import { generateResponsiveSrcSet } from '@/lib/images/responsive-images';

interface ImageOptimizationOptions {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  priority?: boolean;
}

interface OptimizedImageData {
  src: string;
  srcSet: string;
  sizes: string;
  placeholder?: string;
}

export const useImageOptimization = ({
  src,
  width,
  priority = false,
}: ImageOptimizationOptions): OptimizedImageData => {
  return useMemo(() => {
    const { srcSet, sizes } = generateResponsiveSrcSet(src, width);

    return {
      src,
      srcSet,
      sizes,
      placeholder: priority ? undefined : '',
    };
  }, [src, width, priority]);
};

const preloadRegistry = new Set<string>();

// Utility function to preload critical images
export const preloadImage = (src: string, priority = false) => {
  if (typeof window === 'undefined' || preloadRegistry.has(src)) {
    return;
  }

  const selector = `link[rel="preload"][as="image"][href="${src}"], link[rel="prefetch"][as="image"][href="${src}"]`;
  if (document.querySelector(selector)) {
    preloadRegistry.add(src);
    return;
  }

  const link = document.createElement('link');
  link.rel = priority ? 'preload' : 'prefetch';
  link.as = 'image';
  link.href = src;

  document.head.appendChild(link);
  preloadRegistry.add(src);
};

// Check if browser supports modern image formats
export const checkImageFormatSupport = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;

  return {
    webp: canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0,
    avif: canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0,
  };
};
