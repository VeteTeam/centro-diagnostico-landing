import Link from "next/link"
import { LogoCasfra } from "@/components/logo-casfra"
import { MapPin, Phone, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="bg-foreground text-background py-12"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <LogoCasfra variant="horizontal" dark className="h-12 w-auto" />
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
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <address className="text-background/80 not-italic">
                  Dean Funes 581, Córdoba Capital
                </address>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="text-background/80 space-y-0.5">
                  <a href="tel:03515697631" className="block hover:text-background transition-colors">
                    351 569-7631
                  </a>
                  <a href="tel:03515697632" className="block hover:text-background transition-colors">
                    351 569-7632
                  </a>
                  <a href="tel:03515697633" className="block hover:text-background transition-colors">
                    351 569-7633
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <Link
                  href="https://wa.me/543513443488"
                  className="text-background/80 hover:text-background transition-colors"
                  aria-label="Contactar por WhatsApp - Abre en nueva ventana"
                >
                  WhatsApp: 351 344-3488
                </Link>
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
          <p>© {currentYear} CASFRA Imágenes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
