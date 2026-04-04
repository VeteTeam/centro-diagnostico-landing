import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
  title: "Imágenes Dr Castro | Ecografías y Radiografía Digital en Córdoba",
  description:
    "Centro médico especializado en diagnóstico por imágenes en Córdoba. Ecografías y Radiografía Digital Directa con tecnología de última generación. Equipamiento moderno y equipo profesional.",
  keywords: [
    "diagnóstico por imágenes",
    "ecografías Córdoba",
    "radiografía digital",
    "centro médico Córdoba",
    "ecografía obstétrica",
    "radiografía digital directa",
  ],
  authors: [{ name: "Imágenes Dr Castro" }],
  openGraph: {
    title: "Imágenes Dr Castro | Ecografías y Radiografía Digital",
    description: "Centro médico especializado en diagnóstico por imágenes en Córdoba",
    type: "website",
    locale: "es_AR",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
