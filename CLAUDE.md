# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build (also the fastest full type/lint check)
npm run start   # serve the production build
npm run lint    # next lint (eslint-config-next: core-web-vitals + typescript)
```

There is no test framework in this repo — nothing to run or add tests to unless asked.
Both `package-lock.json` and `yarn.lock` are committed; if you change dependencies, update the lockfile for whichever manager you use and don't let them drift apart silently.

## What this is

Static marketing site for two rental properties in Descanso, SC, hosted on Vercel at
[chaleaconchego.com](https://chaleaconchego.com). Next.js 14 App Router + TypeScript + Tailwind.
There is no backend: no API routes, no database, no CMS, no forms that submit anywhere.
Every conversion path is an outbound WhatsApp deep link.

## Architecture

**A chooser at `/` plus two independent landing pages, one per property.**

- `src/app/page.tsx` → `src/components/home/property-chooser.tsx`: full-screen split (side by side
  on desktop, stacked on mobile) that links to each property (Chalé Aconchego left/top,
  Chalé Araucária right/bottom). Desktop hover/focus grows the active half and blurs the
  other; see `design-system.md` §5.8.

Each property page is a flat, ordered stack of section components; the page file *is* the layout:

- `src/app/chale-aconchego/page.tsx` → `src/components/chale-aconchego/*` (Chalé Aconchego, couples' retreat)
- `src/app/chale-araucaria/page.tsx` → `src/components/recanto-aconchego/*` (Chalé Araucária, romantic chalé with
  hot tub, set inside the Recanto Aconchego grounds)

**Naming: "Recanto" in code = the Chalé Araucária page.** The second property used to be marketed as
"Recanto Aconchego"; it is now the **Chalé Araucária** (couples, with a hidromassagem tub), and
"Recanto Aconchego" is only the name of the outdoor/party area around it (up to 20 people, rentable
without the chalé). User-facing copy says "Chalé Araucária"; code identifiers were deliberately kept:
the `src/components/recanto-aconchego/` folder, the `Recanto*` exports, `RECANTO_*` constants and
`public/assets/recanto/`. Wherever this file says "Recanto" about code, it means that page.

The two component sets deliberately duplicate each other (`hero`, `about`, `highlights`,
`experiences`, `video-section`, `faq`, `cta-section`, `footer`, `navbar`). They are *not* shared
components with props — each property has its own copy, its own palette and its own copy text.
Don't refactor them into one parameterized set without being asked; the duplication is what lets
the two brands diverge. Recanto components are exported with a `Recanto` prefix (`RecantoHero`).

**Content lives in the components.** All copy, FAQ entries, testimonials, nav items and
highlight/amenity lists are module-level `const` arrays at the top of each section file
(`NAV_ITEMS`, `HIGHLIGHTS`, `FAQ_ITEMS`, `TESTIMONIALS`, `AMENITIES`, …). Editing site text means
editing that array, not a data file.

**Two different theming systems — this is the main thing to get right.** `design-system.md` at the
repo root is the full reference (every token and hex with its real usage, the type scale, spacing
and component patterns, plus the known inconsistencies and the agreed target for each). Read it
before changing colors, type or spacing, and update it when you change any of those:

- **Chalé** uses the shadcn-style HSL CSS variables in `src/app/globals.css` through Tailwind's
  semantic tokens (`bg-background`, `text-foreground`, `bg-primary`, `text-muted-foreground`, …).
  Warm earth palette.
- **Recanto** ignores those tokens and hardcodes a green/cream palette as Tailwind arbitrary
  values: `#f5f2ed` (background), `#2d3a2e` (foreground/dark green), `#6b7c6b` (muted green),
  set as a baseline on the page wrapper in `chale-araucaria/page.tsx`. When touching Recanto,
  reuse those exact hex values rather than introducing tokens or new shades.

A `.dark` variable block exists in `globals.css`, but Tailwind has no `darkMode` config and nothing
ever applies the class — the site is light-only.

**Fonts and type.** `src/app/layout.tsx` loads Inter (`--font-inter` → `font-sans`, body default)
and Playfair Display (`--font-playfair` → `font-serif`). Headings are `font-serif` throughout;
section labels are small uppercase with `tracking-[0.3em]`.

**Metadata.** The root layout carries generic metadata for both properties (used by the chooser at
`/`); the Chalé and Recanto pages each override it with their own `metadata` and `viewport` exports
(each with its own `themeColor`).

**Server by default.** `"use client"` appears only where there's real interactivity: navbar (scroll
state + mobile menu with body-scroll lock), video sections (`useRef` play/mute control), FAQ
(hand-rolled accordion via `useState` — not Radix Collapsible), testimonials, parallax, and the
home chooser (hover/focus state).

**Cross-linking is intentional.** Each property's navbar and footer links to the other one
(`/chale-araucaria` ↔ `/chale-aconchego`); keep both directions working when editing nav.

**Anchors.** In-page nav relies on section ids: Chalé has `#sobre`, `#experiencias`, `#video`,
`#faq`, `#contato`; Recanto adds `#atividades` and uses `#galeria` (on `experiences.tsx`).
Renaming a section id means updating that page's `NAV_ITEMS`.

## Conventions worth knowing

- **All UI copy is pt-BR** (`<html lang="pt-BR">`). Write new copy in Portuguese with correct
  accents and crase — the whole site was proofread, so never leave "video", "servicos", "diaria",
  "a parte" etc. This includes non-visible text (`alt`, `aria-label`, iframe `title`). Decimals
  use a comma (`4,9`). Only code identifiers, paths and anchors stay unaccented (`#video`,
  `chale-araucaria`).
- **Contact links are centralized** in `src/lib/constants.ts`: `WHATSAPP_LINK` /
  `RECANTO_WHATSAPP_LINK` (WhatsApp deep links with a property-specific prefilled message) and the
  Instagram links. Always import from there instead of inlining a URL. `CMS_NAME` and
  `EXAMPLE_PATH` in that file are leftovers from the Next.js blog-starter template and are unused.
- **Images**: `next/image` with `fill` + explicit `sizes` + `quality`, sourced from
  `public/assets/` (Chalé) and `public/assets/recanto/` (Recanto). `next.config.mjs` enables
  AVIF/WebP. Videos are plain `<video>` with a `poster` still, `playsInline`, `preload="metadata"`.
  **Videos are not in the repo**: they live in a public Cloudflare R2 bucket served at
  `midia.chaleaconchego.com` (DNS is on Cloudflare), referenced via `CHALE_VIDEO_URL` /
  `RECANTO_VIDEO_URL` in `src/lib/constants.ts`. `public/**/*.mp4` is gitignored. To change a
  video, compress it (see below), upload it to the bucket, and update the constant.
- **Performance — what bypasses the optimizer.** `next/image` already serves resized AVIF, so
  converting sources to WebP gains nothing for visitors. But a `<video poster>` and a CSS
  `backgroundImage` (the Recanto parallax) download the raw file as-is, so they must point to a
  pre-sized `.webp` (`frente-sol-poster.webp`, `recanto/banner-inicio-poster.webp`,
  `recanto/chale-noite-pinheiro.webp`), never to a multi-MB original. Source photos are kept at
  ≤2560px on the long edge (JPEG q82, orientation baked in, metadata stripped). Videos are H.264
  with a bitrate cap (~3–4 Mbps for 1080p, ~2.5 Mbps for 720p), 30 fps, AAC 128k and `+faststart`
  (never HEVC: many browsers can't play it).
- **Availability calendar**: both FAQs start with a "Datas disponíveis" entry that embeds a Google
  Calendar iframe, driven by a `calendar: true` flag on the FAQ item. Chalé uses
  `chaledoaconchego@gmail.com`; Recanto (Chalé Araucária) uses its own group calendar, which must be
  set to public in Google Calendar or visitors get a permission error.
- **`src/components/ui/*`** (button, input, label, textarea, collapsible) is unused shadcn
  scaffolding — no page imports it. `components.json` is configured for shadcn (`@/components`,
  `@/lib/utils`, baseColor gray) if you need to add one; `cn()` lives in `src/lib/utils.ts`.
- `tsconfig.json` has `strict: false`, and `@/*` maps to `./src/*`.
