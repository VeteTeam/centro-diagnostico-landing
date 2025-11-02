/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // 🎯 Optimización para Render (cuenta gratuita)
    // Priorizar formatos modernos con mejor compresión
    formats: ['image/avif', 'image/webp'],
    // Tamaños optimizados para reducir carga innecesaria
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    // Cache TTL aumentado para reducir regeneraciones
    minimumCacheTTL: 31536000, // 1 año (para imágenes estáticas)
    // Permitir imágenes locales desde la carpeta public
    remotePatterns: [],
    // 🔧 Optimización para producción
    // Render usa menos recursos, así que optimizamos aquí
    // Tamaños optimizados para reducir procesamiento
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache aumentado para mejorar rendimiento en Render
    minimumCacheTTL: 31536000, // 1 año (máximo permitido)
    // Permitir imágenes locales desde la carpeta public
    remotePatterns: [],
    // Mejorar rendimiento deshabilitando optimización on-demand en producción
    // Las imágenes se optimizarán en build time
    unoptimized: false,
  },
  // 📦 Optimización del build
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
