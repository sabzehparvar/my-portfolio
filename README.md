# Mojtaba's Portfolio — Next.js

A bilingual (Persian / English) developer portfolio built with Next.js 14 (App Router), TypeScript, and a locale-aware i18n setup.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/fa` (Persian, RTL) by default. Switch to English at `/en`, or use the small language button in the top corner of the page.

## Structure

- `app/[locale]/layout.tsx` — root layout; sets `<html lang dir>`, loads fonts, renders the nav + progress bar.
- `app/[locale]/page.tsx` — composes all page sections.
- `dictionaries/fa.json`, `dictionaries/en.json` — all page copy, one file per language. Edit these to change any text.
- `lib/dictionaries.ts` — loads the right dictionary for the current locale.
- `components/` — one component per section (Hero, Stats, Skills, Experience, Projects, CertsAndLanguages, Contact) plus shared UI (DotNav, LangSwitch, icons, scroll interactions).
- `app/globals.css` — all design styles (colors, layout, animations). Color palette and fonts are defined as CSS variables at the top.
- `middleware.ts` — redirects `/` to `/fa` and enforces the locale prefix on all routes.

## Editing content

All text lives in `dictionaries/fa.json` and `dictionaries/en.json` — update project descriptions, experience, skills, etc. there without touching any component code.

## Build

```bash
npm run build
npm start
```
