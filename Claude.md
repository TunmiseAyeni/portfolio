# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

Personal portfolio website for **Oluwatunmise Ayeni** — a backend-focused
software developer. Live as **Tunmise.dev**. Single-page site built with
**Next.js (App Router)** and **React**, deployed on **Vercel**.

## Project structure

```
app/
  page.js          Main page — "use client"; all sections + components. JSX only.
  page.module.css  All component styles (CSS Modules, imported as `s`).
  layout.js        <html>/<body>, fonts, and all SEO metadata (title, OG, JSON-LD).
  globals.css      Design tokens (CSS custom properties), reset, and .reveal classes.
  sitemap.js       Auto-generates /sitemap.xml.
  robots.js        Auto-generates /robots.txt.
lib/
  data.js          ALL site content — projects, experience, education, tech stack, nav.
public/
  tunmise.jpg      Profile photo (lowercase filename; must be JPG/PNG, never HEIC).
  Oluwatunmise-Ayeni-CV.pdf
  og-image.png / og-image.svg, favicon.svg, favicon.ico, apple-touch-icon.png, etc.
```

## The one rule that matters most

**Content changes go in `lib/data.js`, never in `page.js`.**
`page.js` renders the data; it holds no copy of its own apart from the hero
and About prose. To add a project, edit a role, or update the tech stack,
edit the exported arrays in `lib/data.js`.

- `PROJECTS` — follow the shape documented in the comment at the top of the
  array (`title, type, role, accent, description, tags, icon, links[], status,
  preview{}`). The `preview.kind` is `"api"`, `"mobile"`, or `"web"`; `"api"`
  takes an `endpoints` array that renders as a faux API console.
- `EXPERIENCE`, `EDUCATION`, `TECH_STACK`, `FALLBACK_REPOS`, `NAV_ITEMS`,
  `SECTION_IDS` — each is a plain exported array. Adding a nav item means also
  adding its section `id` to `SECTION_IDS` so active-nav highlighting works.

## Styling conventions

- Styles live in `app/page.module.css` and are used as `s.className` (CSS
  Modules — class names are hashed at build time).
- **Exception:** the scroll-reveal classes `.reveal` and `.vis` live in
  `app/globals.css` as *global* classes, because JavaScript adds `vis`
  dynamically via `classList.add("vis")`. Do **not** move these into the CSS
  Module — hashing would break the runtime class match. Likewise, the nav/menu
  toggles use `data-nav` / `data-mobbtn` attributes rather than sniffing hashed
  class names.
- Design system (defined as CSS custom properties in `globals.css`):
  teal `--color-teal: #14b8a6`, amber `--color-amber: #fbbf24`, near-black
  background `--color-bg: #080d16`, glassmorphism surfaces. Fonts: **Bricolage
  Grotesque** (display) + **Instrument Sans** (body) via `next/font/google`.
  Keep this system; don't introduce new accent colors without reason.

## Gotchas

- Image filenames are **case-sensitive** in production (Linux/Vercel) even
  though macOS is forgiving. Reference files exactly as named, all-lowercase.
- Never commit HEIC images — Chrome can't render them. Use JPG/PNG/WebP.
- `BASE_URL` appears in `layout.js`, `sitemap.js`, and `robots.js`. When the
  real domain changes, update it in all three.
- The GitHub section fetches live repos client-side and falls back to
  `FALLBACK_REPOS` in `data.js` if the API is rate-limited — keep those
  fallback entries pointing at real repos.
- The OG share image (`public/og-image.png`) is generated from
  `public/og-image.svg`; regenerate the PNG after editing the SVG.

## Contact form

The contact form (`ContactForm` in `app/page.js`) POSTs JSON to
`app/api/contact/route.js`, which validates the input, drops bots via a
`company` honeypot field, and sends the message through **Resend**. It needs
env vars — see `.env.local.example`:

- `RESEND_API_KEY` (required), `CONTACT_TO`, `CONTACT_FROM`.
- Set the same vars in Vercel → Settings → Environment Variables.
- `CONTACT_FROM` stays on Resend's shared `onboarding@resend.dev` sender until
  the site's domain is verified in Resend, then becomes `contact@<domain>`.

Requires the `resend` package (`npm install resend`).

## Commands

```bash
npm run dev     # local dev at http://localhost:3000
npm run build   # production build — run before every deploy
npm run start   # serve the production build locally
```

## Deployment

Pushing to the connected GitHub repo auto-deploys on Vercel. Always run
`npm run build` locally first as a sanity check.