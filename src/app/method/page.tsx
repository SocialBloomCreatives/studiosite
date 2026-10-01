import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sprout, Leaf, Flower2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { pillars } from "@/data/services";

export const metadata: Metadata = {
  title: "The Method — Rooted Brand Ecosystem",
  description: "Plant Your Seed, Grow Your Roots, Bloom. Kohi's three-pillar framework for clarity-first branding and websites.",
};

const icons = [Sprout, Leaf, Flower2];

export default function MethodPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="The Rooted Brand Ecosystem"
        title={<>Not a refresh. A root system.</>}
        lede="A done-for-you brand and website framework for female founders who've outgrown DIY. What makes it different is the order and intention: clarity comes before design, and strategy guides every visual choice."
        meta={["Pillar 01::Plant Your Seed", "Pillar 02::Grow Your Roots", "Pillar 03::Bloom", "Outcome::A brand that grows with you"]}
      />
      <section className="border-b rule" aria-label="Pillars detail">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="space-y-px border rule bg-[var(--line)]">
            {pillars.map((p, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={p.name}>
                  <div className={`grid md:grid-cols-[140px_1fr_1.2fr] ${i % 2 ? "bg-paper" : "bg-cream"}`}>
                    <div className="flex items-center gap-3 border-b rule p-6 font-mono text-[11px] tracking-[0.2em] uppercase text-clay md:border-b-0 md:border-r">
                      <Icon size={18} aria-hidden /> {p.index}
                    </div>
                    <div className="border-b rule p-6 md:border-b-0 md:border-r">
                      <h2 className="font-display text-3xl tracking-tight md:text-5xl">{p.name}</h2>
                    </div>
                    <div className="p-6 md:p-8">
                      <p className="max-w-md text-[15px] leading-relaxed text-ink-soft md:text-base">{p.text}</p>
                      {i === 0 && <p className="mt-3 text-sm text-ink-soft">Through guided conversation and strategic discovery, we name what&apos;s misaligned — then design toward where you&apos;re growing.</p>}
                      {i === 1 && <p className="mt-3 text-sm text-ink-soft">Client portal, clear communication, updates every step. Supported, involved, confident.</p>}
                      {i === 2 && <p className="mt-3 text-sm text-ink-soft">Complete assets, ready to use and share. Not just a launch — a brand built to flourish.</p>}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <p className="font-display mt-8 text-center text-2xl md:text-3xl">Plant the right foundation now — <em className="text-clay">and let your brand grow with intention.</em></p>
            <div className="mt-5 flex justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-xs tracking-[0.18em] uppercase text-cream hover:bg-clay">Start planting <ArrowRight size={14} aria-hidden /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 border border-ink px-6 py-3.5 font-mono text-xs tracking-[0.18em] uppercase hover:bg-ink hover:text-cream">Compare offerings</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14" aria-label="Fit">
        <SectionHeading index="02" eyebrow="Is it for you" title={<>Rooted is a pace, not just a style.</>} />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border rule bg-sage/40 p-6"><p className="eyebrow text-fern">Thrives here</p><p className="mt-3 text-[15px] leading-relaxed">Founders done with guessing, ready to trust strategy, and excited to show up consistently once the foundation exists.</p></div>
          <div className="border rule bg-paper p-6"><p className="eyebrow text-clay">Wilts here</p><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">Quick-logo-only requests, patch-up tweaks, or timelines that can&apos;t hold a 3–6 week intentional process.</p></div>
        </div>
      </section>
    </>
  );
}
