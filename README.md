# Portfolio — Setup Guide

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm run dev
# → opens at http://localhost:4321

# 3. Build for production
npm run build
```

---

## Personalizing Your Site

### 1. Your name and info
Search for `YN` and `Your Name` across the project and replace with your actual name/initials.

Update your email in:
- `src/layouts/Base.astro` (nav CTA link)
- `src/pages/about.astro` (contact section)

Update your LinkedIn in:
- `src/pages/about.astro`

### 2. Your domain
In `astro.config.mjs`, replace `https://yourname.com` with your actual domain.

### 3. Adding a case study
Create a new `.md` file in `src/content/work/`:

```markdown
---
title: "Project Title"
company: "Company Name"
role: "Your Role"
year: "2024"
cover: "/images/work/your-cover.jpg"   ← put image in public/images/work/
tags: ["Tag One", "Tag Two"]
summary: "One sentence describing the project."
order: 4          ← controls sort order on homepage
featured: false   ← set true to span full width
---

## Your case study content here

Write in Markdown. Images, headings, quotes all work.
```

### 4. Adding images
Drop images into `public/images/work/` and reference them as `/images/work/filename.jpg`.

### 5. Your bio
Edit the `<p>` tags in `src/pages/about.astro` under the `about-text` div.

### 6. Your experience
Edit the array in `src/pages/about.astro` in the experience section.

---

## Deploying to Netlify

1. Push this project to a GitHub repo
2. Go to [netlify.com](https://netlify.com) → New site → Import from Git
3. Select your repo — Netlify auto-detects the build settings
4. Add your custom domain in Site Settings → Domain Management

That's it. Every `git push` auto-deploys.

---

## File Structure

```
src/
  content/
    config.ts          ← CMS schema (edit field types here)
    work/              ← one .md file per case study
      c2-dedrone.md
      raven-dedrone.md
      amazon.md
  layouts/
    Base.astro         ← nav, footer, global head
  pages/
    index.astro        ← homepage
    about.astro        ← about page
    work/
      [slug].astro     ← auto-generated case study pages
  styles/
    global.css         ← design tokens and base styles
public/
  images/
    work/              ← case study cover images go here
```
# portfolio
