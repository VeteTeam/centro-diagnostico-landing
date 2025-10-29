'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Mostrar el botón después de hacer scroll
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="https://wa.me/5493518075334?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-0 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip */}
      <div className={`absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="text-sm font-medium">Contactanos por WhatsApp</span>
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </div>

      {/* Button */}
      <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg flex items-center justify-center group cursor-pointer transition-all hover:scale-110">
        <MessageCircle className="w-7 h-7" />
        {/* Pulse animation */}
        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-30" />
      </div>
    </a>
  )
}

