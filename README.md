# New Co Build Infra Developers — website

A static marketing site for a real estate and infrastructure development
business. Built with [Astro](https://astro.build) and deployed as plain HTML.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Structure

```
src/
├── components/     Header, footer, cards, CTA band, hero artwork
├── data/           Site details and project records (edit content here)
├── layouts/        Base layout with SEO metadata
├── pages/          One file per route
└── styles/         Global design tokens and component styles
public/
└── images/         Placeholder SVG artwork (replace with real photography)
```

## What to replace before launch

- **Content:** `src/data/site.ts` (phone, email, address, social links) and
  `src/data/projects.ts` (projects, statuses, facts, images).
- **Branding:** logo mark in `src/components/SiteHeader.astro` and
  `src/components/SiteFooter.astro`; colours in `src/styles/global.css`.
- **Imagery:** swap `public/images/*.svg` for real photography. Keep the same
  filenames or update the paths in `src/data/projects.ts`.
- **Contact form:** the form is marked for Netlify Forms
  (`data-netlify="true"`). Connect a backend (Netlify, Formspree, or your own
  endpoint) and test a real submission.
- **Map:** replace the placeholder block in `src/pages/contact.astro` with a
  Google Maps or OpenStreetMap embed.
- **Legal:** add real RERA registration numbers and a privacy policy.
- **Domain:** update `site` in `astro.config.mjs`, plus the URLs in
  `public/robots.txt` and `public/sitemap.xml`, before deploying.
- **Open Graph image:** `public/images/og-cover.svg` works for previews, but most
  social platforms prefer a 1200×630 PNG or JPG. Export one before launch.

## Deploying

The build output is fully static. Any of these work:

- **Netlify:** connect the repo, build command `npm run build`, publish `dist`.
- **Vercel:** framework preset Astro; defaults are correct.
- **GitHub Pages / Cloudflare Pages / S3:** upload the contents of `dist/`.

## Toolchain note

Astro is pinned to **5.x**. Astro 7 pulls a native Markdown-binding binary
(`satteri`) that Windows Application Control blocks on this machine. This site
uses no Markdown, so 5.x is a clean fit. The sitemap is a hand-written static
file in `public/` for the same reason: fewer native dependencies.

## Draft status

Copy, project data, testimonials, leadership profiles and imagery are
placeholders. The site is structurally complete and builds cleanly; the
checklist above is what remains before it represents the business publicly.
