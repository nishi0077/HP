/** @type {import('next').NextConfig} */
const nextConfig = {
  // パフォーマンス最適化設定
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', '@tsparticles/react'],
  },
  
  // 画像最適化
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // コンパイル最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // バンドル最適化
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },

  // 圧縮
  compress: true,
  
  // 静的エクスポート最適化
  output: 'standalone',
}

module.exports = nextConfig