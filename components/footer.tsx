import { MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-16 w-16 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-md opacity-50" />
                <img 
                  src="/logoImagenesDrCastro.png" 
                  alt="Imágenes Dr Castro Logo" 
                  className="h-full w-full object-cover rounded-2xl p-1.5 bg-background/50 shadow-lg relative z-10"
                />
              </div>
              <div>
                <div className="text-lg font-bold leading-tight">Imágenes Dr Castro</div>
              </div>
            </div>
            <p className="text-background/80 text-sm text-pretty leading-relaxed">
              Tecnología de última generación y atención profesional para el cuidado de tu salud
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-background/80">Dean Funes 581, Córdoba</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://wa.me/5493518075334"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  +54 9 3518 07-5334
                </a>
              </div>
            </div>
          </div>

          {/* Horario de Atención */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario de Atención</h3>
            <div className="text-sm text-background/80 space-y-3">
              <div>
                <p className="mb-1 font-medium text-background">Radiografías (RX)</p>
                <p className="text-background/90">Lunes a Viernes: 9:00 - 19:00</p>
                <p className="text-xs text-background/70 mt-1">Por orden de llegada</p>
              </div>
              <div>
                <p className="mb-1 font-medium text-background">Ecografías (ECO)</p>
                <p className="text-background/90">Con turno previo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>© {currentYear} Imágenes Dr Castro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
