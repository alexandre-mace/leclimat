# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Le Climat en 10 Minutes" is a French-language educational single-page website about climate change, built with Next.js 13 App Router. All content is in French.

## Commands

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint (extends next/core-web-vitals)
```

No test framework is configured.

## Architecture

**Single-page scroll app** — The entire site is one page (`app/page.tsx`, ~1400 lines) composed of sequential `Section` components covering climate topics. Navigation is anchor-based with smooth scrolling.

**Key components:**
- `Section` — Main content block with image, text (HTML via `dangerouslySetInnerHTML`), emoji, sources list, and optional reversed layout. This is the core building block of the page.
- `ZoomableImage` — Client component wrapping `react-medium-image-zoom` for interactive image zoom
- `Example` — Showcase component with zoomable image and descriptive text
- `SectionEmoji` — Client component for displaying section emoji icons
- `ui/accordion` — shadcn/ui accordion (Radix UI based)

**Component model:** Server components by default. Only `ZoomableImage`, `SectionEmoji`, and `ui/accordion` use `"use client"`.

## Styling

Tailwind CSS with shadcn/ui conventions. The `cn()` utility from `lib/utils.ts` combines `clsx` and `tailwind-merge` for class composition. Theme colors use CSS custom properties (HSL) defined in `app/globals.css`.

## Conventions

- Import paths use `@/` alias (maps to project root)
- Images stored in `public/images/` (47 educational PNGs)
- Emoji icons loaded from external CDN (Microsoft Teams emoji URLs)
- Section content is hardcoded HTML strings in `page.tsx`, not MDX or a CMS
- Prettier with `prettier-plugin-tailwindcss` for formatting
