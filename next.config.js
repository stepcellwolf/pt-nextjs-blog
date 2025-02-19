const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  output: 'export', // Required for static export
};

const isExportMode = process.env.NEXT_PHASE === 'phase-export';

module.exports = isExportMode ? nextConfig : withBundleAnalyzer(require('next-contentlayer').withContentlayer(nextConfig));
