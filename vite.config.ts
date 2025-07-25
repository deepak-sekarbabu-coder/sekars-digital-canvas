import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { cspPlugin } from './src/plugins/vite-csp-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.GITHUB_PAGES === 'true' ? '/sekars-digital-canvas/' : '/',
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [react(), cspPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-progress', '@radix-ui/react-slot'],
          motion: ['framer-motion'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
    target: 'esnext',
    minify: 'esbuild',
    // Image optimization settings
    assetsInlineLimit: 4096, // Inline small images as base64
  },
  // Image optimization for development
  assetsInclude: ['**/*.webp', '**/*.avif'],
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  define: {
    // Help with bfcache by ensuring proper environment detection
    __DEV__: mode === 'development',
  },
}));
