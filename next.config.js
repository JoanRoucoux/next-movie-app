/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
