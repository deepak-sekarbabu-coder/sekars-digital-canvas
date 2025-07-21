import { forwardRef } from 'react';
import ResponsiveImage from '@/components/ui/responsive-image';
import { useImageOptimization, preloadImage } from '@/hooks/useImageOptimization';
import { cn } from '@/lib/utils';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
  preload?: boolean;
}

const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      className,
      priority = false,
      quality = 75,
      fill = false,
      sizes,
      objectFit = 'cover',
      objectPosition = 'center',
      placeholder = 'blur',
      onLoad,
      onError,
      preload = false,
      ...props
    },
    ref
  ) => {
    // Optimize image with responsive sizes and blur placeholder
    const optimizedImage = useImageOptimization({
      src,
      width,
      height,
      quality,
      priority,
    });

    // Preload image if requested
    if (preload || priority) {
      preloadImage(src, priority);
    }

    return (
      <div ref={ref} className="relative">
        <ResponsiveImage
          src={optimizedImage.src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={quality}
          sizes={sizes || optimizedImage.sizes}
          srcSet={optimizedImage.srcSet}
          className={className}
          fill={fill}
          objectFit={objectFit}
          objectPosition={objectPosition}
          placeholder={placeholder}
          blurDataURL={optimizedImage.placeholder}
          onLoad={onLoad}
          onError={onError}
          loading={priority ? 'eager' : 'lazy'}
          {...props}
        />
      </div>
    );
  }
);

Image.displayName = 'Image';

export default Image;
