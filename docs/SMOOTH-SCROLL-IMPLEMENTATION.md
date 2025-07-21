# Smooth Scroll with Fixed Header Offset Implementation

This document describes the implementation of smooth scrolling with proper offset handling for the fixed header in the portfolio application.

## Overview

The implementation provides smooth scrolling functionality that accounts for the fixed header height, ensuring that when users click navigation links or scroll to sections, the content appears properly below the header rather than being hidden behind it.

## Key Components

### 1. Smooth Scroll Utility (`src/utils/smoothScroll.ts`)

Core utility functions for smooth scrolling:

- `getHeaderHeight()`: Dynamically calculates the fixed header height
- `scrollToElement(elementId, options)`: Scrolls to a specific element with offset
- `scrollToTop(options)`: Scrolls to the top of the page
- `isElementInViewport(elementId, threshold)`: Checks if element is visible considering header
- `getActiveSection(sectionIds)`: Determines the currently active section

### 2. Custom Hook (`src/hooks/useSmoothScroll.ts`)

React hook that provides easy-to-use scroll functions:

```typescript
const { scrollTo, scrollToWithCustomOffset, scrollToTop } = useSmoothScroll();

// Usage examples
scrollTo('about'); // Scroll to about section with default offset
scrollTo('hero'); // Scroll to top (special case)
scrollToWithCustomOffset('skills', 100); // Custom offset
scrollToTop(); // Scroll to page top
```

### 3. Updated Active Section Hook (`src/hooks/useActiveSection.ts`)

Enhanced to use the new smooth scroll utility for better active section detection that accounts for the header offset.

### 4. CSS Enhancements (`src/index.css`)

Added CSS utilities and improvements:

```css
/* Enhanced smooth scrolling */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem; /* Account for fixed header */
}

/* Utility classes */
.scroll-offset {
  scroll-margin-top: 5rem;
}
.scroll-offset-lg {
  scroll-margin-top: 6rem;
}
.scroll-offset-sm {
  scroll-margin-top: 4rem;
}
```

## Implementation Details

### Header Component Updates

The Header component now uses the smooth scroll utility:

```typescript
import { scrollToElement, scrollToTop } from '@/utils/smoothScroll';

const scrollToSection = (id: string) => {
  if (id === 'hero') {
    scrollToTop();
  } else {
    scrollToElement(id);
  }
  setIsMenuOpen(false);
};
```

### Section Components

All main sections now include the `scroll-offset` class:

- About: `className="scroll-offset bg-gradient-section py-20"`
- Experience: `className="scroll-offset bg-background py-20"`
- Skills: `className="scroll-offset bg-gradient-section py-20"`
- Education: `className="scroll-offset bg-background py-20"`
- Contact: `className="scroll-offset bg-background py-20"`

## Features

### 1. Dynamic Header Height Detection

- Automatically detects the actual header height
- Fallback to 64px if header element not found
- Adapts to different screen sizes and header states

### 2. Smooth Scrolling with Offset

- Accounts for fixed header height plus additional padding
- Prevents content from being hidden behind the header
- Smooth animation using native `scroll-behavior`

### 3. Active Section Detection

- Enhanced algorithm that considers header offset
- Proper highlighting of navigation items
- Smooth transitions between sections

### 4. Mobile Responsive

- Works correctly on all screen sizes
- Proper handling of mobile navigation menu
- Optimized for touch devices

## Usage Examples

### Basic Navigation

```typescript
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const MyComponent = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <button onClick={() => scrollTo('about')}>
      Go to About Section
    </button>
  );
};
```

### Custom Offset

```typescript
const { scrollToWithCustomOffset } = useSmoothScroll();

// Scroll with custom offset (e.g., for special sections)
scrollToWithCustomOffset('special-section', 120);
```

### Direct Utility Usage

```typescript
import { scrollToElement, getHeaderHeight } from '@/utils/smoothScroll';

// Get current header height
const headerHeight = getHeaderHeight();

// Scroll with custom options
scrollToElement('target', {
  offset: headerHeight + 50,
  behavior: 'smooth',
});
```

## Browser Compatibility

- Modern browsers with `scroll-behavior: smooth` support
- Fallback to instant scrolling in older browsers
- Uses `requestAnimationFrame` for performance optimization
- Passive event listeners for better performance

## Performance Considerations

- Throttled scroll event listeners using `requestAnimationFrame`
- Passive event listeners to prevent blocking
- Efficient DOM queries with caching
- Minimal re-renders through proper React hooks usage

## Testing

To test the smooth scroll functionality:

1. Use the navigation menu to jump between sections
2. Verify that content appears properly below the header
3. Test on different screen sizes and devices
4. Check that active section highlighting works correctly

### Optional Demo Component

A `ScrollDemo` component is available for testing purposes:

```typescript
import ScrollDemo from '@/components/ScrollDemo';

// Add to your page temporarily for testing
<ScrollDemo />
```

## Customization

### Adjusting Offset

Modify the default offset in `smoothScroll.ts`:

```typescript
const scrollToElement = (elementId: string, options = {}) => {
  const { offset = getHeaderHeight() + 30 } = options; // Increase padding
  // ...
};
```

### Custom CSS Classes

Add new scroll offset utilities in `index.css`:

```css
.scroll-offset-xl {
  scroll-margin-top: 8rem;
}
.scroll-offset-custom {
  scroll-margin-top: calc(var(--header-height) + 2rem);
}
```

## Troubleshooting

### Common Issues

1. **Content still hidden behind header**
   - Check if the section has the `scroll-offset` class
   - Verify header height calculation is correct
   - Ensure CSS `scroll-padding-top` is applied

2. **Jerky scrolling**
   - Check for conflicting CSS scroll behaviors
   - Verify passive event listeners are used
   - Test on different browsers

3. **Active section not highlighting correctly**
   - Check section IDs match navigation items
   - Verify `useActiveSection` hook is properly configured
   - Test scroll position calculations

### Debug Mode

Add debug logging to `smoothScroll.ts`:

```typescript
const scrollToElement = (elementId, options = {}) => {
  const headerHeight = getHeaderHeight();
  console.log('Header height:', headerHeight);
  console.log('Scrolling to:', elementId);
  // ...
};
```

## Future Enhancements

- Add scroll progress indicator
- Implement scroll-spy with intersection observer
- Add smooth scroll animations with custom easing
- Support for horizontal scrolling
- Keyboard navigation support
