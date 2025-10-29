import { User, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function StaffSection() {
  const professionals = [
    {
      name: "Dr. Castro Forgia Raúl",
      mp: "13621",
      specialty: "Diagnóstico por Imágenes",
    },
    {
      name: "Dr. Alfonso Fernando",
      mp: "25307",
      specialty: "Eco Cardio Doppler Color",
    },
    {
      name: "Dra. Acosta Andrea",
      mp: "37921",
      specialty: "Diagnóstico por Imágenes",
    },
    {
      name: "Dr. Pereyra Cristian",
      mp: "36068",
      specialty: "Diagnóstico por Imágenes",
    },
    {
      name: "Dra. Olivera Alejandra",
      mp: "35374",
      specialty: "Diagnóstico por Imágenes",
    },
    {
      name: "Dr. Cattaneo Buteler Gaspar",
      mp: "42481",
      specialty: "Diagnóstico por Imágenes",
    },
  ]

  return (
    <section id="equipo" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">Nuestro Equipo Profesional</h2>
          <p className="text-lg text-primary-foreground/90 text-pretty">
            Médicos especialistas altamente capacitados y comprometidos con la excelencia en el diagnóstico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {professionals.map((professional, index) => (
            <Card key={index} className="border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center shrink-0">
                    <Heart className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 text-primary-foreground">{professional.name}</h3>
                    <p className="text-sm text-primary-foreground/80 mb-2 font-medium">MP: {professional.mp}</p>
                    <p className="text-xs text-primary-foreground/70 text-balance">{professional.specialty}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
