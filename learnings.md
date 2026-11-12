# Learnings

Documentation of challenges encountered and how they were fixed during development of this site.

## 1. Puppeteer fails to launch Chrome on Windows (error code 3236495362)

**Problem:** `puppeteer.launch()` threw `Error: Failed to launch the browser process: Code: 3236495362` (spawn UNKNOWN) when trying to take screenshots of the site for typography verification.

**Root cause:** Windows sandbox permissions and Chrome extension policy conflicts. Puppeteer passes `--disable-extensions` by default and the bundled Chromium sandbox couldn't access the executable.

**Fix:** Used the system-installed Chrome binary with sandbox-disabling flags:
```js
const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  enableExtensions: true,
});
```

**Files affected:** `scripts/screenshot-verify.cjs`

---

## 2. PowerShell doesn't support `&&` or `||` operators

**Problem:** Running `cd dir && node script.js` or `cmd1 || cmd2` in PowerShell 5.1 throws `ParserError: The token '&&' is not a valid statement separator`.

**Fix:** Run commands separately, or use `; if ($?) { cmd2 }` for conditional chaining.

---

## 3. Node.js treats `.js` files as ES modules (package.json has `"type": "module"`)

**Problem:** Running `node scripts/inspect-hero.js` threw `ReferenceError: require is not defined in ES module scope`.

**Fix:** Rename the file to `.cjs` extension to force CommonJS module resolution.

---

## 4. CTA button font-size not applying (CSS specificity issue)

**Problem:** `.hero__cta { font-size: 15px; font-weight: 600; }` wasn't taking effect because `.btn` (single class, appears later in CSS) had equal specificity and overrode it.

**Fix:** Increase specificity by scoping to `.hero .hero__cta`:
```css
.hero .hero__cta {
  font-size: 15px;
  font-weight: 600;
}
```

---

## 5. Desktop H1 too large; wanted mobile H1 increased while keeping desktop as before

**Problem:** Hero H1 was `clamp(5rem, 9vw + 1rem, 9rem)` on desktop — oversized. Mobile variant was `clamp(3.5rem, 9vw, 5rem)` — too small.

**Fix:** Applied separate values:
- Desktop: `clamp(42px, 6vw, 76px)`, font-weight 600, line-height 1.05, letter-spacing -1.5px, max-width 850px
- Mobile (60rem): `clamp(64px, 10vw, 96px)` — larger than desktop on bigger mobile screens
- Mobile (40rem): `clamp(56px, 9vw, 88px)`
- Landscape mobile: `clamp(52px, 8vw, 76px)`

---

## 6. Applied premium color palette (Option 1: Deep Navy + Champagne + Slate)

**Problem:** User disliked the existing color combination and wanted a premium real-estate style.

**Fix:** Replaced `--color-*` variables in `src/styles/tokens.css` with:
- `--color-paper`: `oklch(96% 0.005 85)` — champagne off-white background
- `--color-ink`: `oklch(20% 0.01 260)` — deep navy text
- `--color-muted`: `oklch(50% 0.01 240)` — slate gray
- `--color-accent`: `oklch(62% 0.12 75)` — muted gold

---

## 7. Added rounded corners to all boxes across the site

**Problem:** All cards, media boxes, and form cards had square corners (`--radius-card: 0`), looking harsh against the premium design.

**Fix:** Changed `--radius-card` to `16px` and `--radius-pill` to `999px` in `tokens.css`, then added `border-radius: var(--radius-card)` to:
- `.what-we-do__item`
- `.offer__media [data-slot]`
- `.case-study__media [data-slot]`
- `.case-study__gallery [data-slot]`
- `.where-we-are__map [data-slot]`
- `.form-card`

---

## 8. Background images loading slowly

**Problem:** Hero image and Wikimedia Commons images loaded slowly, hurting LCP.

**Fix:** Multiple optimizations:
- Added `rel="preconnect"` to `https://upload.wikimedia.org` in `BaseLayout.astro`
- Added `rel="preload"` for hero image with `fetchpriority="high"` in `BaseLayout.astro`
- Added `fetchpriority="high"` + `decoding="async"` + `sizes="100vw"` to hero ``
- Added `decoding="async"` to all 6 lazy-loaded Wikimedia images

---

## 9. Numbers section left-aligned on mobile; wanted centered

**Problem:** On mobile, the `.numbers` section (168 Homes, 2.4 Acres, 2027 Handover, 3 Delivered by promoters) was left-aligned because `.numbers__figure` had `text-align: left` and `.numbers__items` used `grid-template-columns: repeat(3, 1fr)` which on narrow screens created a cramped left-aligned layout.

**Fix:** On mobile breakpoints (`max-width: 60rem` and `max-width: 40rem`):
- `.numbers__figure` changed to `text-align: center`
- `.numbers__items` changed to `grid-template-columns: 1fr` with `justify-items: center`
- `.numbers__item-value` and `.numbers__item-label` changed to `text-align: center`
- `.offer__facts` separated out to keep its own grid behavior

Desktop layout unchanged (2-column grid with left-aligned figure in left column, 3-item grid in right column).

**Files affected:** `src/styles/global.css`

---

## How to document future fixes

When you encounter a challenge and fix it, add a new section to this file following the format above:
1. **Challenge name** — brief title
2. **Problem** — what was wrong
3. **Root cause** — why it happened
4. **Fix** — what you changed (include code snippets)
5. **Files affected** — which files you modified