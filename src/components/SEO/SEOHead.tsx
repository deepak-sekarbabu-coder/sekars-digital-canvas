import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

const SEOHead = ({
  title = 'Deepak Sekarbabu - Full Stack Developer & Solution Architect',
  description = 'Professional Full Stack Developer with 12+ years experience in Java, Spring Boot, Microservices, React, and Cloud technologies. Currently at TCS Stockholm, specializing in enterprise solutions and modern web development.',
  keywords = 'Full Stack Developer, Java Developer, Spring Boot, Microservices, React, TypeScript, Cloud Computing, Solution Architect, TCS, Stockholm, Software Engineer',
  image,
  url,
  type = 'website',
}: SEOHeadProps) => {
  useEffect(() => {
    const baseUrl =
      import.meta.env.VITE_GITHUB_PAGES === 'true'
        ? 'https://deepak-sekarbabu.github.io/sekars-digital-canvas'
        : window.location.origin;

    const finalUrl = url || baseUrl;
    const finalImage = image || `${baseUrl}/pics/Deepak1.webp`;

    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', finalUrl, true);
    updateMetaTag('og:image', finalImage, true);
    updateMetaTag('og:site_name', 'Deepak Sekarbabu Portfolio', true);

    // Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', finalImage, true);
    updateMetaTag('twitter:card', 'summary_large_image', true);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = finalUrl;
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;
