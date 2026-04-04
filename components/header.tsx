"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { LogoCasfra } from "@/components/logo-casfra"
import { Menu, X, Phone, MapPin, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Prácticas", href: "/practicas" },
  { label: "Equipamiento", href: "/equipamiento" },
  { label: "Contacto", href: "/#contacto" },
]

const WA_LINK = "https://wa.me/543513443488"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
      role="banner"
    >
      {/* ── Franja de contacto ── */}
      <div className="bg-[#0A4DA2] text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between gap-3 text-xs">

            {/* Nombre institucional – siempre visible */}
            <span className="font-semibold tracking-widest uppercase whitespace-nowrap">
              CASFRA IMÁGENES CÓRDOBA
            </span>

            {/* Datos de contacto – sólo en pantallas medianas+ */}
            <div className="hidden md:flex items-center gap-5 text-white/85">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
                Dean Funes 581, Córdoba Capital
              </span>
              <a
                href="tel:03515697631"
                className="flex items-center gap-1 hover:text-white transition-colors"
                aria-label="Llamar al consultorio"
              >
                <Phone className="w-3 h-3 shrink-0" aria-hidden="true" />
                351&nbsp;569-7631&nbsp;/&nbsp;569-7632&nbsp;/&nbsp;569-7633
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                WA 351&nbsp;344-3488
              </a>
            </div>

            {/* Móvil: sólo botón WA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex items-center gap-1 text-white/85 hover:text-white transition-colors"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-3 h-3" aria-hidden="true" />
              <span>WA 351 344-3488</span>
            </a>

          </div>
        </div>
      </div>

      {/* ── Barra de navegación principal ── */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link
              href="/#inicio"
              aria-label="Ir al inicio - CASFRA Imágenes"
              className="hover:opacity-85 transition-opacity duration-200"
            >
              <LogoCasfra className="h-14 w-auto" />
            </Link>

            {/* Navegación desktop */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>

            {/* Botón menú móvil */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Navegación móvil */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                id="mobile-menu"
                className="md:hidden py-4 border-t"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                aria-label="Menú de navegación móvil"
              >
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
