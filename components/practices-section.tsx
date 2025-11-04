"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Activity, Monitor, Heart, ArrowRight, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface PracticeCategory {
  name: string
  icon: LucideIcon
  color: string
  bgColor: string
  count: number
}

const practicesCategories: PracticeCategory[] = [
  {
    name: "Ecografías",
    icon: Activity,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    count: 14,
  },
  {
    name: "Ecografía Doppler",
    icon: Heart,
    color: "text-green-600",
    bgColor: "bg-green-50",
    count: 7,
  },
  {
    name: "Radiografías",
    icon: Monitor,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    count: 17,
  },
]

export function PracticesSection() {
  return (
    <section 
      id="practicas" 
      className="py-20 bg-secondary/30"
      aria-labelledby="practices-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="practices-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Prácticas y Estudios Disponibles
          </h2>
          <p className="text-lg text-muted-foreground text-pretty mb-8">
            Ofrecemos una amplia gama de servicios de diagnóstico por imágenes con tecnología de última generación
          </p>
        </motion.div>

        {/* Categorías simplificadas */}
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {practicesCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border-2 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-primary"
            >
              <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <category.icon className={`w-8 h-8 ${category.color}`} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{category.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {category.count} prácticas disponibles
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/practicas">
              Ver todas las prácticas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            ¿Necesitas información sobre alguna práctica específica?{" "}
            <a 
              href="#contacto" 
              className="text-primary hover:underline font-semibold transition-colors"
            >
              Contáctanos
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
