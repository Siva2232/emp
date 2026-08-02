# Emprime — Company Website

Marketing site for Emprime, a digital engineering studio building websites, mobile apps,
custom software, POS systems and ERP platforms.

## Stack

| Tool | Purpose |
| --- | --- |
| Vite 7 + React 19 | Build tooling and UI |
| Tailwind CSS v4 | Styling, via `@tailwindcss/vite` |
| React Router 7 | Client-side routing |
| Framer Motion 12 | Scroll reveals, marquees, transitions |
| three.js + React Three Fiber + drei | Interactive 3D hero scene |
| Lucide React | Icon set |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production build
npm run lint
```

## Pages

| Route | File | Notes |
| --- | --- | --- |
| `/` | `src/pages/Home.jsx` | Long-scrolling landing page, ten sections |
| `/services` | `src/pages/Services.jsx` | Five services, each anchor-linkable (`/services#pos-systems`) |
| `/work` | `src/pages/Work.jsx` | Filterable project grid plus problem/outcome table |
| `/about` | `src/pages/About.jsx` | Story, values, team, process |
| `/careers` | `src/pages/Careers.jsx` | Perks and hiring process; shows an empty state while `openings` is empty |
| `/contact` | `src/pages/Contact.jsx` | Enquiry form and contact channels |

Everything except Home is lazy-loaded, so each route ships its own chunk.

## Editing content

All copy, projects, services, stats, FAQs, openings and contact details live in
`src/data/site.js`. Components read from it, so you can rewrite the site's text without
touching any JSX.

## Wiring up the contact form

`src/data/site.js` exports `contact.formEndpoint`. Replace the placeholder with your own
[Formspree](https://formspree.io) form ID:

```js
formEndpoint: "https://formspree.io/f/abcdwxyz",
```

Until that is set, the form falls back to opening the visitor's mail client with the
submission prefilled, so nothing is lost during development.

## Design system

The site uses a light theme. Tokens are defined with Tailwind v4's `@theme` block in
`src/styles/tailwind.css`:

- **Surfaces**, lightest first — `void` (white), `abyss`, `surface`, `elevated`
- **Ink** — `ink` is the near-black base for hairlines and alpha tints (`border-ink/8`,
  `bg-ink/[0.04]`). Use it rather than `white/…`, which is invisible on a light background.
- **Text** — `chalk` (primary), `mist` (secondary), `slate-dim` (tertiary)
- **Accents** — `accent`, `accent-soft`, `accent-deep`, `glow`, `lime`
- **Type** — Space Grotesk (display), Inter (body), IBM Plex Mono (labels)

Because surfaces and text are tokenised, swapping back to a dark theme is a matter of
changing the values in the `@theme` block — no component edits required.

Reusable classes in the same file: `section-shell`, `section-pad`, `eyebrow`, `glass`,
`card-hover`, `display-xl/lg/md`, `body-lg`, plus `grain`, `grid-lines` and marquee
animation utilities.

## Structure

```
src/
├── components/
│   ├── layout/     Navbar, Footer, RootLayout, ScrollToTop
│   ├── sections/   home/ (page-specific) and shared/ (reused across pages)
│   └── ui/         Button, Reveal, Marquee, Counter, Accordion, ProjectCard, …
├── data/site.js    All site content
├── hooks/          useSeo, useHashScroll, useReducedMotion
├── pages/          One file per route
├── styles/         Tailwind theme and base layers
└── utils/          Class helper, link builders, motion variants
```

## The 3D hero

`src/components/ui/HeroScene.jsx` renders a WebGL composition: three stacked interface
panels that drift toward the cursor, a slowly rotating ring, and floating accent solids
grounded by a contact shadow. Lighting and materials are defined in the component — there
are no external HDR or texture downloads.

three.js is larger than the rest of the site combined (~245 kB gzip), so it is treated as
an enhancement rather than a requirement:

- It loads through `React.lazy`, in its own chunk, after first paint.
- It renders only at `min-width: 1024px` and only when the visitor has not requested
  reduced motion. Everyone else gets `HeroVisual.jsx`, a CSS-3D version of the same
  composition that costs nothing to download.

To adjust the breakpoint or disable WebGL entirely, edit the `show3d` condition at the top
of `src/components/sections/home/Hero.jsx`.

## Brand mark

`public/logo-emprime.png` is the supplied wordmark with its transparent padding trimmed to the
content box, so a height class positions it predictably. It renders through
`src/components/ui/Logo.jsx`, which the navbar, footer and page loader all use — set the size
per placement with the `className` height. `public/emp1.png` is the untouched original and is
not referenced by the app.

## Photography

Every photo goes through `src/components/ui/MediaFrame.jsx`. It renders the image taller than
its frame and drifts it on scroll for a parallax crop, fades it in on load, and takes optional
`srcSet` / `sizes`, a 3D tilt with glare, and a darkening overlay for captions placed on top.
Parallax and tilt both switch off under reduced motion.

`PageHero` takes an optional `media` prop, which is how the About and Careers heroes fill the
column beside the headline. Pages that omit it keep the full-width text hero.

## Accessibility and motion

`prefers-reduced-motion` is respected globally in the base layer and individually by the
counter and magnetic-hover components. Focus rings, semantic landmarks and ARIA state on
interactive controls are in place.

## Deployment

SPA fallbacks are already configured for Vercel (`vercel.json`) and Netlify
(`netlify.toml`, `public/_redirects`). Build command `npm run build`, output directory
`dist`.

## Before going live

- Replace the Formspree endpoint and the placeholder phone numbers, email and address
- Swap the four photos in `public/images/` for real shots of your team and office. Keep the
  filenames, export each at roughly 1500px on the long edge plus the smaller `-700`/`-1000`
  variant referenced in the `srcSet`, and leave headroom in the composition — `MediaFrame`
  crops slightly as it parallaxes
- Replace the demo screens in `DeviceMock.jsx` with real screenshots of your delivered
  systems — the device frames are sized to hold them
- Update project names and metrics with the details you want public
- The favicon and iOS icon are drawn from the logo's three-bar mark. If you have official
  icon artwork, replace `public/favicon.svg` and `public/apple-touch-icon.png`
