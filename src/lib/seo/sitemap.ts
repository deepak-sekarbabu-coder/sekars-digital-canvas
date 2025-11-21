export const generateSitemap = () => {
  const baseUrl =
    import.meta.env.VITE_GITHUB_PAGES === 'true'
      ? 'https://deepak-sekarbabu.github.io/sekars-digital-canvas'
      : window.location.origin;

  const pages = [
    {
      url: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '1.0',
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = () => {
  const baseUrl =
    import.meta.env.VITE_GITHUB_PAGES === 'true'
      ? 'https://deepak-sekarbabu.github.io/sekars-digital-canvas'
      : window.location.origin;

  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
};
