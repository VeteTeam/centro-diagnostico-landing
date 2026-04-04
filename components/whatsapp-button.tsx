"use client"

import { MessageCircle } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const SCROLL_THRESHOLD = 300
const WHATSAPP_NUMBER = "543513443488"
const WHATSAPP_MESSAGE = "Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > SCROLL_THRESHOLD)
  }, [])

  useEffect(() => {
    // Check initial scroll position
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center gap-0 relative"
            aria-label="Contactar por WhatsApp - Abre en nueva ventana"
          >
            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
                >
                  <span className="text-sm font-medium">Contactanos por WhatsApp</span>
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" 
                       aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <motion.div
              className="relative w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-7 h-7" aria-hidden="true" />
              {/* Pulse animation */}
              <motion.span
                className="absolute inset-0 bg-[#25D366] rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

