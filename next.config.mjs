/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // 🎯 Optimización para Render (cuenta gratuita - 512MB RAM limit)
    // Priorizar formatos modernos con mejor compresión
    formats: ['image/avif', 'image/webp'],
    // Tamaños reducidos para minimizar procesamiento y uso de memoria
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    // Cache TTL aumentado para reducir regeneraciones (1 año)
    minimumCacheTTL: 31536000,
    // Permitir imágenes locales desde la carpeta public
    remotePatterns: [],
    // Optimización activada (las imágenes se optimizarán en build time)
    // Las imágenes grandes del lightbox usan <img> nativo para evitar out-of-memory
    unoptimized: false,
  },
  // 📦 Optimización del build
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
