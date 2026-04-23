import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { initializeBfcacheOptimizations } from '@/lib/performance/bfcache';
import SEOHead from '@/components/SEO/SEOHead';
import StructuredData from '@/components/SEO/StructuredData';
import LoadingSpinner from '@/components/ui/LoadingSpinner'; // Import the new LoadingSpinner

const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  useEffect(() => {
    // Initialize bfcache optimizations
    const cleanup = initializeBfcacheOptimizations();

    if (import.meta.env.DEV) {
      // Keep dev-only validation tooling out of production bundles.
      void import('@/lib/seo/seo-validator');
      void import('@/lib/images/image-validation');
    }

    return cleanup;
  }, []);

  return (
    <TooltipProvider>
      <ErrorBoundary>
        <SEOHead />
        <StructuredData type="person" />
        <Sonner />
        <BrowserRouter
          basename={import.meta.env.VITE_GITHUB_PAGES === 'true' ? '/sekars-digital-canvas' : '/'}
          future={{
            // Enable the v7_* features
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  );
};

export default App;
