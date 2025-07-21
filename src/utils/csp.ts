/**
 * Content Security Policy configuration for the application
 */

export const CSP_DIRECTIVES = {
  // Default source - fallback for other directives
  'default-src': ["'self'"],

  // Script sources - allows inline scripts for Vite HMR in development
  'script-src': [
    "'self'",
    "'unsafe-inline'", // Required for Vite HMR and React
    "'unsafe-eval'", // Required for development mode
    'https://cdn.emailjs.com', // EmailJS
  ],

  // Style sources - allows inline styles for styled-components/CSS-in-JS
  'style-src': [
    "'self'",
    "'unsafe-inline'", // Required for CSS-in-JS libraries and Tailwind
    'https://fonts.googleapis.com',
  ],

  // Image sources
  'img-src': [
    "'self'",
    'data:', // For base64 images
    'blob:', // For dynamically generated images
    'https:', // Allow HTTPS images
  ],

  // Font sources
  'font-src': [
    "'self'",
    'https://fonts.gstatic.com',
    'data:', // For base64 fonts
  ],

  // Connect sources - for API calls and WebSocket connections
  'connect-src': [
    "'self'",
    'https://api.emailjs.com', // EmailJS API
    'ws://localhost:*', // Vite HMR WebSocket in development
    'wss://localhost:*', // Secure WebSocket
  ],

  // Media sources
  'media-src': ["'self'"],

  // Object sources - restrict plugins
  'object-src': ["'none'"],

  // Base URI - restrict base tag
  'base-uri': ["'self'"],

  // Form action - restrict form submissions
  'form-action': ["'self'"],

  // Frame ancestors - prevent clickjacking
  'frame-ancestors': ["'none'"],

  // Upgrade insecure requests in production
  'upgrade-insecure-requests': [],
};

export const PRODUCTION_CSP_OVERRIDES = {
  'script-src': [
    "'self'",
    'https://cdn.emailjs.com',
    // Remove unsafe-inline and unsafe-eval in production
  ],
};

/**
 * Generate CSP header string
 */
export function generateCSPHeader(isDevelopment = false): string {
  const directives = isDevelopment
    ? CSP_DIRECTIVES
    : { ...CSP_DIRECTIVES, ...PRODUCTION_CSP_OVERRIDES };

  return Object.entries(directives)
    .map(([directive, sources]) => {
      if (sources.length === 0) {
        return directive;
      }
      return `${directive} ${sources.join(' ')}`;
    })
    .join('; ');
}

/**
 * Additional security headers
 */
export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
};
