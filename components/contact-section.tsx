"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, MessageCircle, Phone, Clock, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ContactInfo {
  icon: LucideIcon
  title: string
  content: string
  action: string | null
  href: string | null
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Dean Funes 581, Córdoba Capital",
    action: "Ver en Google Maps",
    href: "https://www.google.com/maps/search/?api=1&query=Dean+Funes+581+Córdoba",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "351 344-3488",
    action: "Enviar mensaje",
    href: "https://wa.me/543513443488",
  },
  {
    icon: Clock,
    title: "Horarios de Atención",
    content: "RX: Lunes a Viernes 9:00 - 19:00 (Por orden de llegada) | ECO: Con turno previo",
    action: null,
    href: null,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function ContactSection() {
  return (
    <section 
      id="contacto" 
      className="py-20 bg-white"
      aria-labelledby="contact-heading"
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
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Estamos aquí para atenderte
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactInfo.map((info) => (
            <motion.div key={info.title} variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{info.content}</p>
                  {info.action && info.href && (
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={info.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`${info.action} - Abre en nueva ventana`}
                      >
                        {info.action}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
