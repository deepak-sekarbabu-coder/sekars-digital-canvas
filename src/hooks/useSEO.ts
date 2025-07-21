import { useEffect } from 'react';

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}

export const useSEO = (options: SEOOptions = {}) => {
  const {
    title = 'Deepak Sekarbabu - Full Stack Developer & Solution Architect',
    description = 'Professional Full Stack Developer with 12+ years experience in Java, Spring Boot, Microservices, React, and Cloud technologies.',
    keywords = 'Full Stack Developer, Java Developer, Spring Boot, Microservices, React, TypeScript',
    image,
    url,
    type = 'website',
    noIndex = false,
  } = options;

  useEffect(() => {
    const baseUrl =
      import.meta.env.VITE_GITHUB_PAGES === 'true'
        ? 'https://deepak-sekarbabu.github.io/sekars-digital-canvas'
        : window.location.origin;

    const finalUrl = url || `${baseUrl}${window.location.pathname}`;
    const finalImage = image || `${baseUrl}/pics/Deepak1.webp`;

    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (selector: string, content: string) => {
      const meta = document.querySelector(selector) as HTMLMetaElement;
      if (meta) {
        meta.setAttribute('content', content);
      }
    };

    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:type"]', type);
    updateMetaTag('meta[property="og:url"]', finalUrl);
    updateMetaTag('meta[property="og:image"]', finalImage);
    updateMetaTag('meta[property="twitter:title"]', title);
    updateMetaTag('meta[property="twitter:description"]', description);
    updateMetaTag('meta[property="twitter:image"]', finalImage);

    // Handle robots meta tag
    const robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (robotsMeta) {
      robotsMeta.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = finalUrl;
    }
  }, [title, description, keywords, image, url, type, noIndex]);

  return {
    updateSEO: (newOptions: SEOOptions) => {
      // This could be used to dynamically update SEO from components
      Object.assign(options, newOptions);
    },
  };
};

export default useSEO;
