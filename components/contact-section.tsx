import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, MessageCircle, Phone, Clock } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Dean Funes 581, Córdoba",
      action: "Ver en Google Maps",
      href: "https://www.google.com/maps/search/?api=1&query=Dean+Funes+581+Córdoba",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+54 9 3518 07-5334",
      action: "Enviar mensaje",
      href: "https://wa.me/5493518075334",
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      content: "RX: Lunes a Viernes 9:00 - 19:00 (Por orden de llegada) | ECO: Con turno previo",
      action: null,
      href: null,
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Contacto</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Estamos aquí para atenderte
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{info.content}</p>
                {info.action && info.href && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={info.href} target="_blank" rel="noopener noreferrer">
                      {info.action}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
