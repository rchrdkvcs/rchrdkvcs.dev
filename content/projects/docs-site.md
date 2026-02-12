---
title: Docs Site
description: A documentation website for a GTA 5 RolePlay server, built with AdonisJS 6 and Inertia (React), featuring markdown-based content management.
date: "2024-09-10"
tags: ["AdonisJS", "React", "Uno CSS", "Markdown"]
repo: "https://github.com/rchrdkvcs/docs-site"
link: ""
featured: true
---

## Overview

**Control Docs** is a comprehensive documentation platform built for a GTA 5 RolePlay game server community. The platform serves as a central knowledge base for players, providing guides, rules, and server-specific documentation rendered from Markdown files.

## The Problem

Managing documentation for a gaming community can be challenging. Content needs to be easily editable by non-technical staff members, while maintaining a professional and consistent presentation. Traditional wikis often feel outdated and lack modern UX patterns.

## The Solution

I built a custom documentation website that combines the developer-friendly experience of Markdown with a modern, responsive UI built with React and Inertia.js.

## Technical Stack

| Technology | Purpose |
|-----------|---------|
| AdonisJS 6 | Backend framework with Inertia adapter |
| React | Frontend UI rendering via Inertia.js |
| Uno CSS | Atomic CSS framework for styling |
| Markdown | Content authoring format |

## Key Features

### Markdown-Based Content
All documentation is written in Markdown, making it easy for team members to contribute without needing HTML or coding knowledge. The system supports:
- Standard Markdown syntax
- Code blocks with syntax highlighting
- Tables and custom containers
- Image embedding

### Search Functionality
A built-in search engine indexes all documentation pages, providing instant search results as users type. The search covers titles, headings, and body content.

### Sidebar Navigation
An auto-generated sidebar navigation based on the file structure makes it intuitive for users to browse through different sections of the documentation.

### Responsive Design
The documentation site is fully responsive, ensuring a great reading experience on both desktop and mobile devices. The sidebar collapses into a hamburger menu on smaller screens.

## Architecture

The project follows a monolithic architecture using AdonisJS with Inertia.js for server-driven SPA behavior:

```
├── resources/
│   ├── views/          # Inertia React pages
│   ├── components/     # Reusable React components
│   └── css/           # Uno CSS styles
├── content/
│   ├── guides/        # Player guides in Markdown
│   ├── rules/         # Server rules
│   └── faq/           # Frequently asked questions
└── app/
    ├── controllers/   # AdonisJS controllers
    └── services/      # Markdown parsing services
```

## Lessons Learned

Working with Inertia.js alongside AdonisJS was an interesting experience. It provides the benefits of an SPA (smooth transitions, client-side state management) while keeping the simplicity of server-side routing. The combination proved to be highly productive for building content-heavy applications.
