---
name: "rchrdkvcs.dev"
description: "My personal portfolio, rebuilt as a static site with Astro 7, Tailwind CSS 4, and Markdown and JSON content collections. It is deployed on Cloudflare and replaces an earlier Nuxt and Directus implementation."
tags: ["Astro", "TypeScript", "Tailwind CSS 4", "Markdown", "Cloudflare"]
github: "https://github.com/rchrdkvcs/rchrdkvcs.dev"
demo: "https://rchrdkvcs.dev"
order: 2
---

## Context

This is my personal portfolio and project archive. I recently migrated it from Nuxt and Directus to Astro, so the site can be generated as static pages while I maintain its content alongside the code.

## What's inside

Project pages are Markdown files, while profile and skill data live in JSON content collections. Astro validates the content at build time and generates the static site. Tailwind CSS 4 provides the styling, and the site is deployed on Cloudflare.

## What I learned

Moving from a headless CMS to repository-managed content makes project writeups easier to version and review. It also keeps the publishing workflow simple: update Markdown or JSON, then build and deploy the site.
