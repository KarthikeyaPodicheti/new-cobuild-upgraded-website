# NewBuild — upgraded website

A premium, responsive design mockup for a real-estate developer's website, built with
[Astro](https://astro.build). Fully optimised for mobile, tablet, and desktop with
human-speak copy, sunset-villa hero imagery, and a styled contact form.

**Live site:** https://karthikeyapodicheti.github.io/new-cobuild-upgraded-website/

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## What this is

- 5 pages + 404: Home, About, Projects, Project detail, Contact.
- Hero section with sunset villa photography matching the inspiration design.
- Copy rewritten using human-speak principles — direct, concrete, no marketing fluff.
- Contact form with card layout, focus states, and mobile-friendly inputs.
- Responsive CSS: touch targets (44px+), safe-area insets, reduced-motion support.
- Single flagship project plus a promoters' track-record section.
- `noindex` and a visible "Design preview" banner.
- Deployed to GitHub Pages from `.github/workflows/deploy.yml`.

## Structure

```
src/
├── assets/fonts/   Self-hosted Larken + Atlas Grotesk font files
├── data/           Site details and project records (edit content here)
├── layouts/        Base layout with SEO metadata, header, footer and JS
├── lib/            Base-path helper for GitHub Pages
├── pages/          One file per route
└── styles/         Design tokens, base reset, and component styles
public/
├── favicon.svg
└── images/         Line-art illustrations, logo mark, pin, hero photography
```

## Design system

The visual system is documented in `design.md` — colour, type, spacing, the
component patterns and the motion rules. Read it before changing styles.

Key points:

- Fonts are self-hosted from `src/assets/fonts/` (Larken for display, Atlas
  Grotesk for body). No external font requests.
- The accent green `--color-accent` is used only for the active nav item, the
  hairline under CTAs, the large statistic numerals and illustration accents.
- CTAs are the `.link` class: grey text with a 1px green rule beneath it. There
  are no filled buttons, no shadows and no rounded surfaces.
- Dark sections are flat `--color-ink` bands. Headings inside them inherit
  `.band--dark` colour overrides — do not hard-code colours on `h1`–`h4`.

## Before the production launch (MilesWeb)

- Replace placeholder content in `src/data/site.ts` and `src/data/projects.ts`.
- Swap the wordmark (`public/images/logo-mark.svg` and the `.logo__name` text) for the real logo.
- Remove the `noindex` meta from `src/layouts/BaseLayout.astro`.
- Change `site` and `base` in `astro.config.mjs` to
  `https://newbuild.co.in` and `/`.
- Connect the enquiry form to email and WhatsApp.
- Add privacy, terms and RERA disclaimer pages.
- Back up the default WordPress install, then upload `dist/` to `public_html`.

## Deploy (mockup)

GitHub Pages builds and deploys on every push to `main`. The site is served from
`https://karthikeyapodicheti.github.io/new-cobuild-upgraded-website/`.
