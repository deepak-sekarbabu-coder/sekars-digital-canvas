/**
 * Utility function to get the correct asset path for different deployment environments
 * @param path - The asset path (can be absolute or relative)
 * @returns The correct path for the current environment
 */
export const getAssetPath = (path: string): string => {
  // If it's already a relative path, return as is
  if (!path.startsWith('/')) {
    return path;
  }

  // For GitHub Pages, convert absolute paths to relative
  if (import.meta.env.VITE_GITHUB_PAGES === 'true') {
    return `.${path}`;
  }

  // For other environments (Vercel, local), use absolute paths
  return path;
};
