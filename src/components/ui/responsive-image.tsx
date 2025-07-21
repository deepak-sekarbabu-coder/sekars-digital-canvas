import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  srcSet?: string; // Add srcSet as a prop
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
}

const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  sizes = '100vw',
  srcSet,
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center',
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
  loading = 'lazy',
  ...props
}: ResponsiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Use provided srcSet or fallback to basic responsive srcSet
  const finalSrcSet =
    srcSet ||
    (() => {
      const ext = src.split('.').pop();
      const baseName = src.replace(`.${ext}`, '');
      const breakpoints = [320, 480, 768, 1024, 1200, 1920];
      return breakpoints.map((bp) => `${src} ${bp}w`).join(', ');
    })();

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Container styles for fill mode
  const containerStyles = fill
    ? {
        position: 'relative' as const,
        width: '100%',
        height: '100%',
      }
    : {};

  // Image styles
  const imageStyles = fill
    ? {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit,
        objectPosition,
      }
    : {
        objectFit,
        objectPosition,
      };

  // Placeholder styles
  const placeholderStyles =
    placeholder === 'blur' && blurDataURL
      ? {
          backgroundImage: `url(${blurDataURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
        }
      : {};

  return (
    <div
      ref={containerRef}
      style={containerStyles}
      className={cn('overflow-hidden', fill && 'relative', className)}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div
          className={cn('animate-pulse bg-muted', fill ? 'absolute inset-0' : 'h-full w-full')}
          style={{
            ...placeholderStyles,
            ...(width && height && !fill ? { width, height } : {}),
          }}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div
          className={cn(
            'flex items-center justify-center bg-muted text-muted-foreground',
            fill ? 'absolute inset-0' : 'h-full w-full'
          )}
          style={width && height && !fill ? { width, height } : {}}
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Actual image */}
      {(isInView || priority) && !hasError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          sizes={sizes}
          srcSet={finalSrcSet}
          className={className}
          loading={priority ? 'eager' : loading}
          decoding="async"
          style={{
            ...imageStyles,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default ResponsiveImage;
