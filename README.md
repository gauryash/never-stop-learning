# Never Stop Learning

My personal space for learning new things and taking notes.

## What's here

- Notes on topics I'm exploring
- Learning modules with notes (MDX files in `content/docs/`)
- Sidebar navigation via Fumadocs

## Tech

- Next.js 14 (App Router) + React 18 + TypeScript
- Fumadocs (MDX loader, UI, search)
- Tailwind CSS 3
- Static export to GitHub Pages

## Adding notes

Create a new `.mdx` file in `content/docs/`:

```mdx
---
title: Learning Something New
description: What I learned
---

## Notes here

- Point 1
- Point 2
```

Then update `content/docs/meta.json` to include the new page in the sidebar.

## Run locally

```bash
npm install
npm run dev
```
