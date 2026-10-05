#!/usr/bin/env node
// One-shot migration: pulls every collection from the old Directus backend and
// writes it as local content (Markdown/YAML + images) for the Astro site.
//
// Usage:
//   pnpm migrate:directus                     # reads through the live site's /api proxy
//   DIRECTUS_TOKEN=xxx pnpm migrate:directus  # reads Directus directly
//
// Existing generated files are overwritten.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIRECTUS_URL = process.env.DIRECTUS_URL ?? "https://admin.rchrdkvcs.dev";
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN ?? "";
const SITE_URL = process.env.SITE_URL ?? "https://rchrdkvcs.dev";

const paths = {
  projects: join(ROOT, "src/content/projects"),
  projectImages: join(ROOT, "src/content/projects/images"),
  experiences: join(ROOT, "src/content/experiences"),
  logos: join(ROOT, "src/content/experiences/logos"),
  skills: join(ROOT, "src/content/skills.json"),
  profile: join(ROOT, "src/content/profile.json"),
  assets: join(ROOT, "src/assets"),
};

const EXTENSIONS = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
  "image/avif": "avif",
};

async function fetchCollection(name, query = "") {
  if (DIRECTUS_TOKEN) {
    const res = await fetch(`${DIRECTUS_URL}/items/${name}?limit=-1${query}`, {
      headers: { Authorization: `Bearer ${DIRECTUS_TOKEN}` },
    });
    if (!res.ok) throw new Error(`Directus ${name}: ${res.status}`);
    return (await res.json()).data;
  }
  const res = await fetch(`${SITE_URL}/api/${name}`);
  if (!res.ok) throw new Error(`${SITE_URL}/api/${name}: ${res.status}`);
  return res.json();
}

async function downloadAsset(id, destDir, baseName) {
  const headers = DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {};
  const res = await fetch(`${DIRECTUS_URL}/assets/${id}`, { headers });
  if (!res.ok) throw new Error(`asset ${id}: ${res.status}`);
  const type = (res.headers.get("content-type") ?? "").split(";")[0];
  const ext = EXTENSIONS[type] ?? "bin";
  const fileName = `${baseName}.${ext}`;
  await mkdir(destDir, { recursive: true });
  await writeFile(join(destDir, fileName), Buffer.from(await res.arrayBuffer()));
  return fileName;
}

const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const yamlValue = (v) => {
  if (v === null || v === undefined) return "null";
  if (Array.isArray(v)) return `[${v.map(yamlValue).join(", ")}]`;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  return JSON.stringify(v);
};

// undefined values are dropped by JSON.stringify.
const writeJson = (path, data) => writeFile(path, `${JSON.stringify(data, null, 2)}\n`);

const frontmatter = (data) =>
  `---\n${Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${k}: ${yamlValue(v)}`)
    .join("\n")}\n---\n`;

const withBody = (fm, body) => (body?.trim() ? `${fm}\n${body.trim()}\n` : fm);

// Replaces Directus asset URLs in Markdown with local, Astro-optimised images.
async function localiseImages(markdown, slug) {
  const re = new RegExp(
    `${DIRECTUS_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/assets/([0-9a-f-]{36})[^\\s)"]*`,
    "g",
  );
  const ids = [...new Set([...markdown.matchAll(re)].map((m) => m[1]))];
  let out = markdown;
  for (const [i, id] of ids.entries()) {
    const file = await downloadAsset(id, paths.projectImages, `${slug}-${i + 1}`);
    out = out.replace(
      new RegExp(
        `${DIRECTUS_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/assets/${id}[^\\s)"]*`,
        "g",
      ),
      `./images/${file}`,
    );
  }
  return out;
}

async function migrateProfile() {
  const p = await fetchCollection("profile");
  let avatar;
  if (p.profile_picture) {
    avatar = await downloadAsset(p.profile_picture, paths.assets, "avatar");
  }
  const profile = {
    name: p.name,
    bio: p.bio,
    email: p.email,
    avatar: avatar ? `../assets/${avatar}` : undefined,
    github: p.github_url ?? undefined,
    twitter: p.twitter_url ?? undefined,
    linkedin: p.linkedin_url ?? undefined,
  };
  await writeJson(paths.profile, profile);
  console.log("profile ✓");
}

async function migrateSkills() {
  const skills = await fetchCollection("skills");
  await writeJson(
    paths.skills,
    skills.map((s) => ({
      id: slugify(s.label),
      label: s.label,
      icon: s.icon,
      description: s.description,
      link: s.link ?? undefined,
    })),
  );
  console.log(`skills ✓ (${skills.length})`);
}

async function migrateProjects() {
  const projects = await fetchCollection("projects", "&sort=placement,-id");
  await mkdir(paths.projects, { recursive: true });
  for (const [i, p] of projects.entries()) {
    const body = await localiseImages(p.content ?? "", p.slug);
    const fm = frontmatter({
      name: p.name,
      description: p.description,
      tags: p.tags ?? [],
      github: p.gh_url,
      demo: p.demo_url,
      order: i + 1,
    });
    await writeFile(join(paths.projects, `${p.slug}.md`), withBody(fm, body));
  }
  console.log(`projects ✓ (${projects.length})`);
}

async function migrateExperiences() {
  const experiences = await fetchCollection("experiences", "&sort=-end_date,-start_date");
  await mkdir(paths.experiences, { recursive: true });
  for (const e of experiences) {
    const slug = slugify(e.company);
    const logo = e.company_logo ? await downloadAsset(e.company_logo, paths.logos, slug) : null;
    const fm = frontmatter({
      company: e.company,
      role: e.post,
      logo: logo ? `./logos/${logo}` : null,
      startDate: e.start_date,
      endDate: e.end_date,
    });
    await writeFile(join(paths.experiences, `${slug}.md`), withBody(fm, e.content));
  }
  console.log(`experiences ✓ (${experiences.length})`);
}

console.log(`Source: ${DIRECTUS_TOKEN ? DIRECTUS_URL : `${SITE_URL}/api`}`);
await mkdir(join(ROOT, "src/content"), { recursive: true });
await migrateProfile();
await migrateSkills();
await migrateProjects();
await migrateExperiences();
