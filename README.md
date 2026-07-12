# Never Stop Learning

My personal space for learning new things and taking notes.

## What's here

- Notes on topics I'm exploring
- Learning modules with notes (markdown files in `src/content/learning/`)
- Simple sidebar UI to navigate between topics

## Tech

- Astro + React + TypeScript
- Tailwind CSS + shadcn/ui
- Markdown content via Astro collections

## Adding notes

Create a new `.md` file in `src/content/learning/`:

```markdown
---
title: Learning Something New
description: What I learned
icon: "📝"
---

## Notes here

- Point 1
- Point 2
```

It will automatically appear in the sidebar Notes section.

## Run locally

```bash
npm install
npm run dev
```
