# Kohi Design Studio — Redesign Scaffold

Editorial redesign of kohidesignstudio.com. Next.js 16 · App Router · TypeScript · Tailwind v4 · Radix Accordion · lucide-react.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
npx tsc --noEmit
```

## Routes

`/`, `/services`, `/services/[deep-roots|the-canopy|full-ecosystem]`, `/method`, `/portfolio`, `/portfolio/[12 slugs]`, `/about`, `/blog`, `/blog/[9 slugs]`, `/faq`, `/contact`, `/waitlist`, `/love`

## Key files

- Theme/tokens: `src/app/globals.css` — exact source palette extracted from the live site's Framer tokens: `#f6f7f1` page bg · `#1a1a1a` text · `#372414` espresso dark sections · `#f9f0ab` pale yellow · `#fe5f00` vivid orange · `#bcdcf4` pale blue · `#5590ba` dusty blue · `#eaeae6` light gray. Only `muted`/`clay-deep` are derived (color-mix) for small-text contrast.
- Fonts + metadata + org schema: `src/app/layout.tsx`
- Nav: `src/components/layout/Header.tsx` (utility strip + sticky bar + full-screen Index overlay)
- Footer + closing CTA: `src/components/layout/Footer.tsx`
- Data (single source of truth): `src/data/{site,services,projects,testimonials,posts,faqs}.ts`
- Homepage: `src/app/page.tsx`
- Shared: `Ticker`, `SectionHeading` (`01 / LABEL`), `Reveal` (scroll-in), `ProjectCard`, `FaqAccordion`, `InquiryForm`, `WaitlistForm`, `PageHero`

## Not connected yet

- `InquiryForm` / `WaitlistForm` are validated frontend-only; on success they simulate. Wire `handleSubmit`/`onSubmit` to Formspree, Resend, or a Next route handler + add the API keys.
- Blog bodies are excerpt-derived scaffolding; slugs match the source site. Connect Sanity/Contentful/MDX for full bodies.
- 11/12 portfolio pages are template overviews with palette-generated covers (only Traveling Hairstylists has full source copy). Add approved images, challenge→approach→outcomes, and quotes per project.
- No hotlinked or copied source imagery shipped — covers are CSS-generated placeholders. Drop real files under `public/work/<slug>/` and swap the cover block in `ProjectCard` + `portfolio/[slug]`.
- No analytics, no CMS, no email delivery.

## Accessibility & motion

Semantic landmarks, skip link, labelled controls, Radix accordion, visible focus rings, `prefers-reduced-motion` disables ticker + reveals.
