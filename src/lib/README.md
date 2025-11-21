# Library Directory (`src/lib`)

This directory contains utility functions, helpers, and shared logic organized by domain.

## Structure

### `utils.ts`

Core utility functions used throughout the application:

- `cn()` - Combines and merges Tailwind CSS classes using clsx and tailwind-merge

### `seo/`

SEO-related utilities and validators:

- `seo-validator.ts` - Development-time SEO validation and recommendations
- `sitemap.ts` - Sitemap generation utilities

### `images/`

Image optimization and validation utilities:

- `image-validation.ts` - Development-time image validation (format, size, optimization)
- `responsive-images.ts` - Responsive image srcset generation and optimization

### `performance/`

Performance optimization utilities:

- `bfcache.ts` - Back/Forward cache optimizations for better navigation performance
- `performance.ts` - Performance monitoring and metrics utilities

### `navigation/`

Navigation and scrolling utilities:

- `smoothScroll.ts` - Smooth scrolling implementation with header offset support
- `paths.ts` - Path utilities and route helpers

### `security/`

Security-related utilities:

- `csp.ts` - Content Security Policy utilities and nonce generation

## Usage

Import utilities using the `@/lib` path alias:

```typescript
import { cn } from '@/lib/utils';
import { scrollToElement } from '@/lib/navigation/smoothScroll';
import { generateResponsiveSrcSet } from '@/lib/images/responsive-images';
```

## Best Practices

1. **Keep utilities pure**: Functions should be side-effect free when possible
2. **Type everything**: All utilities should have proper TypeScript types
3. **Document complex logic**: Add JSDoc comments for non-obvious functionality
4. **Test utilities**: Consider adding unit tests for complex utilities
5. **Organize by domain**: Place new utilities in the appropriate subdirectory
