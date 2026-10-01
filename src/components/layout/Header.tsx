"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navPrimary, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Menu closes via onClick on each overlay link (see below) and on
  // the Close button. No pathname effect needed.

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      {/* utility strip */}
      <div className="border-b rule bg-moss text-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-1.5 font-mono text-[10.5px] tracking-[0.18em] uppercase">
          <span className="truncate">{site.location} — {site.working}</span>
          <span className="hidden sm:inline">● {site.booking.status}</span>
          <Link href="/waitlist" className="underline underline-offset-4 hover:opacity-80">
            Join 2027 waitlist
          </Link>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b rule bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <Link href="/" className="flex items-baseline gap-2" aria-label="Kohi Design Studio home">
            <span className="font-display text-[26px] leading-none font-semibold tracking-tight">
              Kohi<span className="text-clay">.</span>
            </span>
            <span className="hidden font-mono text-[10px] tracking-[0.22em] uppercase text-muted md:inline">
              Design Studio
            </span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {navPrimary.slice(0, 5).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={pathname === n.href ? "page" : undefined}
                className={`font-mono text-[11.5px] tracking-[0.18em] uppercase transition-colors ${
                  pathname === n.href ? "text-clay" : "text-ink hover:text-clay"
                }`}
              >
                <span className="link-underline">{n.label}</span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 border border-ink bg-ink px-4 py-2.5 font-mono text-[11.5px] tracking-[0.16em] uppercase text-cream transition-colors hover:bg-clay hover:border-clay sm:inline-flex"
            >
              Inquire <ArrowUpRight size={14} aria-hidden />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex items-center gap-2 border border-ink px-3.5 py-2.5 font-mono text-[11.5px] tracking-[0.16em] uppercase lg:hidden"
            >
              {open ? <X size={16} aria-hidden /> : <Menu size={16} aria-hidden />}
              Menu
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="hidden border border-ink px-4 py-2.5 font-mono text-[11.5px] tracking-[0.16em] uppercase hover:bg-ink hover:text-cream lg:inline-flex"
            >
              Index +
            </button>
          </div>
        </div>
      </header>

      {/* Editorial overlay menu */}
      {open ? (
        <div className="fixed inset-0 z-[70] flex flex-col bg-ink text-cream" role="dialog" aria-modal="true" aria-label="Site index">
          <div className="flex items-center justify-between border-b border-cream/20 px-5 py-4 md:px-10">
            <span className="font-display text-xl">Kohi<span className="text-clay">.</span> <span className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-70">Index</span></span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              autoFocus
              className="inline-flex items-center gap-2 border border-cream/40 px-4 py-2 font-mono text-xs tracking-[0.18em] uppercase hover:bg-cream hover:text-ink"
            >
              <X size={15} aria-hidden /> Close
            </button>
          </div>
          <nav aria-label="Site index" className="flex-1 overflow-y-auto px-5 py-6 md:px-10">
            <ul className="divide-y divide-cream/15 border-y border-cream/15">
              {[
                { label: "Home", href: "/", index: "00" },
                ...navPrimary,
                { label: "Inquire", href: "/contact", index: "07" },
                { label: "Waitlist", href: "/waitlist", index: "08" },
                { label: "Client Love", href: "/love", index: "09" },
              ].map((n) => (
                <li key={n.href + n.label}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between gap-4 py-4 md:py-5"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-cream/50">{n.index}</span>
                      <span className="font-display text-3xl tracking-tight transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blush md:text-5xl">
                        {n.label}
                      </span>
                    </span>
                    <ArrowUpRight className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-6 font-mono text-[11px] tracking-[0.18em] uppercase text-cream/70 sm:grid-cols-3">
              <div>{site.location}<br />{site.working}</div>
              <div><a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a></div>
              <div className="flex gap-4">
                {site.socials.slice(0, 3).map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">{s.label}</a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
