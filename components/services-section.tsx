import { Card, CardContent } from "@/components/ui/card"
import { Activity, Scan } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Activity,
      title: "Ecografías",
      description: "Estudios ecográficos de alta resolución para diagnóstico preciso y no invasivo.",
      features: ["Ecografía abdominal", "Ecografía obstétrica", "Ecografía de partes blandas", "Ecografía doppler"],
      schedule: "Con turno previo",
    },
    {
      icon: Scan,
      title: "Radiografía Digital Directa",
      description: "Tecnología digital de última generación para imágenes de alta calidad con menor exposición.",
      features: ["Radiografías de tórax", "Radiografías óseas", "Radiografías de columna", "Estudios contrastados"],
      schedule: "Lunes a Viernes: 9:00 - 19:00 (Por orden de llegada)",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ofrecemos servicios de diagnóstico por imágenes con tecnología de vanguardia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{service.description}</p>
                {service.schedule && (
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm font-semibold text-primary mb-1">Horario</p>
                    <p className="text-sm text-foreground">{service.schedule}</p>
                  </div>
                )}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
