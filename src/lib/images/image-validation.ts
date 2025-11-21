// Utility to validate responsive image usage

export const validateResponsiveImages = () => {
  if (typeof window === 'undefined') return;

  console.group('📸 Responsive Image Validation');

  // Find all images with srcset
  const imagesWithSrcSet = document.querySelectorAll('img[srcset]');

  console.log(`Found ${imagesWithSrcSet.length} images with responsive srcSet`);

  imagesWithSrcSet.forEach((img, index) => {
    const imgElement = img as HTMLImageElement;
    const srcSet = imgElement.srcSet;
    const currentSrc = imgElement.currentSrc || imgElement.src;

    console.group(`Image ${index + 1}:`);
    console.log('Alt text:', imgElement.alt);
    console.log('Current src:', currentSrc);
    console.log('SrcSet:', srcSet);
    console.log('Sizes:', imgElement.sizes);

    // Check if using responsive images
    const isUsingResponsive = srcSet && srcSet.includes('responsive/');
    console.log('Using responsive images:', isUsingResponsive ? '✅' : '❌');

    if (isUsingResponsive) {
      // Extract the size being used
      const match = currentSrc.match(/(\d+)w\.webp$/);
      if (match) {
        console.log(`📐 Currently loading: ${match[1]}w version`);
      }
    }

    console.groupEnd();
  });

  console.groupEnd();
};

// Auto-run validation in development after images load
if (import.meta.env.DEV) {
  window.addEventListener('load', () => {
    setTimeout(validateResponsiveImages, 2000);
  });
}
