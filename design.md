# Design direction — NewBuild

Status: implemented (Terrazzo redesign, Hallmark v2.0.0)  
Theme: Terrazzo · genre: modern-minimal · axes: light / geometric-sans / warm · terrazzo: off-white  
Shape: Photographic · hero: full-bleed background with left fade · nav: sticky glass banner · footer: index columns

This document is the locked visual/system spec for the current build. Replace placeholder content and imagery without reopening design decisions.

## 1. Idea

**Editorial property monograph with proof.** Warm off-white paper, one rust accent, strong geometric display type, and architectural photography. The site sells trust through clarity: verified facts, visible timelines, calm structure, and direct calls to action.

Rules:
1. **Photography carries atmosphere.** Hero and project imagery are real/placeholder photos in framed slots (`[data-slot]`), never decorative wallpaper behind body copy.
2. **One accent.** Rust `--color-accent` is used for emphasis, CTAs/active states, key numbers, and highlights. No second accent.
3. **Air and structure.** Large section rhythm, consistent gutters/gaps, hard rules and offset shadows (Terrazzo material). Remove content before tightening spacing.
4. **Content is verifiable.** Numbers, RERA, approvals, names, and photography must be client-supplied before launch; placeholders remain marked.

## 2. Hallmark / floor

- Hallmark stamp and critique at top of `src/styles/global.css`; scaffolded `tokens.css` + `base.css` imported first.
- All colours/fonts/radii/shadows/rules go through tokens (`:root` in `tokens.css`, page tokens in `global.css`).
- No `transition: all`, no layout-property animation; motion uses `transform`/`opacity` and is disabled/reduced under `prefers-reduced-motion`.
- Content visible by default; reveal states scoped under `.js` (added inline in `BaseLayout.astro`).
- `overflow-x: clip` on `html, body`; no horizontal overflow hacks.
- Interactive elements have `:hover`/`:active`/`:focus-visible`; hero copy/CTAs visible above fold on desktop.

## 3. Tokens

Defined in `src/styles/tokens.css` (theme) and `src/styles/global.css` (page).

### Colour (oklch)
| Token | Value | Use |
| --- | --- | --- |
| `--color-paper` | `oklch(96% 0.009 82)` | Page background |
| `--color-paper-2` | `oklch(92% 0.012 82)` | Alternate sections/footer |
| `--color-paper-3` | `oklch(87.5% 0.014 80)` | Depth/shadows |
| `--color-plate` | `oklch(99.5% 0.003 82)` | Cards/surfaces |
| `--color-ink` | `oklch(16% 0.006 60)` | Primary text, dark bands/buttons |
| `--color-ink-2` | `oklch(27% 0.006 60)` | Secondary text/leads |
| `--color-muted` | `oklch(46% 0.01 60)` | Meta/labels/notes |
| `--color-rule` | `oklch(81% 0.012 80)` | Hairline rules/borders |
| `--color-accent` | `oklch(53% 0.15 38)` | Primary accent (rust) |
| `--color-accent-soft` | `oklch(91% 0.035 45)` | Soft accent backgrounds |
| `--color-accent-ink` | `oklch(99.5% 0.003 82)` | Text on accent |
| `--color-focus` | `oklch(50% 0.16 38)` | Focus ring |

No second accent. Dark band: `.numbers` uses `--color-ink` bg with paper/accent text.

### Type
- **Display:** `Larken` 300 (`--font-display`), tracking `--tracking-display: -0.01em`
- **Body:** `Atlas Grotesk` 400/500 (`--font-body`)
- **Outlier/meta:** `Atlas Grotesk` 500 (`--font-outlier`) for small labels/eyebrows/meta where used

Scale (tokens): `--text-xs..--text-3xl`, `--text-display`, `--text-display-s`, `--text-section`, `--text-title`, `--text-lead`.  
Hero h1 capped for fold fit: `clamp(2.25rem, 4vw + 0.5rem, 4rem)`; lead `--text-md`. Body/lead measures constrained (`max-width` on hero/sections). Tabular figures on numeric stats.

Fonts are self-hosted from `src/assets/fonts/` and declared with `@font-face` in `base.css` (`Larken-Light.ttf` 300, `AtlasGrotesk-Regular.otf` 400, `AtlasGrotesk-Medium.otf` 500). `BaseLayout.astro` preloads the display and body files.

### Space, layout, shape
- Container: `--container: 1440px`, gutter `64px` desktop → `24px`/`16px` responsive (`base.css`)
- Gaps/sections: `--gap-columns: 32px`, `--section-gap-s: 120px`, `--section-gap: 144px`, `--section-gap-l: 176px` (responsive reductions in `base.css`)
- Radius: `0` (square surfaces/cards/images/slots); **buttons/pills rounded** (`border-radius: 999px`) for `.btn`, `.nav__cta`, `.offer__cta`, `.close__contact a`, `.nav-toggle`
- Rules: `--rule-hair: 1px`, `--rule-bar: 2px`; bordered plates/cards
- Shadows (Terrazzo): `--shadow-card: 14px 14px 0 var(--color-paper-3)`, hover `--shadow-card-hover: 14px 14px 0 var(--color-ink)`
- Motion tokens: `--ease-out/in/in-out`, `--dur-micro/short/long`

## 4. Global components

### Header (`BaseLayout.astro`, `.site-header`)
- Sticky, glassmorphism: semi-transparent paper + `backdrop-filter: blur(12px)`, subtle bottom border
- Left: monogram mark + wordmark/tagline; Right: nav links (`Projects`, `About`, `Contact`) + mobile toggle (no header CTA)
- Mobile: collapsible nav panel, toggle animates to X, closes on link/Escape
- Active/current link in accent

### Hero (all pages)
- Full-bleed photographic background (`.hero__bg` img: Maison Hermès facade, Wikimedia Commons) — visible (no global blur/dimming), subtle slow drift animation
- Left-to-right paper fade overlay for text legibility: `linear-gradient(90deg, paper 92% → 70% → transparent 60%)`
- Content left-aligned in container: eyebrow, h1, lead, optional actions
- Hero text has soft glow `text-shadow` for readability over image; fits first viewport (`min-height: calc(100svh - 72px)`, reduced type/spacing)
- `prefers-reduced-motion`: hero entrance/drift disabled

### Sections (home)
1. **Offer / current launch** (`.offer`): header + link, 2-col grid (media slot + content), aligned meta grid, description, 3 facts, CTA, placeholder note
2. **Why buyers choose NewBuild** (`.what-we-do`, paper-2): left-aligned header, 4 principle cards (number/title/text), stagger reveal
3. **Where we are** (`.where-we-are`): map/visual slot + office/contact details
4. **Case study / track record** (`.case-study`, paper-2): header, main media + content/meta/description, 3-image gallery, placeholder note
5. **Numbers band** (`.numbers`, ink): featured figure + responsive stat grid
6. **Close CTA** (`.close`): centered headline/lead, primary actions
7. **Footer** (`.site-footer`): brand/description, 3 link columns, photo credits + legal line

### Imagery
- Slots: `[data-slot]` with `--slot-img`, object-fit cover, mild contrast (`base.css`), bordered/shadowed frames in sections
- Current placeholders: Wikimedia Commons architectural photos (credited in footer). Replace with client photography (4:3 project/gallery, 16:9 leads as used) keeping layout/alts real.

### Motion
- **Hero entrance:** staggered rise/fade (eyebrow → h1 → lead → actions), `.js`-scoped
- **Scroll reveals:** `[data-reveal]` and `[data-stagger]` via IntersectionObserver (`BaseLayout.astro`), translate/opacity transitions
- **Hover:** card lift, slot scale, number emphasis, button/link color transitions
- **Ambient:** slow hero background drift (`hero-drift`, 20s alternate)
- All animated states gated by `.js` and neutralized under `prefers-reduced-motion: reduce`; no autoplay media/carousels

## 5. Pages

- **Home (`index.astro`)**: hero, offer, principles, location, case study, numbers, close (conversion-focused copy)
- **About (`about.astro`)**: hero, story/brief, values grid, credentials, close CTA (placeholder history/people)
- **Projects (`projects.astro`)**: hero, current launch (data-driven), track record cards, close CTA
- **Project detail (`projects/[slug].astro`)**: hero, facts + description + media, gallery, close CTA
- **Contact (`contact.astro`)**: hero, contact details + enquiry form (mockup/not connected), close context
- **404 (`404.astro`)**: hero-style recovery with primary/secondary actions

All pages share global tokens/components, Terrazzo hero treatment, and reveal animations.

## 6. Content & copy rules

- Benefit-driven, clear CTAs; no invented metrics, testimonials, awards, or RERA numbers.
- One real selling project only; promoters’ prior work shown with attribution and placeholder labeling until verified.
- Keep placeholder notes visible until verified content/imagery replaces them.
- **Before launch:** replace wordmark/logo, all placeholder project facts/RERA/names/photos/copy, verify track record/credentials, remove mockup-only `noindex`/preview behaviors as applicable, confirm font licensing for production use, wire contact form (email/WhatsApp), set production `site/base`, add legal/RERA pages.

## 7. Key files

- `src/styles/tokens.css` — theme tokens
- `src/styles/base.css` — reset/base/slots/reduced-motion
- `src/styles/global.css` — Hallmark stamp, page tokens, components, animations, responsive
- `src/layouts/BaseLayout.astro` — head/fonts, glass header/nav, footer, JS (`.js`, nav, slots, reveals)
- `src/pages/index.astro`, `about.astro`, `projects.astro`, `projects/[slug].astro`, `contact.astro`, `404.astro`
- `src/data/projects.ts`, `src/data/site.ts` — content sources
- `.hallmark/` — preflight/log (local build artifacts)
