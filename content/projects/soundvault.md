---
title: SoundVault
description: A full-stack music platform for producers and sound designers to upload, share, and discover VST presets and sound packs, built as a PWA with Vue 3 and AdonisJS.
date: "2025-07-25"
tags: ["Vue", "AdonisJS", "TypeScript", "PostgreSQL"]
repo: "https://github.com/rchrdkvcs/soundvault.cloud"
link: ""
featured: true
---

## Context

Music producers accumulate hundreds of VST presets and sound packs over time, but there's no clean way to share them. Existing platforms are cluttered, expensive, or both. SoundVault is my answer to that — a focused platform where producers can upload, organize, and discover sounds.

## Two Repos, One Platform

The project lives across two repositories:

- **soundvault.cloud** — Vue 3 + Vite frontend, built as a PWA
- **api.soundvault.cloud** — AdonisJS 6 REST API with PostgreSQL

Keeping them separate was a deliberate choice. The frontend can be deployed to a CDN independently, and the API scales on its own. They communicate through a clean REST interface.

## Notable Decisions

**PWA over native.** Adding a web app manifest and optimizing for mobile gave us the "app feel" without the App Store overhead. Users can install SoundVault on their home screen.

**Initials over avatars.** Early on, profile images were killing load times. Replacing them with generated initials-based avatars cut page weight significantly — a small change with a big impact.

**Nixpacks for deployment.** After several iterations (the commit history tells the story), I landed on a Nixpacks configuration that handles the Node.js build pipeline cleanly.

## Stack

| | |
|---|---|
| **Frontend** | Vue 3, Vite, TypeScript, PWA |
| **Backend** | AdonisJS 6, PostgreSQL |
| **Auth** | Session-based with secure password handling |
| **Deploy** | Nixpacks on Node.js 22 |
