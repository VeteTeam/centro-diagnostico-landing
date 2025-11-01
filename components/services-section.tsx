"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Activity, Scan, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  schedule: string
}

const services: Service[] = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  return (
    <section 
      id="servicios" 
      className="py-20 bg-secondary/30"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ofrecemos servicios de diagnóstico por imágenes con tecnología de vanguardia
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                    {service.description}
                  </p>
                  {service.schedule && (
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm font-semibold text-primary mb-1">Horario</p>
                      <p className="text-sm text-foreground">{service.schedule}</p>
                    </div>
                  )}
                  <ul className="space-y-2" aria-label={`Características de ${service.title}`}>
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
