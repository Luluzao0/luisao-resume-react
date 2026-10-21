/* eslint-env node */

// https://nextjs.org/docs/pages/api-reference/next-config-js
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {key: 'X-Content-Type-Options', value: 'nosniff'},
          {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
          {key: 'X-Frame-Options', value: 'DENY'},
          {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()'},
        ],
      },
    ];
  },
};

module.exports = nextConfig;
