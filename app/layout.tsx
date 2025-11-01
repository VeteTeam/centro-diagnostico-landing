import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Imágenes Dr Castro | Ecografías y Radiografía Digital",
  description:
    "Centro médico especializado en diagnóstico por imágenes en Córdoba. Ecografías y Radiografía Digital Directa con tecnología de última generación.",
  keywords: [
    "ecografías Córdoba",
    "radiografía digital Córdoba",
    "diagnóstico por imágenes",
    "centro médico Córdoba",
    "ecografía Doppler",
    "Dr. Castro",
    "Dean Funes 581",
  ],
  authors: [{ name: "Imágenes Dr Castro" }],
  creator: "Imágenes Dr Castro",
  publisher: "Imágenes Dr Castro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://imagenesdrcastro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Imágenes Dr Castro | Ecografías y Radiografía Digital",
    description:
      "Centro médico especializado en diagnóstico por imágenes en Córdoba. Ecografías y Radiografía Digital Directa con tecnología de última generación.",
    url: "/",
    siteName: "Imágenes Dr Castro",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/logoImagenesDrCastro.png",
        width: 1200,
        height: 630,
        alt: "Imágenes Dr Castro - Centro de Diagnóstico por Imágenes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imágenes Dr Castro | Ecografías y Radiografía Digital",
    description:
      "Centro médico especializado en diagnóstico por imágenes en Córdoba. Tecnología de última generación.",
    images: ["/logoImagenesDrCastro.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agregar códigos de verificación si tienes Google Search Console
    // google: "tu-codigo-de-verificacion",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
