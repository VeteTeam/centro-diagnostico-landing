"use client"

import { Award, Heart, Users, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
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

export function AboutSection() {
  return (
    <section 
      id="nosotros" 
      className="py-20 bg-white"
      aria-labelledby="about-heading"
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
            id="about-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Sobre Nosotros
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            En Imágenes Dr Castro nos especializamos en brindar servicios de diagnóstico por imágenes
            de la más alta calidad. Contamos con equipamiento de última generación y un equipo de profesionales
            altamente capacitados, comprometidos con la excelencia en la atención médica y el bienestar de nuestros
            pacientes.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors hover:shadow-md"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
