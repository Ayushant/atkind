/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // swcMinify option has been removed as it's no longer needed in Next.js 13+
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    domains: ['i.pravatar.cc', 'images.unsplash.com'],
    unoptimized: process.env.NODE_ENV === "development",
  },  // Disable automatic OG image generation
  experimental: {
    // Disable optimizeCss to avoid critters dependency issues in production
    // optimizeCss: true,
    scrollRestoration: true,
  },
  // Simplified webpack configuration to avoid chunk loading errors
  webpack: (config, { dev, isServer }) => {
    // Only apply optimizations in production
    if (!dev && !isServer) {
      // Simplified chunk splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 20,
            chunks: 'all',
          },
        },
      }    }
    return config
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)