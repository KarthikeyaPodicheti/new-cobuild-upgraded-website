# NewBuild — website mockup

A static design mockup for a real-estate developer's website, built with
[Astro](https://astro.build). It is deployed to GitHub Pages with placeholder
content, a design-preview banner and `noindex`.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## What this is

- 5 pages + 404: Home, About, Projects, Project detail, Contact.
- Placeholder copy, imagery and a `NewBuild` wordmark.
- A single flagship project plus a promoters' track-record section.
- `noindex` and a visible "Design preview" banner.
- Deployed to GitHub Pages from `.github/workflows/deploy.yml`.

## Structure

```
src/
├── components/     Header, footer, cards, CTA band, hero artwork, preview banner
├── data/           Site details and project records (edit content here)
├── layouts/        Base layout with SEO metadata
├── lib/            Base-path helper for GitHub Pages
├── pages/          One file per route
└── styles/         Global design tokens and component styles
public/
└── images/         Placeholder SVG artwork (replace with real photography)
```

## Before the production launch (MilesWeb)

- Replace placeholder content in `src/data/site.ts` and `src/data/projects.ts`.
- Swap the wordmark for the real logo.
- Remove the preview banner and the `noindex` meta from
  `src/layouts/BaseLayout.astro`.
- Change `site` and `base` in `astro.config.mjs` to
  `https://newbuild.co.in` and `/`.
- Connect the enquiry form to email and WhatsApp.
- Add privacy, terms and RERA disclaimer pages.
- Back up the default WordPress install, then upload `dist/` to `public_html`.

## Deploy (mockup)

GitHub Pages builds and deploys on every push to `main`. The site is served from
`https://karthikeyapodicheti.github.io/newbuild-mockup/`.
