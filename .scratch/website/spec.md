# Website — New Co Build Infra Developers

Status: ready-for-agent
Created: 2026-11-09

## Goal

A credible, lead-generating marketing website for a real estate and infrastructure
development business. It must make the company look established enough to trust with
a home purchase or a JV partnership, and give every visitor an obvious path to an
enquiry.

## Decisions

- Multi-page: Home, About, Projects, Services, Contact, plus a 404.
- Astro with npm; fully static output, no server required.
- Placeholder copy and imagery in v1; real brand assets swapped in later.
- Single-context domain docs (`GLOSSARY.md`, `docs/adr/`).
- Local-markdown issue tracker under `.scratch/`.

## Audience

- Home buyers evaluating builders.
- Commercial tenants and investors.
- Landowners and JV partners.

## Success criteria

- Value proposition legible in the first viewport.
- Every page offers a route to enquiry.
- Responsive from 360px to 1440px.
- Semantic HTML, visible focus states, reduced-motion support.
- `npm run build` passes with zero errors.

## Content model

Project: title, location, type, status (`Ongoing` | `Completed` | `Upcoming`),
summary, facts (label/value pairs), image, featured flag.

Site: name, tagline, phone, email, address, hours, social links.

## Out of scope (v1)

CMS, live inventory, authentication, payments, map API, analytics.

## Open questions

- Final brand colours and logo.
- Real project data, photography, and approvals.
- RERA registration numbers and legal copy.
- Form backend (Netlify Forms, Formspree, or an SMTP endpoint).
