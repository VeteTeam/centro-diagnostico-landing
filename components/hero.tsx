"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

// Animation variants for hero content
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
    },
  },
}

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-28"
      aria-label="Hero section - CASFRA Imágenes"
    >
      {/* Background Image with Next.js Image optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/SalaEspera/SaladeEspera3.jpeg"
          alt="Sala de espera moderna del centro de diagnóstico Imágenes Dr Castro"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center center' }}
          sizes="100vw"
          quality={70}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          decoding="async"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/85 to-primary/75" 
             aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center relative">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-lg leading-tight"
            variants={itemVariants}
          >
            CASFRA Imágenes
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 text-balance drop-shadow-md font-semibold"
            variants={itemVariants}
          >
            Ecografías y Radiografía Digital Directa
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty"
            variants={itemVariants}
          >
            Tecnología de última generación y atención profesional para el cuidado de tu salud
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform shadow-xl"
              asChild
            >
              <a
                href="https://wa.me/543513443488"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp - Abre en nueva ventana"
              >
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                Contactar por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary transition-all shadow-xl"
              asChild
            >
              <Link href="/practicas" aria-label="Ver prácticas médicas disponibles">
                Ver Prácticas
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link
          href="/practicas"
          className="block text-white/80 hover:text-white transition-colors"
          aria-label="Ir a la página de prácticas médicas"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-6 h-6" aria-hidden="true" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
