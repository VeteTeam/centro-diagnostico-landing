import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EquipmentDetailPage } from "@/components/equipment-detail-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Equipamiento e Instalaciones | Imágenes Dr Castro",
  description: "Tecnología de última generación y espacios modernos diseñados para tu comodidad. Equipamiento médico avanzado para diagnósticos precisos.",
}

export default function EquipamientoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <EquipmentDetailPage />
      </main>
      <Footer />
    </div>
  )
}

