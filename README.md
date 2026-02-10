# Jay Westgate Author Site

Modern author platform built with Next.js and Tailwind CSS.

## Site sections

- Home page with upcoming book callout, latest blog excerpt, and newsletter signup
- Bibliography page (`/books`)
- Markdown-powered blog (`/blog` and `/blog/[slug]`) using static generation
- About page (`/about`)

## Local development

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Blog content format

Blog posts are stored in `blog/*.md` with frontmatter:

```md
---
title: "Post title"
date: "YYYY-MM-DD"
excerpt: "One sentence teaser for homepage and listing."
---
```

Use `blog-post-template.md` as your starting point.

## New post checklist

- Copy `blog-post-template.md` into `blog/your-post-slug.md`
- Update frontmatter: `title`, `date` (`YYYY-MM-DD`), and `excerpt`
- Write the post content in markdown with headings and short sections
- Run `npm test`
- Run `npm run lint`
- Start dev server with `npm run dev` and preview:
  - Home excerpt block
  - Blog index card
  - Individual blog post page
