import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/SalaDeEspera.png"
          alt="Sala de espera - Imágenes Dr Castro"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            Imágenes Dr Castro
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 text-balance drop-shadow-md font-semibold">
            Ecografías y Radiografía Digital Directa
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty">
            Tecnología de última generación y atención profesional para el cuidado de tu salud
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform shadow-xl"
              asChild
            >
              <a href="https://wa.me/5493518075334" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary transition-all shadow-xl"
              asChild
            >
              <a href="#practicas">Ver Prácticas</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#practicas" className="block text-white/80 hover:text-white transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  )
}
