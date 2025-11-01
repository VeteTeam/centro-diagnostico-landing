import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PracticesDetailPage } from "@/components/practices-detail-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prácticas y Estudios | Imágenes Dr Castro",
  description: "Lista completa de prácticas y estudios disponibles en Imágenes Dr Castro. Ecografías, ecografía Doppler y radiografías digitales.",
}

export default function PracticasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PracticesDetailPage />
      </main>
      <Footer />
    </div>
  )
}

