import Link from "next/link";
import { ArrowRight, ArrowUpRight, Asterisk, Leaf, Sprout, Flower2 } from "lucide-react";
import { Ticker } from "@/components/Ticker";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WaitlistForm } from "@/components/WaitlistForm";
import { services, pillars } from "@/data/services";
import { projects } from "@/data/projects";
import { testimonials, stats } from "@/data/testimonials";
import { posts } from "@/data/posts";
import { faqs } from "@/data/faqs";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b rule" aria-label="Intro">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-8 md:pt-12">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase">
              <span className="border rule bg-paper px-3 py-1.5">◉ Rooted Brand Ecosystem</span>
              <span className="border rule bg-paper px-3 py-1.5">Montréal → Worldwide</span>
              <span className="border border-clay bg-blush/60 px-3 py-1.5 text-clay-deep">● Booked 2026 — 2027 waitlist open</span>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display-giant mt-7 max-w-5xl">
              Brands &amp; websites for founders ready to{" "}
              <em className="text-clay">make an impact.</em>
            </h1>
          </Reveal>
          <div className="mt-8 grid gap-8 border-t rule pt-8 md:grid-cols-[1.5fr_1fr]">
            <Reveal delay={140}>
              <p className="max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                <strong className="text-ink">A brand and website that speak clearly before you ever have to explain.</strong>{" "}
                Clarity-led branding and websites for female founders who have outgrown DIY — rooted in
                intention rather than trends, designed to feel aligned, cohesive, and easy to use in real life.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-xs tracking-[0.18em] uppercase text-cream hover:bg-clay">
                  Tell me about your vision <ArrowRight size={15} aria-hidden />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center gap-2 border border-ink px-6 py-3.5 font-mono text-xs tracking-[0.18em] uppercase hover:bg-ink hover:text-cream">
                  Explore recent projects
                </Link>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <dl className="grid grid-cols-2 gap-px border rule bg-[var(--line)]">
                {stats.map((s) => (
                  <div key={s.label} className="bg-paper p-4">
                    <dt className="font-display text-3xl md:text-4xl">{s.value}</dt>
                    <dd className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <Ticker items={["Deep Roots — Brand Identity", "The Canopy — Web Design", "The Full Ecosystem — Brand + Web", "Rooted, not rushed", "Montréal → Worldwide"]} />

      {/* POSITIONING */}
      <section className="border-b rule bg-paper" aria-label="Positioning">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1fr_1.6fr] md:py-20">
          <Reveal>
            <p className="eyebrow text-fern">Our vision for you</p>
            <p className="font-mono mt-4 text-[11px] tracking-[0.18em] uppercase text-muted">Logos built with love 🌱</p>
          </Reveal>
          <div>
            <Reveal delay={80}>
              <p className="font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
                Strategic brand identities and conversion-focused websites —{" "}
                <em className="text-clay">every colour, typeface, and layout</em> shaped to reflect
                your voice, values, and mission.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-8 grid gap-px border rule bg-[var(--line)] sm:grid-cols-3">
                {[["◎ Clear strategy", "Clarity before design. Strategy guides every visual choice."], ["◎ Elevated design", "Clean, timeless visuals that outlast trends."], ["◎ Built to convert", "Every page has a purpose; every element supports your story."]].map(([t, d]) => (
                  <div key={t} className="bg-cream p-5">
                    <p className="font-display text-lg">{t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b rule" aria-label="Services">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <SectionHeading
            index="01"
            eyebrow="Services — The Rooted Brand Ecosystem"
            title={<>Support for every stage of your brand&apos;s growth.</>}
            lede="Through the Rooted Brand Ecosystem, we offer thoughtful, clarity-first experiences designed to support your brand from the ground up."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <article className="flex h-full flex-col border rule bg-paper">
                  <div className="flex items-center justify-between border-b rule px-5 py-3 font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted">
                    <span>{s.index} / 03</span>
                    <span className="text-clay">{s.category}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="font-display text-4xl tracking-tight">{s.name}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10.5px] tracking-[0.16em] uppercase">
                      <span className="border rule bg-cream px-3 py-1.5">{s.price}</span>
                      <span className="border rule bg-cream px-3 py-1.5">{s.timeline}</span>
                    </div>
                  </div>
                  <Link href={`/services/${s.slug}`} className="group flex items-center justify-between border-t rule bg-ink px-5 py-4 font-mono text-xs tracking-[0.18em] uppercase text-cream hover:bg-clay">
                    See what&apos;s included
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <Link href="/services" className="link-underline mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase">
              View all offerings <ArrowRight size={14} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* METHOD strip */}
      <section className="border-b rule bg-moss text-cream" aria-label="Method">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <SectionHeading
            dark
            index="02"
            eyebrow="How the ecosystem works"
            title={<>Plant. Root. <em className="text-blush">Bloom.</em></>}
            lede="Three pillars, each removing a specific friction founders feel when branding too early or too quickly."
          />
          <div className="grid gap-px border border-cream/25 bg-cream/25 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div className="h-full bg-moss p-6 md:p-8">
                  <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-sage">{p.index}</p>
                  <p className="mt-3 flex items-center gap-2 font-display text-2xl md:text-3xl">
                    {i === 0 ? <Sprout size={22} aria-hidden /> : i === 1 ? <Leaf size={22} aria-hidden /> : <Flower2 size={22} aria-hidden />}
                    {p.name}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/80">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/method" className="mt-6 inline-flex items-center gap-2 border border-cream/50 px-6 py-3.5 font-mono text-xs tracking-[0.18em] uppercase hover:bg-cream hover:text-ink">
            Walk the method <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-b rule" aria-label="Selected work">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="03"
              eyebrow="Selected work"
              title={<>Carefully crafted projects that attract, engage &amp; convert.</>}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <Link href="/portfolio" className="mt-8 inline-flex items-center gap-2 border border-ink px-6 py-3.5 font-mono text-xs tracking-[0.18em] uppercase hover:bg-ink hover:text-cream">
            View full portfolio <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL moment */}
      <section className="border-b rule bg-parchment" aria-label="Client love">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1fr_1.5fr] md:py-20">
          <div>
            <SectionHeading index="04" eyebrow="Love notes" title={<>Founders on working with Serena.</>} />
            <Link href="/love" className="link-underline inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase">
              All client love <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
          <div className="space-y-px border rule bg-[var(--line)]">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.business} delay={i * 80}>
                <figure className="bg-paper p-6 md:p-7">
                  <div className="flex gap-1 text-clay" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Asterisk key={s} size={14} aria-hidden />
                    ))}
                  </div>
                  <blockquote className="font-display mt-3 text-xl leading-snug tracking-tight md:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
                    {t.author} — {t.business}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="border-b rule" aria-label="Founder">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr] md:py-20">
          <div>
            <Reveal><p className="eyebrow text-fern">05 / Meet the founder</p></Reveal>
            <Reveal delay={70}>
              <h2 className="font-display mt-4 text-3xl leading-[1.0] md:text-5xl">
                Hey, I&apos;m Serena! <span aria-hidden>👋🏽</span>
              </h2>
              <p className="mt-2 font-mono text-[11px] tracking-[0.2em] uppercase text-muted">Your designer, strategist &amp; creative partner</p>
            </Reveal>
            <Reveal delay={130}>
              <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
                <p>
                  I help ambitious entrepreneurs step out of the DIY loop and into a brand that feels
                  intentional, aligned, and ready for growth.
                </p>
                <p>
                  As a designer <em>obsessed</em> with high-impact brand and web experiences, my work blends
                  clear strategy, clean elevated design, accessibility-friendly decisions, and timeless storytelling.
                </p>
                <p>
                  I&apos;ve supported <strong className="text-ink">50+ women-led businesses</strong> and crafted{" "}
                  <strong className="text-ink">hundreds of branding and website assets</strong> that helped them
                  grow with clarity and confidence. And you&apos;re next.
                </p>
              </div>
              <Link href="/about" className="mt-6 inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-xs tracking-[0.18em] uppercase text-cream hover:bg-clay">
                Get to know Serena <ArrowRight size={14} aria-hidden />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <aside className="border rule bg-moss p-6 text-cream md:p-8" aria-label="Founder facts">
              <p className="eyebrow text-sage">Field notes</p>
              <ul className="mt-4 space-y-3 font-mono text-[11.5px] tracking-[0.14em] uppercase">
                <li className="flex justify-between border-b border-cream/20 pb-3"><span>Based</span><span>Montréal, CA</span></li>
                <li className="flex justify-between border-b border-cream/20 pb-3"><span>Since</span><span>Sept 2021</span></li>
                <li className="flex justify-between border-b border-cream/20 pb-3"><span>Status</span><span className="text-blush">Booked 2026</span></li>
                <li className="flex justify-between border-b border-cream/20 pb-3"><span>Fuel</span><span>🍵 Tea, always</span></li>
                <li className="flex justify-between"><span>Mode</span><span>🛫 Traveling</span></li>
              </ul>
              <p className="font-display mt-6 text-2xl leading-tight">Design that feels magnetic, unmistakably yours.</p>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* JOURNAL teaser */}
      <section className="border-b rule bg-paper" aria-label="Journal">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <SectionHeading
            index="06"
            eyebrow="Lately on the blog"
            title={<>Real talk on branding, websites &amp; building something you&apos;re proud of.</>}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col border rule bg-cream p-6 hover:border-ink">
                  <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-clay">{p.category} — {p.date}</p>
                  <h3 className="font-display mt-3 text-2xl leading-tight tracking-tight group-hover:underline group-hover:decoration-clay group-hover:underline-offset-4">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-mono text-[11px] tracking-[0.18em] uppercase">Read <ArrowRight size={13} aria-hidden /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + WAITLIST */}
      <section className="border-b rule" aria-label="Questions and waitlist">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:py-20">
          <div>
            <SectionHeading index="07" eyebrow="Questions" title={<>Still wondering if this is your season to root?</>} />
            <FaqAccordion items={faqs.slice(0, 4)} />
            <Link href="/faq" className="link-underline mt-5 inline-block font-mono text-xs tracking-[0.2em] uppercase">All FAQs →</Link>
          </div>
          <div>
            <Reveal>
              <div className="border rule bg-ink p-6 text-cream md:p-8">
                <p className="eyebrow text-sage">Availability</p>
                <p className="font-display mt-3 text-3xl leading-tight">Fully booked for 2026. The 2027 waitlist is open.</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
                  Bookings are estimated to reopen in December 2026 for founders ready to begin at the
                  start of 2027. Want to be first in line? Save your spot below.
                </p>
                <div className="mt-5"><WaitlistForm compact /></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
