# Design direction — NewBuild

Status: implemented in the mockup (v1)
Reference: the Pragna Group homepage, used as a structural and tonal reference only.

This document fixes the visual system for the final build so that replacing
placeholder content does not reopen design decisions. It describes what the site
does and why; it is not a copy of the reference site.

## 1. The idea

**Editorial landscape.** The site should read like a well-made property
monograph, not a builder's brochure: a white page, one deep green accent, large
light serif headlines, and photography carrying the emotion. Structure and
paperwork — the things this developer actually sells — are expressed through
calm rhythm, visible facts and plain language rather than badges and gradients.

Three rules follow from that:

1. **Photography first.** Every project is introduced by an image, then named,
   then explained. Images are never decorative wallpaper behind body copy.
2. **One accent.** Green is used for numbers, active navigation, links and small
   labels. It is not used for large fills except the dark bands.
3. **Air is part of the design.** Sections breathe at 8rem vertical rhythm. If a
   section feels crowded, remove content rather than tighten spacing.

## 2. What we borrowed, and what we did not

Borrowed as inspiration:

- The light-canvas, serif-headline editorial feel.
- Alternating image/text project rows with a small location line.
- A dark values band, a numbers band, a dark track-record band and a centred
  closing call to action.
- Text-link buttons with a thin accent underline.
- A quiet header: logo left, four links right, no CTA button.

Deliberately not copied:

- Pragna's brand name, logo, copy, project names, photography, balloon/mountain
  artwork, or Webflow markup and animations.
- Pragna's exact mint `#2CB690`. NewBuild uses a deeper architectural green.
- Per-project microsites. Every project stays inside this site.
- A carousel with autoplay. The track record is a static grid; it is easier to
  scan and does not hide content behind interaction.

## 3. Tokens

All tokens live at the top of `src/styles/global.css`.

### Colour

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#1a1c1d` | Headlines, dark bands, footer rule |
| `--grey` | `#3f4442` | Body copy |
| `--muted` | `#707570` | Secondary copy, labels, notes |
| `--line` | `#e5e8e4` | Hairline dividers |
| `--line-strong` | `#cfd5cf` | Section rules, form underlines |
| `--tint` | `#f6f8f6` | Alternating light sections |
| `--accent` | `#1f8a70` | Numbers, markers, links |
| `--accent-strong` | `#146b57` | Small text links, active nav |
| `--accent-light` | `#5fc7ab` | Accent on dark bands |
| `--accent-wash` | `#eaf4f0` | Selection, soft highlights |

Do not introduce a second accent. Gold, navy and terracotta were removed from
the previous draft on purpose.

### Type

Self-hosted, in `src/assets/fonts/`:

- **Larken Light (300)** — display only: h1–h4, stat numbers, the wordmark.
  It is a single weight; never ask for a bold serif.
- **Atlas Grotesk Regular (400)** — body, navigation, labels.
- **Atlas Grotesk Medium (500)** — emphasis, buttons, form labels, table values.

Scale:

| Role | Size | Line height |
| --- | --- | --- |
| h1 | `clamp(2.6rem, 5.4vw, 4rem)` | 1.1 |
| h2 | `clamp(2rem, 3.6vw, 3rem)` | 1.15 |
| h3 | `clamp(1.5rem, 2.4vw, 2rem)` | 1.2 |
| h4 | `1.5rem` | 1.4 |
| Body | `1rem` | 1.55 |
| Lead | `1–1.1rem` | 1.65 |
| Eyebrow | `0.7rem`, `0.18em` tracking, uppercase | 1.4 |

Headlines are Light 300 with `-0.01em` tracking. Body copy never goes below
`0.78rem` except the footer disclaimer.

> Licensing note: Larken and Atlas Grotesk are commercial typefaces. The mockup
> uses the files supplied with the reference. Before launch the Client must hold
> a webfont licence, or the site must switch to the open fallbacks named in the
> font stack (Iowan Old Style / Palatino for display, system UI for body).

### Space and shape

- Container: `80rem` max, `2.5rem` gutter (`1.25rem` under 720px).
- Section rhythm: `clamp(4.5rem, 8vw, 8rem)` block padding.
- Corners: square. No rounded cards, pills or soft shadows. The only circles are
  the leadership monograms.
- Rules: 1px. Use them to separate, not to decorate.
- Buttons: text link with a 1px accent underline. Solid ink buttons are reserved
  for form submit and the project-detail brochure action.

## 4. Page patterns

### Header

Sticky, white with a slight blur. Monogram square + Larken wordmark + spaced
small caps. Four links, active in `--accent-strong`. No header CTA: the first
viewport already has "View projects", and the closing band carries "Get in
touch". On mobile the links drop into a white panel below the header.

### Home

1. **Hero** — 88vh white field, h1 at 4rem, one short paragraph, underlined
   "View projects", and an original low-contrast skyline at the foot of the
   section. No badge, no floating card, no stock-photo collage.
2. **Now selling** — section heading with a right-aligned "All projects" link,
   then one large project row: 4:3 image, name, location, summary, three facts,
   "Experience more".
3. **Values band** — dark `--ink`, image left, 4rem statement right, one link.
4. **Principles** — four numbered columns on white, hairline top rules. This is
   the only place where the site explains how it works in list form.
5. **Numbers** — "Building up" left, five figures in green Larken right, each
   with a hairline and a one-line label.
6. **Legacy band** — full-bleed dusk skyline under a dark green gradient, one
   2rem statement and a link. This is a mood break, not a content section.
7. **Track record** — dark band, teal h2, three project cards with image, name,
   location + year, one-line note.
8. **Closer** — centred 3rem question on a dark green field, one paragraph, one
   underlined link.
9. **Footer** — white, hairline rule, wordmark, short description, phone/email,
   social icons, two-column link list, copyright and disclaimer.

### Inner pages

- **About** — page hero, story split with image, milestone timeline, four values,
  dark mission/vision band, leadership grid, credentials list, closer.
- **Projects** — page hero, current launch row, dark track-record grid, closer.
- **Project detail** — page hero with actions, 16:9 lead image, overview + "At a
  glance" facts, 3-up gallery, location + map placeholder, closer.
- **Contact** — page hero, contact details left, form card right, full-width map.
- **404** — large green "404", one line of explanation, underlined link home.

## 5. Imagery

The mockup uses original SVG illustrations. The final site replaces them with
photography; the layout must not change.

- Project rows: 4:3, landscape, natural light, no text overlay.
- Project detail lead: 16:9, at least 2000px wide.
- Gallery: 4:3, three images minimum.
- Values / legacy / closer bands: wide landscape, 2000px+, with a safe dark area
  on the left or centre for white text.
- Keep colour grading consistent: warm daylight, muted greens, no heavy HDR.
- Every image needs a real `alt` describing the place, not "project image".

## 6. Motion

Motion is subtle and one-directional: things arrive, they do not loop or
compete for attention. There is no autoplay, no carousel and no floating
objects.

**On load**

- The hero h1, lead and link rise 22px and fade in, staggered at 0/120/240ms
  over 0.9s. Inner-page heroes do the same for eyebrow, h1, lead and actions.
- The hero horizon fades in over 1.3s.
- The sun in the hero artwork drifts 8px vertically on an 11s loop. It is the
  only looping animation on the site.

**On scroll**

- Section heads, project rows, value columns, principles, numbers, timeline
  rows, track cards, gallery images, contact columns and the closer fade up
  18px over 0.8s. Items that sit side by side are staggered by 80ms, capped at
  five steps (400ms) so nothing waits long to appear.
- The hero horizon parallaxes down by 6% of the scroll distance, capped at one
  viewport height.

**Hover**

- Images scale to 1.03–1.04 over 0.6s; links shift colour only.

**Rules**

- The reveal class is added by JavaScript; without JavaScript, or if the
  observer cannot be created, all content is visible immediately.
- Everything above collapses under `prefers-reduced-motion: reduce`: the
  reveal script exits early, and animation duration, iteration count and
  transition delay are neutralised.
- Do not add more motion to the final build. This is the ceiling.

## 7. Accessibility

- One h1 per page; headings descend in order.
- Focus ring: 2px `--accent`, 3px offset.
- Skip link to `#main`.
- Body text on white and on dark bands meets 4.5:1; the green is never used for
  body copy.
- Mobile menu is a button with `aria-expanded`, closes on link click and Escape.
- Forms use real labels; the consent checkbox is not styled as all-caps.

## 8. Content rules

- Say what is verifiable. Numbers, dates, RERA and approvals must come from the
  Client; placeholders are marked in the UI.
- One real project only. Promoters' delivered work is always attributed.
- Prefer short declarative sentences. No "world-class", "luxury redefined" or
  invented awards.
- Keep the placeholder note visible until the corresponding real content lands.

## 9. Before launch

- [ ] Replace `NewBuild` wordmark and monogram with the Client's logo.
- [ ] Replace all project illustrations with photography.
- [ ] Replace project name, facts, RERA number and copy.
- [ ] Confirm or remove the promoters' track record.
- [ ] Confirm the webfont licence.
- [ ] Remove the preview banner and `noindex` meta in `BaseLayout.astro`.
- [ ] Point `site`/`base` in `astro.config.mjs` at `https://newbuild.co.in`.
