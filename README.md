# Karthikeyan A — Portfolio

Personal portfolio built with **React + TypeScript + Vite**. Dark-first design,
CSS-driven motion, IntersectionObserver reveals, a focus-trapped case-study modal,
and a strong accessibility + performance baseline. The site doubles as a work
sample (Lighthouse 100 desktop / ~96 mobile).

All content is real. Everything editable lives in `src/lib/` and `src/data/` —
the UI components never hardcode content.

---

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build -> dist/
npm run preview  # serve the production build
npm run lint     # tsc project-wide, no emit
```

Node 18+.

---

## Editing content — data files only, never components

| File | Controls |
| --- | --- |
| `src/lib/site.ts` | Name, role, positioning line, email, socials, résumé path, `url`, global `lastUpdatedISO` |
| `src/lib/nav.ts` | Nav items (ids must match `<Section id>` in `App.tsx`) |
| `src/data/profile.ts` | About: paragraphs, principles, philosophy, currently learning, availability |
| `src/data/experience.ts` | Timeline — the four Rootquotient engagements |
| `src/data/projects.ts` | Project cards + the featured Swim Therapy case study (sections 01–09) |
| `src/data/skills.ts` | Grouped skills (no levels; hover note optional) |
| `src/data/certificates.ts` | The two AWS certs |
| `src/data/impact.ts` | Engineering Impact — the six counts |
| `src/data/exploring.ts` | "Currently learning" cards |

"Last Updated" shows month + year (`SEP 2026`). Bump `site.lastUpdatedISO` and the
per-item `updatedISO` fields when you refresh content — `"2026-09"`, or `"2026"`
for a year only.

---

## Before publishing

- **Domain.** Replace `karthikeyan.dev` in `index.html` (canonical, OG, Twitter,
  JSON-LD), `src/lib/site.ts` (`url`), `public/robots.txt`, `public/sitemap.xml`,
  and `public/og-image.svg`. Then re-render the PNG from the SVG.
- **`public/resume.pdf`.** Drop in the current résumé PDF.
- **`public/og-image.png`.** 1200×630 social card. `public/og-image.svg` is the
  editable source — export it to PNG after any text change.
- Confirm the GitHub / LinkedIn handles in `site.ts` resolve.

Optional: drop real screenshots at `public/projects/swim-admin.png` and
`public/projects/swim-patient.png` and set `thumb` on the featured project. Without
them the case study simply omits images (the product is under NDA anyway).

## Deploy config

- `vercel.json` — security headers + immutable caching for `/assets/*` on Vercel.
- `public/_headers` — the same for Netlify / Cloudflare Pages.
- Icons: `favicon.svg` (a "K" monogram) plus `apple-touch-icon.png` (180),
  `icon-192.png`, `icon-512.png` generated from it. Regenerate the PNGs if you
  change the SVG.

---

## Architecture

```
src/
├── lib/        site config + nav model
├── data/       all portfolio content (typed)
├── hooks/      useReveal, useScrolled, useActiveSection, useCountUp,
│               useLockBodyScroll, useMediaQuery, usePrefersReducedMotion
├── context/    ThemeContext (dark/light, persisted, no-flash)
├── components/ Navbar, Button, SectionHeading, LastUpdated, Tag, ProjectCard,
│               FeaturedProject, CaseStudyModal, ExperienceItem, SkillGroup/Badge,
│               CertificateCard, ImpactCard, ExploringCard, Footer, HeroTerminal,
│               CursorSpotlight, ThemeToggle, SocialLink, StatusDot, Icons
├── sections/   one component per page section, composed in App.tsx
└── styles/     tokens · base · utilities · components · sections  (plain CSS)
```

Page order: Navbar → Hero → About → Engineering Impact → Experience →
Featured Project → Projects → Skills → Certificates → Currently Learning →
Contact → Footer.

Motion: one `IntersectionObserver` reveal hook, a self-typing hero terminal, a
hero cursor spotlight, count-up on the impact numbers — all disabled under
`prefers-reduced-motion`. Styled `console.log` greeting on the production build.

Accessibility: semantic landmarks, skip link, keyboard-operable project cards,
focus-trapped modal with `Esc` + focus restore, visible focus rings,
`aria-current` on the active nav link, WCAG AA contrast in both themes.

---

## Deploy

Static output — any static host. Vercel / Netlify: framework preset "Vite", build
`npm run build`, output `dist`. GitHub Pages: set `base` in `vite.config.ts` to
`/<repo>/` first.
