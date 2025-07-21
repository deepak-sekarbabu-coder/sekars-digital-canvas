import { useState, useEffect, useCallback } from 'react';
import { generateResponsiveSrcSet } from '@/utils/responsive-images';

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
  height,
  quality = 75,
  format = 'webp',
  priority = false,
}: ImageOptimizationOptions): OptimizedImageData => {
  const [optimizedData, setOptimizedData] = useState<OptimizedImageData>({
    src,
    srcSet: '',
    sizes: '100vw',
  });

  // Generate different sizes for responsive images
  const generateResponsiveSizes = useCallback(
    (baseSrc: string) => {
      // Use the utility function to generate responsive srcSet
      const { srcSet, sizes, hasResponsive } = generateResponsiveSrcSet(baseSrc, width);

      // Log in development to show which images are using responsive versions
      if (import.meta.env.DEV && hasResponsive) {
        console.log(`📸 Using responsive images for: ${baseSrc}`);
      }

      return { srcSet, sizes };
    },
    [width]
  );

  // Generate blur placeholder
  const generateBlurPlaceholder = useCallback(async (imageSrc: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Small canvas for blur effect
        canvas.width = 10;
        canvas.height = 10;

        if (ctx) {
          ctx.filter = 'blur(2px)';
          ctx.drawImage(img, 0, 0, 10, 10);
          resolve(canvas.toDataURL('image/jpeg', 0.1));
        } else {
          resolve('');
        }
      };

      img.onerror = () => resolve('');
      img.src = imageSrc;
    });
  }, []);

  useEffect(() => {
    const optimizeImage = async () => {
      const { srcSet, sizes } = generateResponsiveSizes(src);

      // Generate blur placeholder for non-priority images
      let placeholder = '';
      if (!priority) {
        try {
          placeholder = await generateBlurPlaceholder(src);
        } catch (error) {
          console.warn('Failed to generate blur placeholder:', error);
        }
      }

      setOptimizedData({
        src,
        srcSet,
        sizes,
        placeholder,
      });
    };

    optimizeImage();
  }, [src, generateResponsiveSizes, generateBlurPlaceholder, priority]);

  return optimizedData;
};

// Utility function to preload critical images
export const preloadImage = (src: string, priority = false) => {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = priority ? 'preload' : 'prefetch';
  link.as = 'image';
  link.href = src;

  // Add to head if not already present
  if (!document.querySelector(`link[href="${src}"]`)) {
    document.head.appendChild(link);
  }
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
