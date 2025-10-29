import { Award, Heart, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Experiencia",
      description: "Años de trayectoria en diagnóstico por imágenes",
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicados al cuidado y bienestar de nuestros pacientes",
    },
    {
      icon: Users,
      title: "Profesionalismo",
      description: "Equipo médico altamente capacitado y certificado",
    },
  ]

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            En Imágenes Dr Castro nos especializamos en brindar servicios de diagnóstico por imágenes
            de la más alta calidad. Contamos con equipamiento de última generación y un equipo de profesionales
            altamente capacitados, comprometidos con la excelencia en la atención médica y el bienestar de nuestros
            pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
