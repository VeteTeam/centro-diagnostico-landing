import { Activity, Scan } from "lucide-react"

export function EquipmentSection() {
  const equipment = [
    {
      title: "Ecógrafo de Alta Resolución",
      description: "Equipamiento de última generación para estudios ecográficos precisos",
      image: "/modern-ultrasound-machine-medical-equipment.jpg",
      icon: Activity,
    },
    {
      title: "Radiografía Digital Directa",
      description: "Tecnología digital para imágenes de alta calidad con menor radiación",
      image: "/digital-x-ray-machine-medical-equipment.jpg",
      icon: Scan,
    },
  ]

  return (
    <section id="equipos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Equipamiento Moderno
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Contamos con tecnología de última generación para garantizar diagnósticos precisos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Icon overlay */}
              <div className="absolute top-4 right-4 w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 text-balance">{item.title}</h3>
                  <p className="text-white/95 text-pretty leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
