import type { SVGProps } from "react"

interface LogoCasfraProps extends SVGProps<SVGSVGElement> {
  variant?: "horizontal" | "compact"
  /** Usar en fondos oscuros: invierte texto a blanco, mantiene cian */
  dark?: boolean
}

// La variable CSS la inyecta next/font desde layout.tsx.
// Fallbacks garantizan render correcto en cualquier contexto (SVG file, SSR, email).
const FONT = "var(--font-montserrat, 'Montserrat', 'Segoe UI', Arial, sans-serif)"

export function LogoCasfra({
  variant = "horizontal",
  dark = false,
  className,
  ...props
}: LogoCasfraProps) {
  const primary = dark ? "#FFFFFF" : "#0A4DA2"
  const accent  = "#00B4D8"                          // cian funciona en ambos fondos
  const muted   = dark ? "rgba(255,255,255,0.5)" : "#94A3B8"
  const sep     = dark ? "rgba(255,255,255,0.2)" : "rgba(10,77,162,0.3)"

  // Spread de propiedades tipográficas para <text> SVG
  const t = (weight: number, size: number, spacing: number) => ({
    style:         { fontFamily: FONT },
    fontWeight:    weight,
    fontSize:      size,
    letterSpacing: spacing,
  })

  // ─────────────────────────────────────────────────────────
  //  ÍCONO (compartido por ambas variantes)
  //  Arcos: semicírculos centrados en (0,27) coords. locales.
  //  Barrido clockwise → forma de "C" / señal ecográfica.
  //  Focal: cápsula vertical (transductor), no punto WiFi.
  // ─────────────────────────────────────────────────────────
  const Icon = (
    <g fill="none">
      {/* Transductor médico */}
      <rect x="-2" y="21" width="4" height="12" rx="2" fill={accent} />
      {/* Arco 1 · r=10 · acento */}
      <path d="M 0,17 A 10,10 0 0,1 0,37" stroke={accent}   strokeWidth={2.8} strokeLinecap="round" />
      {/* Arco 2 · r=18 · primario */}
      <path d="M 0,9  A 18,18 0 0,1 0,45" stroke={primary}  strokeWidth={3.2} strokeLinecap="round" />
      {/* Arco 3 · r=26 · primario · trazo más grueso */}
      <path d="M 0,1  A 26,26 0 0,1 0,53" stroke={primary}  strokeWidth={4.0} strokeLinecap="round" />
    </g>
  )

  // ─────────────────────────────────────────────────────────
  //  VARIANTE COMPACTA  (200 × 155)
  //  Uso: avatar, redes sociales, cartelería vertical.
  //  Gap ícono→CASFRA: 16px de aire limpio.
  // ─────────────────────────────────────────────────────────
  if (variant === "compact") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 155"
        role="img"
        aria-label="CASFRA Imágenes"
        className={className}
        {...props}
      >
        <g transform="translate(88,18)">{Icon}</g>

        <text x={100} y={108} textAnchor="middle" fill={primary} {...t(700, 26, 5)}>CASFRA</text>
        <line x1={60} y1={113} x2={140} y2={113} stroke={sep} strokeWidth={0.6} />
        <text x={100} y={127} textAnchor="middle" fill={primary} {...t(400, 13, 4)}>IMÁGENES</text>
        <text x={100} y={142} textAnchor="middle" fill={muted}   {...t(300,  9, 2)}>Córdoba</text>
      </svg>
    )
  }

  // ─────────────────────────────────────────────────────────
  //  VARIANTE HORIZONTAL  (280 × 80)
  //  Uso: header web, membrete, email.
  //  Ícono izquierda · texto apilado derecha.
  // ─────────────────────────────────────────────────────────
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 80"
      role="img"
      aria-label="CASFRA Imágenes"
      className={className}
      {...props}
    >
      <g transform="translate(14,14)">{Icon}</g>

      <g transform="translate(62,0)">
        <text x={0} y={36} fill={primary} {...t(700, 28, 5)}>CASFRA</text>
        <line x1={0} y1={41} x2={140} y2={41} stroke={sep} strokeWidth={0.6} />
        <text x={0} y={53} fill={primary} {...t(400, 13, 4)}>IMÁGENES</text>
        <text x={1} y={66} fill={muted}   {...t(300,  9, 2)}>Córdoba</text>
      </g>
    </svg>
  )
}
