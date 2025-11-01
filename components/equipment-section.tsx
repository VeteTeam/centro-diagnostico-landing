"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Activity, Scan, Building2, ArrowRight, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface EquipmentCategory {
  name: string
  icon: LucideIcon
  color: string
  bgColor: string
  description: string
}

const equipmentCategories: EquipmentCategory[] = [
  {
    name: "Ecografías",
    icon: Activity,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Equipamiento de última generación para estudios ecográficos precisos",
  },
  {
    name: "Radiografías Digitales",
    icon: Scan,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Tecnología digital avanzada para diagnósticos radiológicos de alta calidad",
  },
  {
    name: "Instalaciones",
    icon: Building2,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Espacios modernos diseñados para tu comodidad y el mejor servicio",
  },
]

export function EquipmentSection() {
  return (
    <section 
      id="equipamiento" 
      className="py-20 bg-white"
      aria-labelledby="equipment-heading"
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
            id="equipment-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Equipamiento e Instalaciones
          </h2>
          <p className="text-lg text-muted-foreground text-pretty mb-8">
            Tecnología de última generación y espacios diseñados para tu comodidad y el mejor diagnóstico
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
          {equipmentCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border-2 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-primary"
            >
              <div className={`w-20 h-20 ${category.bgColor} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                <category.icon className={`w-10 h-10 ${category.color}`} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{category.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {category.description}
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
            <Link href="/equipamiento">
              Ver equipamiento completo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

