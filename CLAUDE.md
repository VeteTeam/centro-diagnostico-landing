# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

No test suite is configured in this project.

## Architecture

This is a **Next.js 16 / React 19** landing site for "Imágenes Dr Castro", a medical imaging center in Córdoba, Argentina. It uses the App Router, TypeScript, Tailwind CSS v4, and shadcn/ui (New York style).

### Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Main landing page — assembles all section components |
| `/practicas` | `app/practicas/page.tsx` | Full list of medical practices/studies |
| `/equipamiento` | `app/equipamiento/page.tsx` | Equipment and facilities detail page |

### Component layers

- **`components/`** — Page-specific section components (Hero, Header, Footer, AboutSection, PracticesSection, EquipmentSection, StaffSection, ContactSection, WhatsAppButton, etc.). These are the primary place to make content or layout changes.
- **`components/ui/`** — shadcn/ui primitives. Add new primitives via `pnpm dlx shadcn@latest add <component>` — do not hand-edit these files.
- **`components/practices-detail-page.tsx`** and **`components/equipment-detail-page.tsx`** — Full-page content components used by the `/practicas` and `/equipamiento` routes.

### Styling

- Tailwind CSS v4 with `@import "tailwindcss"` in `app/globals.css` (no `tailwind.config` file — config is CSS-first).
- Design tokens defined as CSS custom properties in `:root` using oklch colors. The primary brand color is medical blue `oklch(0.38 0.13 244)` (≈ `#0A4DA2`).
- `tw-animate-css` provides animation utilities; `framer-motion` is used for scroll-triggered entrance animations on section components.

### Key conventions

- Section components use `framer-motion` `whileInView` with `viewport={{ once: true }}` for scroll animations.
- `next/image` is used for all images; large lightbox/gallery images use native `<img>` to avoid OOM on the Render free tier (512MB RAM limit).
- The site targets Spanish-speaking Argentine users (`lang="es"`, `locale: "es_AR"`).
- `typescript.ignoreBuildErrors: true` is set in `next.config.mjs` — TypeScript errors won't fail the build.
- Vercel Analytics (`@vercel/analytics`) is included in the root layout.
