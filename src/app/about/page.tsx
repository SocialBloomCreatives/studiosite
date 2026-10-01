import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About — Serena & Kohi",
  description: "Kohi Design Studio, founded September 2021 by Serena Tyrrell in Montréal. Intentional brands and websites for driven women ready for more.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Our studio"
        title={<>Crafting standout brands & websites since 2022.</>}
        lede="A creative studio in Montréal combining creativity with strategy to bring your business story to life online. Every colour, typeface, and layout reflects your voice, values, and mission."
        meta={["Founded::Sept 2021", "Founder::Serena Tyrrell", "Base::Montréal, CA", "Reach::Worldwide"]}
      />

      <section className="border-b rule bg-paper" aria-label="Mission">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1fr_1.4fr] md:py-20">
          <Reveal><p className="eyebrow text-fern">What we believe</p></Reveal>
          <Reveal delay={80}>
            <p className="font-display text-3xl leading-[1.05] tracking-tight md:text-4xl">
              Every business deserves a brand that feels intentional, a website that supports growth,
              and a digital presence that <em className="text-clay">makes an impact.</em>
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Our mission is to help your business look and feel ready to grow — no matter the stage
              you&apos;re at. (Migrated from the source About page; lightly restructured for hierarchy.)
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b rule" aria-label="Founder story">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:py-20">
          <div>
            <SectionHeading index="01" eyebrow="The founder & designer" title={<>Hi there, I&apos;m Serena!</>} />
            <div className="max-w-xl space-y-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
              <Reveal><p>Kohi Design Studio came to life in <strong className="text-ink">September 2021</strong>, while I was still a student in my final year of graphic design studies.</p></Reveal>
              <Reveal><p>It started as a small Instagram account where I shared college work and passion projects. Through consistency, dedication, and a lot of passion, that account evolved into something I never imagined — and let me freelance full-time.</p></Reveal>
              <Reveal><p>Today, Kohi is my creative home: a place to collaborate, conceptualize, and inspire others through design.</p></Reveal>
              <Reveal>
                <div className="border rule bg-paper p-6">
                  <p className="font-display text-2xl text-ink">Where your vision <em className="text-clay">finally</em> comes to life.</p>
                  <p className="mt-3">I work with driven women ready for more — <strong className="text-ink">more clarity, more confidence, and a brand that finally feels like home.</strong> You&apos;re not just building a business; you&apos;re building something meaningful. My mission is to hand you a digital presence that feels magnetic, unmistakably yours, and <em>impossible not to show off</em>.</p>
                </div>
              </Reveal>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-xs tracking-[0.18em] uppercase text-cream hover:bg-clay">
                Let&apos;s create something intentional <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
          <Reveal delay={120}>
            <aside className="space-y-5">
              <div className="border rule bg-moss p-6 text-cream">
                <p className="eyebrow text-sage">Currently</p>
                <ul className="mt-3 space-y-2 font-mono text-[11.5px] tracking-[0.14em] uppercase">
                  <li>🍵 enjoying tea</li>
                  <li>🛫 traveling</li>
                  <li>💃🏽 dancing · 🤸🏽‍♀️ being quirky</li>
                  <li>🎶 concerts · 📚 reading · 🌱 holistic living</li>
                  <li>🥘 new foods · 👟 movement · 🧠 learning</li>
                </ul>
              </div>
              <div className="border rule bg-blush/50 p-6">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-clay-deep">Studio note (new)</p>
                <p className="font-display mt-2 text-2xl leading-tight">Fellow founder energy: I&apos;ve been in your exact shoes — lost in Canva, rebranding weekly.</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">That&apos;s why the Rooted Brand Ecosystem exists: to plant the seeds I wish someone had planted for me.</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20" aria-label="Love notes">
        <SectionHeading index="02" eyebrow="Love notes" title={<>Kind words, kept verbatim.</>} lede="All testimonials below are migrated word-for-word (lightly trimmed for length) from the source site. No quotes invented." />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.business} delay={(i % 2) * 80}>
              <figure className="h-full border rule bg-paper p-6">
                <blockquote className="text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-muted">{t.author} — {t.business}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
