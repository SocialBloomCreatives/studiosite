# Social Bloom Creatives

SBC agency website built with Next.js 16, React 19, and Tailwind CSS. The design uses SBC's blush pink, chocolate, and cream palette with spacious typography and real project artwork.

## Run locally

```sh
npm run dev
npm run build
npm run start
npm run lint
npx tsc --noEmit
```

If the environment restricts Turbopack's subprocess networking, use `npm run dev -- --webpack` and `npm run build -- --webpack`. The production build was verified with Webpack.

## Pages

- `/` — agency homepage
- `/about` — agency story, creative director, approach, and beliefs
- `/services` and five `/services/[slug]` pages
- `/portfolio` and nine `/portfolio/[slug]` case studies
- `/college` — toolkits, courses, AI resources, and Campus (coming soon)
- `/resources` — four resources with a persistent cart
- `/contact` — project intake and contact details
- `/faq` — practical agency/College/resource questions
- `/love` — explicitly labelled simulated testimonials, excluded from indexing

The former Journal and Method routes redirect to Resources and About. The old booking waitlist redirects to Campus.

## Content and artwork

The source is the original Social Bloom Creatives Canva website and the June 2026 SBC Agency Portfolio linked from its homepage. See `docs/content-migration.md` for the inventory and PDF project mapping. Artwork in `public/work` is extracted from that PDF, grouped by project, and compressed as WebP. Every case study links to the same original Google Drive portfolio.

## Contact and purchasing

No external email or payment credentials were supplied. Inquiry and Campus forms prepare a message with explicit email and WhatsApp links; users complete sending in their own app. They never report a successful submission. The resource cart persists only product quantities in local browser storage. Checkout prepares a WhatsApp order request or email; SBC confirms payment and delivery directly. No payments are collected here.

Seven requested testimonial drafts are visibly marked as simulated. Replace them with verified customer wording before publishing as genuine endorsements. No review/rating schema is generated.

## Domain and launch

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain to enable correct metadata URLs and sitemap entries. Until then, the site does not invent a canonical domain or point search engines at the old Canva site. No deployment, analytics, customer database, or automated mailing list is configured.

## Accessibility

Keyboard navigation, native modal focus containment, labelled form controls, visible focus indicators, real portfolio filters, reduced-motion handling, decorative cursor hidden on touch/reduced motion, and progressively enhanced reveal animations. Project images retain their actual dimensions.
