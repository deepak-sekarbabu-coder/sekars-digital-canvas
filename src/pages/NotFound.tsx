import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSEO } from '@/hooks/useSEO';

const NotFound = () => {
  const location = useLocation();

  // SEO for 404 page - prevent indexing
  useSEO({
    title: 'Page Not Found - Deepak Sekarbabu Portfolio',
    description:
      "The requested page could not be found. Return to Deepak Sekarbabu's portfolio homepage.",
    noIndex: true,
  });

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error('404 Error: User attempted to access non-existent route:', location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a
          href="/"
          className="rounded text-blue-500 underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Return to home page"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
