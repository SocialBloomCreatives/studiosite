import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { services, pillars } from "@/data/services";
import { faqs } from "@/data/faqs";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Services — Branding & Web Design",
  description: "Deep Roots brand identity, The Canopy website design, and The Full Ecosystem brand + web. Pricing, timelines, and the Rooted Brand Ecosystem method.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="The Rooted Brand Ecosystem"
        title={<>Branding & web design that replaces over-explaining with quiet confidence.</>}
        lede="For female founders who built fast, outgrew DIY visuals, and now hesitate sharing their brand. Together we create a rooted brand and website that speaks for you."
        meta={["Deep Roots::From $2,900 · 3 wks", "The Canopy::From $4,900 · 4 wks", "Full Ecosystem::From $6,500 · 6 wks", "Status::Booked 2026"]}
      />

      {/* raise-hand diagnostic (migrated) */}
      <section className="border-b rule bg-paper" aria-label="Is this you">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:py-18">
          <Reveal>
            <p className="eyebrow text-fern">Let&apos;s be real</p>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] md:text-5xl">You&apos;re here because something feels… <em className="text-clay">off.</em></h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">Not broken. Not terrible. Just… not right anymore. You&apos;ve outgrown the version of your brand you created just to get started.</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted">Raise your hand if you…</p>
            <ul className="mt-3 divide-y divide-[var(--line)] border-y rule">
              {[
                "Have a Notes app full of half-written rebrands and voice notes that never fully come together.",
                "Have a Pinterest board of dream visuals you add to weekly.",
                "Have tweaked Canva templates 'one last time' — and it still doesn't feel like you.",
                "Hesitate before sharing your website because your work is better than your visuals.",
                "Feel brand shame so bad it keeps you from marketing all-in.",
              ].map((t) => (
                <li key={t} className="flex gap-3 py-3 text-[15px] leading-relaxed"><span className="text-clay">✳</span>{t}</li>
              ))}
            </ul>
            <p className="mt-4 text-[15px] text-ink-soft"><strong className="text-ink">Now imagine:</strong> getting discovered without the hustle, posting in minutes because assets work together, and hearing <em>take-my-money</em>.</p>
          </Reveal>
        </div>
      </section>

      {/* offerings */}
      <section id="offerings" className="border-b rule" aria-label="Offerings">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <SectionHeading index="02" eyebrow="Offerings" title={<>Three ways to plant your roots.</>} lede="Prices in USD. Investment starts as listed; final scope confirmed in your proposal." />
          <div className="space-y-5">
            {services.map((s, i) => (
              <Reveal key={s.slug}>
                <article className="grid border rule bg-paper md:grid-cols-[80px_1.4fr_1fr_auto]">
                  <div className="flex items-center justify-center border-b rule bg-ink p-5 font-display text-3xl text-cream md:border-b-0 md:border-r">{s.index}</div>
                  <div className="p-6 md:p-8">
                    <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-clay">{s.category}</p>
                    <h3 className="font-display mt-1 text-4xl tracking-tight md:text-5xl">{s.name}</h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">{s.description}</p>
                    <ul className="mt-4 space-y-1.5">
                      {s.includes.slice(0, 4).map((inc) => (
                        <li key={inc} className="flex gap-2 text-sm text-ink-soft"><Check size={15} className="mt-0.5 shrink-0 text-fern" aria-hidden />{inc}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center gap-2 border-t rule bg-cream p-6 md:border-t-0 md:border-l">
                    <p className="font-display text-2xl">{s.price}</p>
                    <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted">{s.timeline}</p>
                    <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted">0{i + 1} / 03</p>
                  </div>
                  <Link href={`/services/${s.slug}`} className="group flex items-center justify-between gap-4 bg-clay p-6 font-mono text-xs tracking-[0.18em] uppercase text-cream hover:bg-clay-deep md:w-14 md:flex-col md:justify-center" aria-label={`Open ${s.name}`}>
                    <span className="md:[writing-mode:vertical-rl]">Open</span>
                    <ArrowUpRight size={18} aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* pillars */}
      <section className="border-b rule bg-moss text-cream" aria-label="Pillars">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <SectionHeading dark index="03" eyebrow="The method" title={<>Clarity before design. Strategy in every choice.</>} />
          <div className="grid gap-px border border-cream/25 bg-cream/25 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.name} className="bg-moss p-6 md:p-8">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-sage">{p.index}</p>
                <h3 className="font-display mt-2 text-3xl">{p.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cream/80">{p.text}</p>
              </div>
            ))}
          </div>
          <Link href="/method" className="mt-6 inline-flex items-center gap-2 border border-cream/50 px-6 py-3.5 font-mono text-xs tracking-[0.18em] uppercase hover:bg-cream hover:text-ink">
            Inside the method <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </section>

      {/* fit / not-fit (migrated) */}
      <section className="border-b rule" aria-label="Fit">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-14 md:grid-cols-2 md:py-20">
          <Reveal>
            <div className="h-full border rule bg-sage/40 p-6 md:p-8">
              <p className="eyebrow text-fern">You&apos;re a perfect fit if</p>
              <ul className="mt-4 space-y-3 text-[15px]">
                {["You're starting fresh and need to start from scratch.", "You feel hesitant sharing your website or visuals.", "You built fast to launch — and now you've outgrown it.", "You're relying on over-explaining instead of letting your brand work."].map((t) => (
                  <li key={t} className="flex gap-2.5"><Check size={16} className="mt-1 shrink-0 text-fern" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full border rule bg-paper p-6 md:p-8">
              <p className="eyebrow text-clay">We may not fit if</p>
              <ul className="mt-4 space-y-3 text-[15px] text-ink-soft">
                {["You want ongoing patch-up tweaks to an existing site.", "You need to start immediately on a tight timeline.", "You're not open to creative feedback or expert guidance.", "You're only looking for a logo or quick refresh."].map((t) => (
                  <li key={t} className="flex gap-2.5"><X size={16} className="mt-1 shrink-0 text-clay" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* related work */}
      <section className="border-b rule bg-paper" aria-label="Related work">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <SectionHeading index="04" eyebrow="Proof" title={<>Brands that bloomed through the ecosystem.</>} />
          <div className="grid gap-px border rule bg-[var(--line)] sm:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group bg-cream p-6 hover:bg-ink hover:text-cream">
                <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase opacity-70">{p.scope}</p>
                <p className="font-display mt-2 text-2xl">{p.name} <ArrowUpRight size={16} className="inline" aria-hidden /></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20" aria-label="FAQ">
        <SectionHeading index="05" eyebrow="FAQ" title={<>Questions, answered.</>} />
        <FaqAccordion items={faqs} />
      </section>
    </>
  );
}
