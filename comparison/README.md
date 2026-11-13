# Side-by-side comparisons

Screenshots of the reference site ([pragnagroup.co.in](https://www.pragnagroup.co.in/)) next to this
build, captured on the same machine, at the same viewport, on the same day.

**Reference is always on the left. This build is always on the right.**

| File | Page | Viewport |
| --- | --- | --- |
| `side-home.webp` | Home | 1440 × 900, full page |
| `side-about.webp` | About | 1440 × 900, full page |
| `side-projects.webp` | Projects | 1440 × 900, full page |
| `side-contact.webp` | Contact | 1440 × 900, full page |
| `side-m-home.webp` | Home | 390 × 844, full page |
| `side-m-about.webp` | About | 390 × 844, full page |
| `side-m-projects.webp` | Projects | 390 × 844, full page |
| `side-m-contact.webp` | Contact | 390 × 844, full page |

## How they were captured

Headless Chromium renders each page at the target viewport, waits for `document.fonts.ready`, scrolls
the full height once so every scroll-triggered reveal fires, returns to the top, and takes a full-page
screenshot. The two images are then cut into horizontal bands and laid side by side, scaled so the full
page width fits each column. The green rule between columns marks the band boundary.

## What matches

- Container geometry: 1280px content inside a 1360px shell with a 40px gutter, so content begins at
  x=80 on a 1440 viewport — identical to the reference
- Type scale: 64px display headings, 48px section headings, 32px small headings, 24px row titles,
  16px body, 72px statistics, all in Larken 300 over Atlas Grotesk
- The hairline CTA: grey label with a 1px green rule beneath, no fill, no radius, no shadow
- Band rhythm: 96 / 128 / 160px section spacing, dark ink bands at the same points in the page
- Component anatomy: alternating project rows, ink values band, green statistics block, photo banner,
  dark slider band, full-bleed closer, compact footer with a stacked logo lockup
- Mobile: the values illustration leads, statistics stay two-up, the nav becomes a slide-in panel

## What deliberately differs

- **Copy and brand.** This is NewBuild, not Pragna. Headline lengths differ, so some blocks wrap to a
  different number of lines and total page heights differ by roughly 2–6%.
- **Project count.** The reference has a dozen projects; this build has four, so its slider and grids
  are shorter. Card widths were widened so the rail still pages rather than sitting static.
- **Photography.** Project and banner images are placeholder photography, not the reference's shoots.
- **Accessibility corrections.** The reference's accent green `#2cb690` measures 2.6:1 on white, which
  fails WCAG AA for text. Green *text* here uses `#1b7f66` (4.9:1) while the mint stays for rules,
  fills and illustration. The reference's contact page also overflows horizontally at 390px; this
  build does not.
