# Design direction — NewBuild

Status: implemented (Meridian redesign, Hallmark v2.0.0)  
Theme: Meridian · genre: editorial-minimal · axes: light / geometric-serif / cool  
Shape: Photographic + line art · hero: white editorial with line-art horizon · nav: flat sticky bar · footer: index columns

This document is the locked visual/system spec for the current build. Replace placeholder content and imagery without reopening design decisions.

## 1. Idea

**Editorial property monograph with proof.** White paper, one green accent, a light serif display face, hand-drawn line art, and architectural photography. The site sells trust through clarity: verified facts, visible timelines, calm structure, and direct calls to action.

Rules:
1. **One accent.** Green `--color-accent` is used for exactly four things: the active nav item, the hairline under every CTA, the large statistic numerals, and the illustration accent. Nowhere else — no green buttons, no green panels.
2. **No chrome.** No shadows, no rounded surfaces, no filled buttons, no card borders. Depth comes from white space and the hard edges between light and dark bands.
3. **Photography carries atmosphere.** Real photography in framed slots (`[data-slot]`), never decorative wallpaper behind body copy. The hero is the exception — it is white, with line art.
4. **Content is verifiable.** Numbers, RERA, approvals, names, and photography must be client-supplied before launch; placeholders remain marked.

## 2. Hallmark / floor

- Hallmark stamp and critique at top of `src/styles/global.css`; scaffolded `tokens.css` + `base.css` imported first.
- All colours/fonts/radii/rules/motion go through tokens (`:root` in `tokens.css`).
- No `transition: all`, no layout-property animation; motion uses `transform`/`opacity` and is disabled/reduced under `prefers-reduced-motion`.
- Content visible by default; reveal states scoped under `.js` (added inline in `BaseLayout.astro`).
- `overflow-x: clip` on `html, body`; no horizontal overflow hacks.
- Interactive elements have `:hover`/`:active`/`:focus-visible`; hero copy fits the first viewport.

## 3. Tokens

Defined in `src/styles/tokens.css` (theme) and `src/styles/global.css` (components).

### Colour
| Token | Value | Use |
| --- | --- | --- |
| `--color-paper` | `#ffffff` | Page background |
| `--color-paper-2` | `#f7f7f5` | Alternate section tint |
| `--color-paper-3` | `#efeeea` | Image placeholders / depth |
| `--color-plate` | `#ffffff` | Cards / surfaces |
| `--color-ink` | `#1a1c1d` | Headings, dark bands |
| `--color-ink-2` | `#333333` | Default text, nav links |
| `--color-body` | `#48494a` | Paragraph copy |
| `--color-muted` | `#707070` | CTA text, meta |
| `--color-muted-2` | `#48494a` | Hairline rules, tertiary |
| `--color-rule` | `#e7e7e4` | Borders, form fields |
| `--color-accent` | `#2cb690` | Green — the single accent |
| `--color-accent-deep` | `#1f8a70` | Accent text, hover, focus |
| `--color-accent-wash` | `#eef8f4` | Soft green background |
| `--color-focus` | `#1f8a70` | Focus ring |
| `--color-on-dark` | `#ffffff` | Foreground on ink bands |
| `--color-on-dark-muted` | `#b9bdbc` | Secondary text on ink bands |

Three greys are intentional: `#333` default, `#48494a` body copy, `#707070` CTA/meta.

### Type
- **Display:** `Larken` 300 (`--font-display`), tracking `--tracking-display: -0.01em`
- **Body:** `Atlas Grotesk` 400/500 (`--font-body`)
- **Outlier/meta:** `Atlas Grotesk` 500 (`--font-outlier`) for small labels/eyebrows/meta

Scale (tokens): `--text-xs..--text-3xl`, `--text-display` (`clamp(2.375rem, 5.4vw, 4rem)`), `--text-section` (`clamp(1.875rem, 3.6vw, 3rem)`), `--text-title`, `--text-stat` (`clamp(2.75rem, 5vw, 4.5rem)`).
Hero h1 `4rem` / `1.1`; section titles `3rem` / `1.2`; row titles `1.5rem` / `1.4`; body `1rem` / `1.6`.

Fonts are self-hosted from `src/assets/fonts/` and declared with `@font-face` in `base.css` (`Larken-Light.ttf` 300, `AtlasGrotesk-Regular.otf` 400, `AtlasGrotesk-Medium.otf` 500). `BaseLayout.astro` preloads the display and body files.

### Space, layout, shape
- Container: `--container: 1280px`, gutter `40px` desktop → `24px` → `20px` responsive
- Section rhythm: `--section-gap-s: 96px`, `--section-gap: 128px`, `--section-gap-l: 160px`
- Gaps/columns: `--gap-columns: 32px`
- Radius: `0` everywhere. Shadows: none. Rules: `--rule-hair: 1px`
- Motion tokens: `--ease-out/in-out/quart`, `--dur-micro/short/long`

## 4. Global components

### Header (`BaseLayout.astro`, `.site-header`)
- Sticky, flat white bar. A 1px `--color-rule` hairline appears on scroll (`.is-stuck`)
- Left: architectural line-art mark (`/images/logo-mark.svg`) + `NewBuild` wordmark (Larken, letterspaced) + `DEVELOPERS` subline
- Right: nav links 16px `--color-ink-2`; active link green + medium weight. No header CTA
- Mobile: right-anchored white panel with a blur/dim scrim, toggle animates to X, closes on link/Escape

### Hero (home)
- White editorial hero, `min-height: 95vh`, `padding-block: 12rem`, content top-aligned in the container
- h1 in Larken 300 at `4rem` (max-width `64rem`), lead at `max-width: 32rem`, CTA is the hairline link
- Three line-art balloons float in `.hero__art` and drift horizontally with the pointer (`.hero__balloon--a/b/c`)
- A 1440px-wide line-art mountain horizon bleeds off the bottom (`.hero__ground`)

### Page hero (inner pages)
- White, `padding-block: 12rem 8rem`, eyebrow + h1 (`max-width: 52rem`) + lead
- A line-art tree row sits at the right edge, hidden below `48rem`

### Rows — the alternating project pattern
- `.row`: `grid-template-columns: 1fr 0.5fr`, 64px column gap, vertically centred. Media in column 1, body in column 2 (explicit `grid-column`, so DOM order is free)
- `.row--flip`: `0.5fr 1fr`, media right / body left — the image always faces outward
- `.row--body-wide`: `0.5fr 1fr`, narrow media left / wide body right
- Image aspect `1.686 / 1`, `object-fit: cover`, no radius, no border, no hover effect
- Row body: title (Larken), location (12px + 18px pin icon), body copy at `max-width: 20em`, hairline CTA
- Mobile: single column, image always first, `order` used to enforce it

### The hairline CTA (`.link`)
The signature interaction. Grey text, 1px green bottom border, `12px` of air above the rule, `inline-block` so the rule is exactly text-width.

```css
.link { display: inline-block; color: var(--color-muted); border-bottom: 1px solid var(--color-accent); padding: 0.75rem 0; }
```

Variants: `.link--light` (on ink bands), `.link--ink` (ink text).

### Bands
- `.band--dark`: flat `--color-ink`, white type. No rounding, no texture, no shadow
- `.band__grid`: `1fr 1fr` with `8.6rem` gap; line-art illustration left, copy right (`max-width: 32rem`)
- `.band__art` maxes at 440px

### Banner and closer
- `.banner`: full-bleed photo, `min-height: 423px`, `padding-block: 154px`, left-to-right black gradient `rgb(26 28 29 / 0.85) 45% → transparent`; copy `max-width: 28rem` in Larken white
- `.closer`: full-bleed photo with a flat dark overlay, centred copy `max-width: 64rem`, title `4rem` white

### Statistics
- `.stats__grid`: `1fr 1fr` with a 16px gap; left is a title + lead, right is a 3-column stat grid
- `.stats__value`: Larken 300 at `--text-stat` in `--color-accent-deep`; caption in Atlas Grotesk beneath. No vertical hairline
- On phones the stat list stays two-up — a single column made the section twice as tall as the reference

### Hero statistics (`about.astro`, `.hero-stats`)
- Three-up strip under the About hero lead: green Larken numeral, small muted caption, 1px rule above
- Mirrors the reference's "700+ / 5000+ / 15" block

### Project slider
- `.slider__track`: horizontal scroll, `scroll-snap-type: x mandatory`, cards at `clamp(300px, 31%, 400px)` and `1.689 / 1`, 32px gap
- Cards are deliberately wider than a quarter of the container so the rail actually overflows and the arrows have something to do
- Card title is block-level Larken 300 `2rem` white, location row with a white pin icon
- Controls below: green dot pagination left, two 48px green circular arrows right (`border-radius: 50%`)
- Dots are built in JS from the computed page count, so their number always equals the number of reachable positions
- The track is focusable and responds to Left/Right/Home/End
- The only hover transition on the site is the arrow background

### Footer
- 1px `--color-muted-2` rule, then a `space-between` row: stacked brand lockup + social icons + legal links left, four nav links right. No description paragraph — the reference footer is compact
- The brand lockup is vertical: 56px mark, then the name in Larken at 13px / `0.22em`, then "Developers" at 8.5px / `0.3em`, all centred
- Social icons are 44px targets. Until real profiles exist they render `aria-disabled`, `pointer-events: none`, `tabindex="-1"` rather than jumping to the top of the page
- Bottom row: copyright left, disclaimer right, separated by a `--color-rule` hairline

### Forms
- Flat square fields, 1px `--color-rule` border, green border on focus, no radius, no shadow
- `.form--dark` variant for the contact panel: transparent fields, white label, 1px `rgb(255 255 255 / 0.3)` underline, green underline on focus
- Every form has a real `<button type="submit">` styled as the hairline CTA (`.link--button`)
- Result feedback goes to an inline `role="status"` region (`.form__status`), never `window.alert()`

## 5. Sections

1. **Hero** (white, line art) — headline, lead, hairline CTA, balloons, mountain horizon
2. **Selected developments** (white) — section title + three alternating `.row` blocks
3. **Values** (ink band) — green line-art tower left, "How we work with buyers" right, hairline CTA
4. **Numbers** (white) — "Building up" + six green Larken statistics, two-up on phones
5. **Banner** (full-bleed photo) — one Larken sentence over the image
6. **Other projects** (ink band) — green section title + project slider with arrows and dots
7. **Closer** (full-bleed photo) — centred title, lead, hairline CTA
8. **Footer** (white) — index columns

## 6. Pages

- **Home (`index.astro`)**: hero, selected developments, values band, numbers, banner, other-projects slider, closer
- **About (`about.astro`)**: page hero with stat strip, one-team row, values band, milestones timeline, credentials row, closer
- **Projects (`projects.astro`)**: page hero, current launch row, delivered-by-the-promoters band (3 cards), closer
- **Project detail (`projects/[slug].astro`)**: page hero, at-a-glance row, gallery, closer
- **Contact (`contact.astro`)**: full-width ink panel — green 64px heading, enquiry form left, line-art tower right — then a corporate-office block. On small screens the art moves above the form
- **Privacy (`privacy.astro`)**: terms, privacy, RERA disclaimer and contact details
- **404 (`404.astro`)**: page hero with recovery links

All pages share global tokens/components, the white editorial page hero, and reveal animations.

## 7. Content & copy rules

- Benefit-driven, clear CTAs; no invented metrics, testimonials, awards, or RERA numbers.
- Green **text** uses `--color-accent-deep` `#1b7f66` (4.9:1 on white). The mint `#2cb690` is decorative only — rules, fills, illustration, and text on ink where it measures 6.6:1.
- One real selling project only; promoters' prior work shown with attribution and placeholder labelling until verified.
- Keep placeholder notes visible until verified content/imagery replaces them.
- **Before launch:** replace wordmark/logo, all placeholder project facts/RERA/names/photos/copy, verify track record/credentials, remove mockup-only `noindex` behaviour, confirm font licensing for production use, wire contact form (email/WhatsApp), set production `site`/`base`, add legal/RERA pages.

## 8. Key files

- `src/styles/tokens.css` — theme tokens
- `src/styles/base.css` — reset, `@font-face`, reduced-motion
- `src/styles/global.css` — Hallmark stamp, components, motion, responsive
- `src/layouts/BaseLayout.astro` — head/fonts, flat header/nav, footer, JS (`.js`, nav, scrim, parallax, slider, reveals)
- `src/pages/index.astro`, `about.astro`, `projects.astro`, `projects/[slug].astro`, `contact.astro`, `404.astro`
- `src/data/projects.ts`, `src/data/site.ts` — content sources
- `public/images/` — line-art illustrations, logo mark, pin, hero photography
- `comparison/` — side-by-side screenshots against the reference, with a README explaining them
- `.hallmark/` — preflight/log (local build artifacts)
