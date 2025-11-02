/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // 🎯 Optimización para Render (cuenta gratuita)
    // Priorizar formatos modernos con mejor compresión
    formats: ['image/avif', 'image/webp'],
    // Tamaños optimizados para reducir procesamiento en Render
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache TTL aumentado para reducir regeneraciones (1 año)
    minimumCacheTTL: 31536000,
    // Permitir imágenes locales desde la carpeta public
    remotePatterns: [],
    // Optimización activada (las imágenes se optimizarán en build time)
    unoptimized: false,
  },
  // 📦 Optimización del build
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
