const { withContentlayer } = require('next-contentlayer');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['app', 'components', 'layouts', 'scripts'],
  },
  images: {
    domains: ['picsum.photos'],
    unoptimized: true, // Required for GitHub Pages
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        // headers: securityHeaders,
      },
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  output: 'export', // Required for static export
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
