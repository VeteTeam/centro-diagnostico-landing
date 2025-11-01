/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🎯 Purpose: Configuración de Next.js optimizada para producción
  // 💡 Learning: Habilitamos optimización de imágenes para mejor rendimiento
  images: {
    // Habilitamos optimización de imágenes para mejor rendimiento y SEO
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

export default nextConfig
