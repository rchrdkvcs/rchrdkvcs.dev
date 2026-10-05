# rchrdkvcs.dev

Personal portfolio. Fully static site built with [Astro](https://astro.build) and Tailwind CSS. All content lives in this repo as Markdown/JSON: no CMS, no server.

## Development

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static output in dist/
pnpm preview   # serve dist/
pnpm check     # type-check .astro/.ts files and content schemas
pnpm lint      # oxlint
pnpm format    # oxfmt (does not support .astro files yet)
```

## Editing content

| What               | Where                                  |
| ------------------ | -------------------------------------- |
| Name, bio, socials | `src/content/profile.json`             |
| Avatar             | `src/assets/avatar.png`                |
| Skills             | `src/content/skills.json`              |
| Projects           | `src/content/projects/<slug>.md`       |
| Experiences        | `src/content/experiences/<company>.md` |

Schemas are defined in `src/content.config.ts`. The build fails if a frontmatter field is missing or invalid.

### Project

The file name is the URL slug (`/projects/<slug>/`). The Markdown body is the project page.

```md
---
name: "My Project"
description: "One-line summary shown on cards."
tags: ["Astro", "TypeScript"]
github: "https://github.com/..." # optional
demo: "https://..." # optional
order: 3 # lower comes first; the home page shows the first 5
draft: false # optional, true hides the project
---

## Overview

Images go in `src/content/projects/images/` and are optimised at build time:

![Screenshot](./images/my-project-1.png)
```

### Experience

```md
---
company: "Acme"
role: "Developer"
logo: "./logos/acme.png" # optional, file in src/content/experiences/logos/
startDate: "2024-01-01"
endDate: "2025-06-30" # omit for a current position
volunteer: true # optional, shows a "Volunteer" badge
---

- What I did there
```

Experiences are sorted automatically: current positions first, then by most recent end date. Durations of current positions are recomputed in the browser, so they stay accurate between deployments.

### Profile

`profile.json` also accepts optional recruiter-facing fields, shown in the hero only when set:

```json
{
  "location": "Paris, France",
  "availability": "Open to new opportunities",
  "resume": "/resume.pdf"
}
```

For `resume`, drop the PDF in `public/` and reference it from the site root.

### Skill

Skills are shown in the order they appear in `skills.json`. Icons use [Iconify](https://icon-sets.iconify.design) names from the `simple-icons`, `lucide`, `hugeicons` and `mdi` sets.

```json
{
  "id": "astro",
  "label": "Astro",
  "icon": "simple-icons:astro",
  "description": "Building fast content sites with Astro."
}
```

## Deployment

Deployed on Cloudflare as static assets (`wrangler.jsonc`, no Worker script). Cache headers for hashed assets live in `public/_headers`.

- Workers Builds: build command `pnpm build`, deploy command `npx wrangler deploy`, root directory `/`. Set the build variable `PNPM_VERSION=11.22.0` to match `packageManager` in `package.json`; the workspace's `allowBuilds` configuration requires pnpm 11. The default Cloudflare build environment failed during dependency installation with `packages field missing or empty`.
- Pages: build command `pnpm build`, output directory `dist`; use the same `PNPM_VERSION` build variable.
- Manual: `pnpm run deploy` (builds, then runs `wrangler deploy`).

## Migrating from Directus

`scripts/migrate-from-directus.mjs` is the one-shot script that produced the current content from the old Directus backend. Re-running it overwrites the generated files:

```bash
pnpm migrate:directus                      # reads through the old site's /api proxy
DIRECTUS_TOKEN=xxx pnpm migrate:directus   # reads Directus directly
```
