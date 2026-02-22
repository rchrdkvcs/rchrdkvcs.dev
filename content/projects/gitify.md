---
title: Gitify
description: A GitHub project management tool for organizing repositories into projects and favorites, built with AdonisJS and Nuxt using the Aduxt monorepo stack.
date: "2026-01-30"
tags: ["AdonisJS", "Nuxt", "TypeScript", "Docker"]
repo: "https://github.com/rchrdkvcs/gitify"
link: ""
featured: false
---

## The Idea

GitHub gives you stars. That's about it for organizing repos. No folders, no groups, no "these five repos are all part of project X." Gitify fills that gap — it lets you group repositories into projects and mark favorites so you can actually navigate your own work.

## What It Does

- **Projects** — Group related repos under a named project
- **Favorites** — Pin repos you access daily
- **Dashboard** — One view for everything, instead of scrolling through github.com/your-profile

## Built With Aduxt

Gitify was the first real project I bootstrapped with [Create Aduxt](/projects/create-aduxt). It validated the whole approach: scaffold → tweak → ship. The type-safe Tuyau connection between Nuxt and AdonisJS made building the CRUD operations feel almost effortless.

## Development Setup

Docker Compose handles the dev environment. Clone, `docker compose up`, and you're running. No local PostgreSQL install needed, no fiddling with environment variables — the defaults work out of the box.
