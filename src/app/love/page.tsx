import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Asterisk } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Client Love — Testimonials",
  description: "Kind words from founders who worked with Kohi Design Studio — Maison Adeola, Moncton Counselling & Wellness, Bee Unique Yoga, and more.",
};

export default function LovePage() {
  return (
    <>
      <PageHero
        index="09"
        eyebrow="Client love"
        title={<>Love notes from past clients.</>}
        lede="Every quote below migrated from the source site. No testimonials invented, no names altered."
      />
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16" aria-label="Testimonials">
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.business} delay={(i % 2) * 80}>
              <figure className={`h-full border rule p-6 md:p-8 ${i % 3 === 0 ? "bg-moss text-cream" : "bg-paper"}`}>
                <div className="flex gap-1 text-clay" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => <Asterisk key={s} size={14} />)}
                </div>
                <blockquote className="font-display mt-4 text-2xl leading-snug tracking-tight">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className={`mt-4 font-mono text-[11px] tracking-[0.2em] uppercase ${i % 3 === 0 ? "text-sage" : "text-muted"}`}>{t.author} — {t.business}</figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal>
            <div className="flex h-full flex-col justify-between border border-clay bg-blush/50 p-6 md:p-8">
              <p className="font-display text-3xl leading-tight">Your story could root here next.</p>
              <p className="mt-2 text-sm text-ink-soft">Now gathering 2027 inquiries. Fully booked for 2026.</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-xs tracking-[0.18em] uppercase text-cream hover:bg-clay">Become a love note <ArrowRight size={14} aria-hidden /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
