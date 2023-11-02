/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  pageExtensions: ['page.tsx', 'page.ts'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
