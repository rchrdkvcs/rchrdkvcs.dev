---
title: Shorty
description: A URL shortener with organization management, QR code generation, and link analytics, built with AdonisJS and Nuxt as a full-stack application.
date: "2025-07-12"
tags: ["AdonisJS", "Nuxt", "TypeScript", "PostgreSQL"]
repo: "https://github.com/rchrdkvcs/shorty"
link: ""
featured: false
---

## More Than a Link Shortener

Shorty started as a simple URL shortener but grew into a proper link management platform. Organizations, QR codes, clipboard integration, and a full CI/CD pipeline — it's the kind of internal tool that keeps evolving because you keep finding things to add.

## Features at a Glance

- **Shorten URLs** with custom slugs
- **Organizations** — create workspaces, switch between them, manage links per org
- **QR codes** — generate and download for any shortened link
- **One-click copy** from the dashboard
- **Version indicator** on the login page, synced with releases

## The Deployment Story

A good chunk of the commit history is about getting the deployment pipeline right. The project uses GitHub Actions with:

- Automated builds on release (including pre-releases)
- Webhook triggers to Coolify for zero-downtime deploys
- Docker images built and pushed per release

It took a few iterations to get the workflow dialing in, but the end result is a `git tag → push → deployed` pipeline.

## Stack

Built with AdonisJS 6 on the backend and Nuxt on the frontend, connected via Tuyau for type-safe API calls. PostgreSQL stores everything. The whole thing runs in Docker.
