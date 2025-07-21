import { memo } from 'react';
import { Progress } from './progress';

interface OptimizedProgressProps {
  value: number;
  className?: string;
  'aria-label'?: string;
  'aria-valuenow'?: number;
  'aria-valuemin'?: number;
  'aria-valuemax'?: number;
  role?: string;
}

export const OptimizedProgress = memo<OptimizedProgressProps>(
  ({ value, className = 'h-2', ...props }) => {
    return <Progress value={value} className={className} {...props} />;
  }
);

OptimizedProgress.displayName = 'OptimizedProgress';
