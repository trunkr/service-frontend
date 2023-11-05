/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
=======
  compiler: {
    emotion: true,
  },
>>>>>>> 95dc70afeb76c195c312eda6dc5777f3176d68a2
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
