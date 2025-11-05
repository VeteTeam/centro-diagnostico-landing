"use client"

import { Activity, Monitor, Heart, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface PracticeCategory {
  name: string
  icon: LucideIcon
  color: string
  bgColor: string
  practices: string[]
}

const practicesCategories: PracticeCategory[] = [
  {
    name: "Ecografías",
    icon: Activity,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    practices: [
      "ECOGRAFIA TOCOGINECOLOGICA CON O SIN TRANSDUCTOR VAGINAL",
      "ECOGRAFIA MAMARIA UNI O BILATERAL",
      "ECOGRAFIA TIROIDEA",
      "ECOGRAFIA DE TESTICULOS",
      "ECOGRAFIA COMPLETA DE ABDOMEN",
      "ECOGRAFIA HEPATOBILIAR, ESPLENICA O TORACICA",
      "ECOGRAFIA DE VEJIGA O PROSTATA CON O SIN TRANSDUCTOR RECTAL",
      "ECOGRAFIA RENAL BILATERAL",
      "ECOGRAFIA AORTA ABDOMINAL DINAMICA Y ESTATICA",
      "ECOGRAFIA PANCREATICA O SUPRARRENAL",
      "ECOGRAFIA CON TRASDUCTOR ENDOVAGINAL",
      "ECOGRAFIA CON TRANSDUCTOR ENDORECTAL",
      "ECOGRAFIA MUSCULAR Y OSEAS",
      "ECOGRAFIA DE PARTES BLANDAS",
    ]
  },
  {
    name: "Ecografía Doppler",
    icon: Heart,
    color: "text-green-600",
    bgColor: "bg-green-50",
    practices: [
      "ECODOPPLER COLOR",
      "ECODOPPLER PERIFERICO COLOR",
      "ECODOPPLER COLOR CIRCULACION PORTAL-SUPRAHEPATICO-CAVA",
      "ECOGRAFIA TIROIDEA ESPECIALIZADA C/INFORME ECODOPLER",
      "ECDOPPLER CARDIACO COLOR",
      "ECODOPPLER CARDIACO FETAL COLOR - ECODOPPLER COLOR CIRCULACION PLACENTARIA",
      "ECODOPPLER TRANSCRANEAL",
    ]
  },
  {
    name: "Radiografías",
    icon: Monitor,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    practices: [
      "RX DE CRÁNEO, CARA, SENOS PARANASALES O CAVUM (PRIMERA EXPOSICIÓN)",
      "RX DE CRÁNEO, CARA, SENOS PARANASALES O CAVUM (EXPOSICIONES SUBSIGUIENTES)",
      "RX TEMPORAL O AGUJEROS ÓPTICOS, COMPARATIVOS",
      "RX ARTICULACION TEMPOROMANDIBULAR",
      "RX DE RAQUIS (COLUMNA) (PRIMERA EXPOSICIÓN)",
      "RX DE RAQUIS (COLUMNA) (EXPOSICIONES SUBSIGUIENTES)",
      "RX DE HOMBRO, HÚMERO, PELVIS, CADERA, FEMUR (PRIMERA EXPOSICIÓN)",
      "RX DE HOMBRO, HÚMERO, PELVIS, CADERA, FEMUR (EXPOSICIONES SUBSIGUIENTES)",
      "RX DE ANTEBRAZO, CODO, MANO, RODILLA, PIE, PIERNA, TOBILLO Y PIE (COMPRENDE 2 EXPOSICIONES)",
      "RX AMPLIADA O MACRORRADIOGRAFIA",
      "RX DE TÓRAX (TELE)",
      "RX DE TÓRAX (EXPOSICIONES SUBSIGUIENTES)",
      "RX SIMPLE DE ABDOMEN",
      "RX SIMPLE DE ARBOL URINARIO",
    ]
  }
]

export function PracticesDetailPage() {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header con botón de volver */}
        <motion.div
          className="max-w-6xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Prácticas y Estudios Disponibles
          </h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl">
            Lista completa de todas las prácticas y estudios de diagnóstico por imágenes 
            disponibles en nuestro centro. Tecnología de última generación para cada estudio.
          </p>
        </motion.div>

        {/* Lista completa de prácticas */}
        <div className="max-w-6xl mx-auto space-y-8">
          {practicesCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border-2 rounded-lg p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                  <category.icon className={`w-7 h-7 ${category.color}`} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {category.practices.length} prácticas disponibles
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {category.practices.map((practice) => (
                  <div
                    key={practice}
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-secondary/50 transition-colors border border-transparent hover:border-border"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-foreground leading-relaxed">{practice}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="max-w-6xl mx-auto mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Necesitas más información sobre alguna práctica?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contáctanos por WhatsApp y te ayudaremos a resolver todas tus dudas
            </p>
            <Button size="lg" asChild>
              <a
                href="https://wa.me/5493518075334"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp - Abre en nueva ventana"
              >
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

