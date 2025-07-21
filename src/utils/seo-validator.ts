interface SEOValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  score: number;
}

export const validateSEO = (): SEOValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];
  let score = 100;

  // Check title
  const title = document.title;
  if (!title) {
    errors.push('Missing page title');
    score -= 20;
  } else if (title.length < 30 || title.length > 60) {
    warnings.push(`Title length (${title.length}) should be between 30-60 characters`);
    score -= 5;
  }

  // Check meta description
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
  if (!description) {
    errors.push('Missing meta description');
    score -= 15;
  } else if (description.length < 120 || description.length > 160) {
    warnings.push(
      `Description length (${description.length}) should be between 120-160 characters`
    );
    score -= 5;
  }

  // Check Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
  const ogDescription = document
    .querySelector('meta[property="og:description"]')
    ?.getAttribute('content');
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');

  if (!ogTitle) {
    errors.push('Missing Open Graph title');
    score -= 10;
  }
  if (!ogDescription) {
    errors.push('Missing Open Graph description');
    score -= 10;
  }
  if (!ogImage) {
    errors.push('Missing Open Graph image');
    score -= 10;
  }

  // Check structured data
  const structuredData = document.querySelector('script[type="application/ld+json"]');
  if (!structuredData) {
    warnings.push('Missing structured data (JSON-LD)');
    score -= 10;
  }

  // Check canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    warnings.push('Missing canonical URL');
    score -= 5;
  }

  // Check favicon
  const favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {
    warnings.push('Missing favicon');
    score -= 5;
  }

  // Check robots meta
  const robots = document.querySelector('meta[name="robots"]');
  if (!robots) {
    warnings.push('Missing robots meta tag');
    score -= 5;
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    score: Math.max(0, score),
  };
};

export const logSEOReport = () => {
  if (import.meta.env.DEV) {
    const result = validateSEO();
    console.group('🔍 SEO Validation Report');
    console.log(`Score: ${result.score}/100`);

    if (result.errors.length > 0) {
      console.group('❌ Errors');
      result.errors.forEach((error) => console.error(error));
      console.groupEnd();
    }

    if (result.warnings.length > 0) {
      console.group('⚠️ Warnings');
      result.warnings.forEach((warning) => console.warn(warning));
      console.groupEnd();
    }

    if (result.isValid && result.warnings.length === 0) {
      console.log('✅ All SEO checks passed!');
    }

    console.groupEnd();
  }
};

// Auto-run validation in development
if (import.meta.env.DEV) {
  // Run after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(logSEOReport, 1000);
    });
  } else {
    setTimeout(logSEOReport, 1000);
  }
}
