/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Optimización automática activada
    formats: ['image/avif', 'image/webp'],
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
}

export default nextConfig
