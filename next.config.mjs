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
    // Calidad por defecto reducida para mejor rendimiento
    // Next.js usará estas calidades según el contexto
    dangerousAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Permitir imágenes locales desde la carpeta public
    remotePatterns: [],
    // 🔧 Optimización para producción
    // Render usa menos recursos, así que optimizamos aquí
    unoptimized: false,
  },
  // 📦 Optimización del build
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
