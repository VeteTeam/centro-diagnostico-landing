'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Activity, Monitor, Heart } from "lucide-react"

// 💡 Learning: Organizamos las prácticas por categorías para mejor UX
const practicesCategories = [
  {
    name: "Ecografías",
    icon: Activity,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    practices: [
      "ECOGRAFIA TOCOGINECOLOGICA CON O SIN TRANSDUCTOR VAGINAL",
      "ECOGRAFIA TOCOGINECOLOGICA DEL EMBARAZO ( TRIDIMEANCIONAL O TRANSNUCAL )",
      "ECOGRAFIA MAMARIA UNI O BILATERAL",
      "ECOGRAFIA CEREBRAL",
      "ECOGRAFIA OFTALMOLOGICA UNI O BILATERAL",
      "ECOGRAFIA TIROIDEA",
      "ECOGRAFIA DE TESTICULOS",
      "ECOGRAFIA COMPLETA DE ABDOMEN",
      "ECOGRAFIA HEPATOBILIAR, ESPLENICA O TORACICA",
      "ECOGRAFIA DE VEJIGA O PROSTATA CON O SIN TRANSDUCTOR RECTAL",
      "ECOGRAFIA RENAL BILATERAL",
      "ECOGRAFIA AORTA ABDOMINAL DINAMICA Y ESTATICA",
      "ECOGRAFIA PANCREATICA O SUPRARRENAL",
      "ECOGRAFIA PARA LA AMNIOCENTESIS",
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
      "ECODOPPLER COLOR ESPLENICO-CAVA",
      "ECOGRAFIA TIROIDEA ESPECIALIZADA C/INFORME ECODOPLER",
      "ECDOPPLER CARDIACO COLOR",
      "ECODOPPLER CARDIACO FETAL COLOR - ECODOPLER COLOR CIRCULACION PLACENTARIA",
      "ECODOPPLER TRANSCRANEAL",
    ]
  },
  {
    name: "Radiografías",
    icon: Monitor,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    practices: [
      "RADIOSCOPIA SIMPLE",
      "RADIOSCOPIA CON INTENSIFICADOR DE IMAGEN",
      "RADIOSCOPIA CON CIRCUITO CERRADO DE TELEVISION",
      "Rx DEL CRANEO, CARA, SENOS PARANASALES O CAVUM ( PRIMERA EXPOSICION )",
      "RX DEL CRANEO,CARA SENOS PARANASALES O CAVUN ( EXPOSICIONES SUBSIGUIENTES )",
      "Rx TEMPORAL O AGUJEROS OPTICOS, COMPARATIVOS",
      "Rx ARTICULACION TEMPOROMANDIBULAR",
      "Rx DE RAQUIS (COLUMNA) ( PRIMERA EXPOSICION )",
      "RX DE RAQUIS ( COLUMNA ) ( EXPOSICIONES SUBSIGUIENTES )",
      "Rx DE HOMBRO,HUMERO,PELVIS,CADERA Y FEMUR (PRIMERA EXPOSICION )",
      "RX DE HOMBRO, HUMERO, PELVIS, CADERA, FEMUR ( EXPOSICIONES SUBSIGUIENTES )",
      "Rx DE ANTEBRAZO,CODO,MANO,RODILLA,PIE,PIERNA, TOBILLO Y PIE (COMPRENDE 2 EXPOSICIONES )",
      "Rx AMPLIADA O MACRORRADIOGRAFIA",
      "Rx TORAX ( TELE )",
      "RX TORAX ( EXPOSICIONES SUBSIGUIENTES )",
      "Rx SERIADA GASTRODUODENAL",
      "Rx SERIADA GASTRODUODENAL, TECNICA DOBLE CONTRASTE",
      "Rx SERIADA ESOFAGOGASTRODUODENAL",
      "Rx TRANSITO INTESTINO DELGADO O COLON",
      "Rx SERIADA ILEOCECOAPENDICULAR",
      "RX COLON POR ENEMA Y EVACUADO",
      "Rx SIMPLE DE ABDOMEN",
      "RX SERIADA GASTRODUODENAL - NIÑOS",
      "Rx SIMPLE DE ARBOL URINARIO",
    ]
  }
]

export function PracticesSection() {
  return (
    <section id="practicas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Prácticas y Estudios Disponibles
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Amplia gama de servicios de diagnóstico por imágenes de alta calidad
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {practicesCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-2">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <span className="text-foreground">{category.name}</span>
                  <Badge variant="secondary" className="ml-auto">
                    {category.practices.length} prácticas
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`category-${categoryIndex}`}>
                    <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground">
                      Ver todas las prácticas de {category.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-2 pt-2">
                        {category.practices.map((practice, practiceIndex) => (
                          <div
                            key={practiceIndex}
                            className="flex items-start gap-2 p-2 rounded-md hover:bg-secondary/50 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-foreground">{practice}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            ¿Necesitas información sobre alguna práctica específica?{" "}
            <a href="#contacto" className="text-primary hover:underline font-semibold">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

