---
title: CloudCost
description: A cloud pricing comparison tool with AI-powered recommendations that aggregates pricing data from multiple providers like DigitalOcean and Hetzner.
date: "2025-10-03"
tags: ["AdonisJS", "Nuxt", "TypeScript", "AI"]
repo: "https://github.com/rchrdkvcs/cloudcost"
link: ""
featured: false
---

## Why This Exists

Picking a cloud plan shouldn't require opening 15 tabs. CloudCost pulls pricing from providers like DigitalOcean and Hetzner, normalizes the data, and lets you compare side by side. An LLM-powered recommendation engine scores plans based on your needs.

## How It Works

```
User fills form → API fetches provider pricing →
Normalize & filter → LLM scores plans →
Grouped recommendations by provider
```

The pricing sync pulls live data from provider APIs and stores it locally. Filtering happens post-processing (by OS, region, specs), which keeps the sync logic clean and the filtering flexible.

## The LLM Piece

Originally, recommendations hit an external AI API. I ended up replacing that with a **local scoring algorithm** — faster, more predictable, no API costs. Plans are grouped per provider, duplicates are excluded, and the top picks surface with a clear explanation of why they scored high.

## Built With

AdonisJS 6 handles the API, pricing sync, auth, and the recommendation logic. Nuxt powers the frontend with comparison forms and a simulation page where you can tweak configs and see pricing update in real-time. Docker Compose runs the dev database.

## What I Took Away

Working with multiple third-party pricing APIs taught me that data normalization is 80% of the work. Every provider structures their pricing differently, and building a unified comparison model that actually makes sense to the end user was the real challenge — not the AI part.
