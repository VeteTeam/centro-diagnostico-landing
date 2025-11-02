"use client"

import { useState, useEffect, useCallback } from "react"
import { Camera, Monitor, X, ChevronLeft, ChevronRight, ZoomIn, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

interface FacilityGallery {
  title: string
  description: string
  images: string[]
  category: "ecografia" | "radiografia"
}

const facilities: FacilityGallery[] = [
  {
    title: "Ecografía",
    description: "Amplias salas equipadas con tecnología de última generación para estudios ecográficos precisos y cómodos",
    images: [
      "/Ecografos/SalaEcografía1.jpeg",
      "/Ecografos/salaEcografía2.jpeg",
      "/Ecografos/Ecografo1.jpeg",
      "/Ecografos/Ecografo2.jpeg",
      "/Ecografos/ImagenEcografía.jpeg",
    ],
    category: "ecografia",
  },
  {
    title: "Radiografía",
    description: "Instalaciones modernas con equipamiento digital avanzado para diagnósticos radiológicos de alta calidad",
    images: [
      "/RX/SalaRx1.jpeg",
      "/RX/SalaRx2.jpeg",
      "/RX/DigitalizadorImagen1.jpeg",
      "/RX/DigitalizadorInformes.jpeg",
      "/RX/Digitalizador.png",
    ],
    category: "radiografia",
  },
]

function ImageLightbox({ 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev 
}: Readonly<{ 
  images: readonly string[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}>) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
        <DialogTitle className="sr-only">
          Vista ampliada de imagen {currentIndex + 1} de {images.length}
        </DialogTitle>
        <div className="relative w-full h-[90vh] flex items-center justify-center">
          {/* Imagen ampliada */}
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center p-4">
            <Image
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1} de ${images.length}`}
              fill
              className="object-contain"
              quality={80}
              priority
            />
          </div>

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navegación anterior */}
          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-4 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Navegación siguiente */}
              <button
                onClick={onNext}
                className="absolute right-4 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Indicador de imagen */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function EquipmentDetailPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images)
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length)
  }, [lightboxImages.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
  }, [lightboxImages.length])

  // Manejar navegación con teclado
  useEffect(() => {
    if (!lightboxOpen) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    
    globalThis.window.addEventListener('keydown', handleKeyDown)
    return () => globalThis.window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, closeLightbox, nextImage, prevImage])

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header con botón de volver */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
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
            Equipamiento e Instalaciones
          </h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl">
            Tecnología de última generación y espacios diseñados para tu comodidad y el mejor diagnóstico
          </p>
        </motion.div>

        {/* Galerías de Instalaciones */}
        <div className="max-w-6xl mx-auto space-y-16">
          {facilities.map((facility, facilityIndex) => {
            const IconComponent = facility.category === "ecografia" ? Camera : Monitor
            const featuredImages = facility.images.slice(0, 6)
            
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: facilityIndex * 0.2, duration: 0.5 }}
                className="bg-card border-2 rounded-lg p-6 md:p-8"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                    facility.category === "ecografia" 
                      ? "bg-blue-50 text-blue-600" 
                      : "bg-purple-50 text-purple-600"
                  }`}>
                    <IconComponent className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {facility.description}
                    </p>
                  </div>
                </div>

                {/* Gallery Grid - Con lightbox */}
                <div className={(() => {
                  if (featuredImages.length === 1) return "grid grid-cols-1 gap-6"
                  if (featuredImages.length === 2) return "grid grid-cols-1 md:grid-cols-2 gap-6"
                  if (featuredImages.length === 3) return "grid grid-cols-1 md:grid-cols-3 gap-6"
                  if (featuredImages.length === 4) return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                })()}>
                  {featuredImages.map((image, imageIndex) => (
                    <motion.button
                      key={image}
                      type="button"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (facilityIndex * 0.2) + (imageIndex * 0.1), duration: 0.5 }}
                      className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-secondary/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => openLightbox(featuredImages, imageIndex)}
                      aria-label={`Ampliar imagen ${imageIndex + 1} de ${facility.title}`}
                    >
                      <Image
                        src={image}
                        alt={`${facility.title} - Vista ${imageIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={75}
                        loading={imageIndex < 3 ? "eager" : "lazy"}
                      />
                      {/* Overlay con icono de zoom */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          className="max-w-6xl mx-auto mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tienes preguntas sobre nuestro equipamiento?
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            images={lightboxImages}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
