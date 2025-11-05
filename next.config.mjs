/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // 🎯 Optimización para Render (cuenta gratuita - 512MB RAM limit)
    // Priorizar formatos modernos con mejor compresión
    formats: ['image/webp'], // Solo WebP para reducir variantes (más rápido)
    // Tamaños mínimos para reducir procesamiento al máximo
    deviceSizes: [640, 1080, 1920], // Reducido de 5 a 3 tamaños
    imageSizes: [64, 128, 256], // Reducido de 6 a 3 tamaños
    // Calidades permitidas para las imágenes
    qualities: [70, 75],
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
