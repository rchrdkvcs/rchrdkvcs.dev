---
title: Create Aduxt
description: A CLI scaffolding tool for creating fullstack monorepos with AdonisJS and Nuxt, featuring type-safe API communication via Tuyau and Bun as package manager.
date: "2025-11-23"
tags: ["AdonisJS", "Nuxt", "Bun", "Tuyau"]
repo: "https://github.com/rchrdkvcs/create-aduxt"
link: ""
featured: true
---

## One Command

```bash
npm create aduxt@latest
```

That's it. You get a production-ready monorepo with AdonisJS 6 (backend), Nuxt 4 (frontend), Tuyau (type-safe API calls), PostgreSQL, Docker, and auth — all wired up and ready to `bun run dev`.

## Why I Built This

I kept setting up the same stack: AdonisJS + Nuxt + Tuyau + Docker. Every time, it was an hour of boilerplate before writing a single line of business logic. Create Aduxt is that hour, packaged into a scaffold.

## What You Get

```
aduxt/
├── api/                  # AdonisJS 6
│   ├── app/auth/         # Auth module (ready to go)
│   ├── database/         # Migrations
│   └── start/routes.ts   # Routes → Tuyau types
│
├── web/                  # Nuxt 4
│   ├── app/pages/        # File-based routing
│   ├── app/plugins/      # Tuyau plugin
│   └── app/composables/  # Vue composables
│
├── Dockerfile            # Multi-stage build
├── compose.yml           # Dev database
└── package.json          # Bun workspaces
```

## The Type-Safety Chain

This is the core selling point. Change a route in AdonisJS → run `node ace tuyau:generate` → the Nuxt frontend instantly knows about it. Full autocompletion, compile-time errors if you call a route that doesn't exist or pass the wrong types.

```typescript
// In Nuxt — fully typed, autocompleted
const tuyau = useTuyau()
const { data } = await tuyau.users.$get()
```

## Works With Everything

```bash
bunx create-aduxt@latest    # Bun
pnpm create aduxt@latest     # pnpm
yarn create aduxt            # Yarn
npm create aduxt@latest      # npm
```

I use this for most of my new projects now. Gitify, for example, was bootstrapped entirely with Create Aduxt.
