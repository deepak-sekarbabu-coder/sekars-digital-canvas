import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'person' | 'website' | 'organization';
}

const StructuredData = ({ type = 'person' }: StructuredDataProps) => {
  useEffect(() => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const baseUrl =
      import.meta.env.VITE_GITHUB_PAGES === 'true'
        ? 'https://deepak-sekarbabu.github.io/sekars-digital-canvas'
        : window.location.origin;

    let structuredData;

    if (type === 'person') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Deepak Sekarbabu',
        alternateName: 'Deepak Sekar Babu',
        jobTitle: 'Assistant Technical Consultant',
        description:
          'Professional Full Stack Developer with 12+ years experience in Java, Spring Boot, Microservices, React, and Cloud technologies.',
        url: baseUrl,
        image: {
          '@type': 'ImageObject',
          url: `${baseUrl}/pics/Deepak1.webp`,
          width: 400,
          height: 400,
        },
        sameAs: [
          'https://www.linkedin.com/in/deepak-sekarbabu-85b67628/',
          'https://github.com/deepak-sekarbabu',
          'https://technologytrendsinjava.blogspot.com/',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Tata Consultancy Services',
          url: 'https://www.tcs.com',
        },
        workLocation: {
          '@type': 'Place',
          name: 'Stockholm, Sweden',
        },
        knowsAbout: [
          'Java',
          'Spring Boot',
          'Microservices',
          'React',
          'TypeScript',
          'Cloud Computing',
          'Docker',
          'Kubernetes',
          'AWS',
          'PostgreSQL',
          'GraphQL',
          'Full Stack Development',
          'Solution Architecture',
        ],
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'Anna University',
          },
        ],
        email: import.meta.env.VITE_CONTACT_EMAIL || 'deepak.sekarbabu@tcs.com',
        telephone: import.meta.env.VITE_PHONE_NUMBER,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Stockholm',
          addressCountry: 'Sweden',
        },
      };
    } else if (type === 'website') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Deepak Sekarbabu Portfolio',
        description:
          'Professional portfolio showcasing expertise in full-stack development, modern web technologies, and innovative solutions.',
        url: baseUrl,
        author: {
          '@type': 'Person',
          name: 'Deepak Sekarbabu',
        },
        inLanguage: 'en-US',
        copyrightYear: new Date().getFullYear(),
        genre: 'Portfolio',
        keywords: 'Full Stack Developer, Java, Spring Boot, React, Portfolio, Software Engineer',
      };
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData, null, 2);
      document.head.appendChild(script);
    }
  }, [type]);

  return null;
};

export default StructuredData;
