import Image from "next/image"

export function FacilitiesSection() {
  const facilities = [
    {
      title: "Sala de Espera Confortable",
      description: "Ambiente cálido y acogedor para la comodidad de nuestros pacientes",
      image: "/modern-medical-center-waiting-room.jpg",
    },
    {
      title: "Consultorios Equipados",
      description: "Espacios modernos y completamente equipados para atención profesional",
      image: "/modern-medical-consultation-room.jpg",
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">Espacios diseñados para tu comodidad y bienestar</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 text-balance">{facility.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
