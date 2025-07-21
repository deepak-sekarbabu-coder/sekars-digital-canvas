# Content Security Policy (CSP) Implementation

This document outlines the CSP implementation for enhanced security in the application.

## Overview

Content Security Policy (CSP) is a security standard that helps prevent Cross-Site Scripting (XSS), clickjacking, and other code injection attacks by controlling which resources the browser is allowed to load.

## Implementation

### 1. Development Environment

- CSP headers are automatically added during development via the Vite plugin
- Includes necessary permissions for Vite HMR and development tools
- Located in `src/plugins/vite-csp-plugin.ts`

### 2. Production Environment

- Static headers file for hosting platforms (Netlify, GitHub Pages, etc.)
- Located in `public/_headers`
- Stricter policy without development-specific permissions

### 3. CSP Configuration

The CSP directives are defined in `src/utils/csp.ts`:

#### Key Directives

- **default-src**: `'self'` - Default fallback for all resource types
- **script-src**: Allows scripts from self and EmailJS CDN
- **style-src**: Allows inline styles (required for Tailwind/CSS-in-JS)
- **img-src**: Allows images from self, data URLs, and HTTPS sources
- **font-src**: Allows fonts from Google Fonts and data URLs
- **connect-src**: Allows API calls to EmailJS and WebSocket connections
- **object-src**: `'none'` - Blocks plugins like Flash
- **frame-ancestors**: `'none'` - Prevents clickjacking

## Additional Security Headers

### X-Content-Type-Options

- Value: `nosniff`
- Prevents MIME type sniffing attacks

### X-Frame-Options

- Value: `DENY`
- Prevents the page from being embedded in frames

### X-XSS-Protection

- Value: `1; mode=block`
- Enables browser XSS filtering

### Referrer-Policy

- Value: `strict-origin-when-cross-origin`
- Controls referrer information sent with requests

### Permissions-Policy

- Restricts access to browser APIs (camera, microphone, geolocation)

### Strict-Transport-Security (HSTS)

- Enforces HTTPS connections
- Only applied in production

## Customization

### Adding New External Resources

1. Update the appropriate directive in `src/utils/csp.ts`
2. Update the `public/_headers` file for production
3. Test in both development and production environments

### Example: Adding a new CDN

```typescript
// In src/utils/csp.ts
'script-src': [
  "'self'",
  "https://cdn.emailjs.com",
  "https://new-cdn.example.com", // Add new CDN
],
```

### Testing CSP

1. Open browser developer tools
2. Check the Console tab for CSP violations
3. Review the Network tab for blocked resources
4. Use online CSP validators for policy testing

## Deployment Considerations

### Netlify

- Uses `public/_headers` file automatically
- No additional configuration needed

### GitHub Pages

- May require additional configuration
- Consider using a service worker for header injection

### Custom Server

- Implement CSP headers in your server configuration
- Use the `generateCSPHeader()` function from `src/utils/csp.ts`

## Monitoring

### CSP Reporting

To enable CSP violation reporting, add a `report-uri` directive:

```
Content-Security-Policy: ...; report-uri /csp-report-endpoint
```

### Browser Support

- Modern browsers support CSP Level 3
- Fallback headers (X-XSS-Protection) included for older browsers

## Troubleshooting

### Common Issues

1. **Inline scripts blocked**: Use nonces or move scripts to external files
2. **Styles not loading**: Ensure `'unsafe-inline'` is included for CSS-in-JS
3. **Images not displaying**: Check if image sources are allowed in `img-src`
4. **API calls failing**: Verify domains are included in `connect-src`

### Development vs Production

- Development includes `'unsafe-eval'` and `'unsafe-inline'` for HMR
- Production has stricter policies
- Test both environments thoroughly
