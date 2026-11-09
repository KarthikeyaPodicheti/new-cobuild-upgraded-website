# 0001 — Static Astro build instead of the existing WordPress install

Date: 2026-11-09
Status: Accepted

## Context

`newbuild.co.in` is hosted on MilesWeb shared cPanel hosting (LiteSpeed, PHP
8.2). It currently serves a default WordPress install created in May 2026 and
never configured — the Twenty Twenty-Five theme with a "Hello world!" post.

The Client is non-technical, wants a site in the Pragna standard, and the build
is a fixed-price pilot covering a mockup plus the final build. The repository
already contains an Astro static scaffold.

## Decision

Replace the WordPress install with a static Astro build. The mockup is
published to GitHub Pages; the production build is uploaded to `public_html` on
MilesWeb.

## Why

- Static HTML on shared hosting is fast, needs no database, and has no plugin
  or core update surface.
- Full control over layout and performance, which a premium
  photography-led look depends on.
- The existing scaffold already implements the page structure, so the
  three-day mockup deadline is achievable.
- Content updates become a billable care-plan service rather than unpaid
  support.

## Consequences

- The Client cannot edit content himself. Updates go through the care plan.
- The WordPress files and database must be backed up before replacement and
  kept for 30 days.
- A future self-service CMS is a separate project with its own price.
- Deployment is a file upload to `public_html`, not a Git-based pipeline.

## Alternatives considered

- **Custom WordPress theme** — lets the Client self-edit, but is several times
  the work and cannot be delivered for ₹3,000.
- **Headless CMS** — needs a backend or a hosted service, which shared hosting
  does not provide cleanly.
- **Page builder** — fast to start, but produces the generic look the Client is
  explicitly trying to avoid.
