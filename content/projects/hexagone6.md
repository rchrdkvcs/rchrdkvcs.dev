---
title: Hexagone6
description: A full-stack esports platform for managing an esports organization, featuring event registration, LAN management, guides, FAQ, partner showcases, and real-time stream widgets.
date: "2026-02-12"
tags: ["Nuxt", "AdonisJS", "TypeScript", "Tuyau"]
repo: "https://github.com/Hexagone6"
link: ""
featured: true
---

## The Biggest One

Hexagone6 isn't just a website — it's an entire ecosystem I built from the ground up to run an esports organization. Five interconnected services, 160+ commits on the main site alone, and a stack that pushes the Aduxt monorepo approach to its limits.

Everything runs on **Nuxt 4 + AdonisJS 6**, connected via **Tuyau** for end-to-end type safety. Docker handles deployment, GitHub Actions handles CI/CD with smart change detection so only modified services get redeployed.

## What's Inside

**hexagone6.fr** — The main hub. LAN event pages, registration with tiered pricing, FAQ with full-text search, guides powered by Nuxt Content, partner showcases. This is where most of the work lives.

**widgets.hexagone6.fr** — Stream overlays that pull real-time data from StreamElements. Tips, event info, and custom displays — all rendered as browser sources for OBS.

**mapban.hexagone6.fr** — Competitive map veto tool. AdonisJS backend that talks to Discord (notifications) and Google Sheets (match tracking). Used live during tournament matches.

**bracket.hexagone6.fr** — Tournament bracket display and management for organizing competitive events.

**scanner** — Internal API for member and team data. Handles participant management across events with proper database migrations.

## How It All Fits Together

```
                    ┌──────────────┐
                    │ hexagone6.fr │
                    │  Nuxt + Adonis│
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
   ┌──────▼──────┐  ┌─────▼──────┐  ┌──────▼──────┐
   │   widgets   │  │   mapban   │  │   bracket   │
   │  (Nuxt SSR) │  │  (Adonis)  │  │  (Nuxt SSR) │
   └──────┬──────┘  └─────┬──────┘  └─────────────┘
          │                │
   StreamElements    Discord + Sheets
```

## What I Learned

Managing five services that need to work together forced me to think about deployment strategy early. The smart CI/CD pipeline that detects which service changed was born out of frustration with redeploying everything on every push. Integrating third-party APIs (Discord, Google Sheets, StreamElements) in a production context — where things break at the worst possible time during a live event — taught me more about error handling than any tutorial ever could.
