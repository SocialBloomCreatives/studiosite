import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t rule bg-ink text-cream" aria-label="Footer">
      {/* CTA band */}
      <div className="border-b border-cream/15">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:py-20">
          <div>
            <p className="eyebrow text-sage">08 / Begin</p>
            <p className="font-display mt-4 text-3xl leading-[1.0] md:text-5xl">
              Stop trying to grow.
              <br />
              <em className="text-blush">Start taking root.</em>
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-cream/75">
              You&apos;ve grown. Your business has evolved. If you&apos;re ready for confidence,
              clarity, and a brand that supports your growth — let&apos;s build the version of
              your business that makes people go <em>take–my–money</em>.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3">
            <Link
              href="/contact"
              className="group flex items-center justify-between border border-cream/50 bg-cream px-5 py-4 font-mono text-xs tracking-[0.18em] uppercase text-ink transition-colors hover:bg-clay hover:border-clay hover:text-cream"
            >
              Let&apos;s build your next chapter
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} aria-hidden />
            </Link>
            <Link
              href="/waitlist"
              className="group flex items-center justify-between border border-cream/50 px-5 py-4 font-mono text-xs tracking-[0.18em] uppercase transition-colors hover:bg-cream hover:text-ink"
            >
              Join the 2027 waitlist
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} aria-hidden />
            </Link>
            <p className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-cream/60">
              ● {site.booking.status} — reopening Dec 2026
            </p>
          </div>
        </div>
      </div>

      {/* link columns */}
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">Kohi<span className="text-clay">.</span></p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {site.tagline}. Strategic brand identities and conversion-focused websites,
            rooted in intention rather than trends.
          </p>
          <p className="mt-5 font-mono text-[11px] tracking-[0.18em] uppercase text-cream/60">
            {site.location}<br />{site.working}
          </p>
          <a href={`mailto:${site.email}`} className="link-underline mt-2 inline-block text-sm text-blush">
            {site.email}
          </a>
        </div>
        <nav aria-label="Studio">
          <p className="eyebrow text-cream/50">Studio</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[["Services", "/services"], ["Method", "/method"], ["About", "/about"], ["Journal", "/blog"], ["FAQ", "/faq"], ["Client love", "/love"]].map(([l, h]) => (
              <li key={h + l}><Link className="link-underline text-cream/85 hover:text-cream" href={h}>{l}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services">
          <p className="eyebrow text-cream/50">Offerings</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[["Deep Roots", "/services/deep-roots"], ["The Canopy", "/services/the-canopy"], ["Full Ecosystem", "/services/full-ecosystem"], ["Inquire", "/contact"], ["Waitlist", "/waitlist"]].map(([l, h]) => (
              <li key={h}><Link className="link-underline text-cream/85 hover:text-cream" href={h}>{l}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Elsewhere">
          <p className="eyebrow text-cream/50">Elsewhere</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[["Work", "/portfolio"], ...site.socials.map((s) => [s.label, s.href] as [string, string])].map(([l, h]) => (
              <li key={l}>
                {h.startsWith("http") ? (
                  <a href={h} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1 text-cream/85 hover:text-cream">{l} <ArrowUpRight size={12} aria-hidden /></a>
                ) : (
                  <Link className="link-underline text-cream/85 hover:text-cream" href={h}>{l}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 font-mono text-[10.5px] tracking-[0.16em] uppercase text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {site.name} — All rights reserved.</span>
          <span>Designed & built by {site.founder}</span>
        </div>
      </div>
    </footer>
  );
}
