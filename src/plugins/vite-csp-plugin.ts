import type { Plugin } from 'vite';
import { generateCSPHeader, SECURITY_HEADERS } from '../lib/security/csp';

/**
 * Vite plugin to add CSP and security headers during development
 */
export function cspPlugin(): Plugin {
  return {
    name: 'csp-headers',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Add CSP header
        const cspHeader = generateCSPHeader(true); // Development mode
        res.setHeader('Content-Security-Policy', cspHeader);

        // Add additional security headers
        Object.entries(SECURITY_HEADERS).forEach(([header, value]) => {
          // Skip HSTS in development
          if (header === 'Strict-Transport-Security') return;
          res.setHeader(header, value);
        });

        next();
      });
    },
    generateBundle() {
      // In production, CSP should be handled by your web server or CDN
      console.log('Production CSP Header:');
      console.log(generateCSPHeader(false));
    },
  };
}
