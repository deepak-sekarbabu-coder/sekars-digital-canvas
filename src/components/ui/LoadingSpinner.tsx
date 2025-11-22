import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
