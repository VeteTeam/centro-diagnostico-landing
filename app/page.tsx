import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { EquipmentSection } from "@/components/equipment-section"
import { StaffSection } from "@/components/staff-section"
import { PracticesSection } from "@/components/practices-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <PracticesSection />
        <EquipmentSection />
        <StaffSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
