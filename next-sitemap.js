/* eslint-env node */
module.exports = {
  siteUrl: 'https://www.devluisao.tech/', // Atualize para seu domínio real
  exclude: ['/404*', '/500*'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404', '/500'],
      },
    ],
    additionalSitemaps: [
      'https://www.devluisao.tech/sitemap.xml', // Atualize para seu domínio real
    ],
  },
};
