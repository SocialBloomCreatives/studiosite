import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock, Wallet } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ProjectCard } from "@/components/ProjectCard";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} — ${s.short}`,
    description: `${s.description} ${s.price}. ${s.timeline}.`,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== slug);
  const related = projects.slice(0, 3);
  const quote = testimonials[1];

  return (
    <>
      <PageHero
        index={s.index}
        eyebrow={`Services / ${s.short}`}
        title={<>{s.name} — <em className="text-clay">{s.short}.</em></>}
        lede={s.description}
        meta={[`Investment::${s.price}`, `Timeline::${s.timeline}`, "Availability::Booked 2026", "Next seats::Early 2027"]}
      />

      <section className="border-b rule" aria-label="Who it is for">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1fr_1.2fr] md:py-20">
          <div>
            <SectionHeading index="01" eyebrow="Who it is for" title={<>Made for the founder who has outgrown DIY.</>} />
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 border rule bg-paper px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] uppercase"><Wallet size={13} aria-hidden />{s.price}</span>
              <span className="inline-flex items-center gap-1.5 border rule bg-paper px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] uppercase"><Clock size={13} aria-hidden />{s.timeline}</span>
            </div>
          </div>
          <ul className="divide-y divide-[var(--line)] border-y rule">
            {s.forWho.map((t, i) => (
              <Reveal key={t} delay={i * 60}>
                <li className="flex gap-4 py-4">
                  <span className="font-mono text-[11px] text-clay">0{i + 1}</span>
                  <span className="text-[15px] leading-relaxed md:text-base">{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b rule bg-paper" aria-label="What's included">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <SectionHeading index="02" eyebrow="What's included" title={<>Everything planted with intention.</>} lede="Factual inclusions below are derived from the source service descriptions. Exact deliverables are confirmed in your proposal — nothing invented beyond what Kohi already promises." />
          <div className="grid gap-px border rule bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {s.includes.map((inc, i) => (
              <Reveal key={inc} delay={(i % 3) * 70}>
                <div className="h-full bg-cream p-6">
                  <p className="font-mono text-[11px] text-clay">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-2 flex gap-2 text-[15px] leading-relaxed"><Check size={16} className="mt-1 shrink-0 text-fern" aria-hidden />{inc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-muted">Developer note: line items marked strategy/portal/handover reflect source copy; final SOW lives in the proposal.</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b rule bg-moss text-cream" aria-label="Process">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <SectionHeading dark index="03" eyebrow="Process" title={<>Plant. Root. Bloom — inside this offer.</>} />
          <ol className="grid gap-px border border-cream/25 bg-cream/25 md:grid-cols-3">
            {[["Plant Your Seed", "Guided discovery: what's misaligned, what you need, where you're growing."], ["Grow Your Roots", "Design takes shape in your client portal with clear updates at every step."], ["Bloom", "Refined, finalized assets — ready to use, share, and grow with."]].map(([t, d], i) => (
              <li key={t} className="bg-moss p-6 md:p-8">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-sage">Step 0{i + 1}</p>
                <h3 className="font-display mt-2 text-2xl md:text-3xl">{t}</h3>
                <p className="mt-2 text-[15px] text-cream/80">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b rule bg-parchment" aria-label="Testimonial">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Reveal>
            <blockquote className="font-display mx-auto max-w-3xl text-center text-3xl leading-tight tracking-tight md:text-4xl">
              &ldquo;{quote.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-center font-mono text-[11px] tracking-[0.2em] uppercase text-muted">{quote.author} — {quote.business}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b rule" aria-label="Related work">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <SectionHeading index="04" eyebrow="Related work" title={<>See the ecosystem in the wild.</>} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20" aria-label="FAQ and next">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading index="05" eyebrow="FAQ" title={<>Good questions.</>} />
            <FaqAccordion items={faqs.slice(0, 4)} />
          </div>
          <div className="space-y-4">
            <div className="border rule bg-ink p-6 text-cream">
              <p className="eyebrow text-sage">Begin</p>
              <p className="font-display mt-2 text-3xl">Ready to plant {s.name}?</p>
              <p className="mt-2 text-sm text-cream/75">{s.price} · {s.timeline} · Now booking 2027 inquiries.</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 bg-cream px-5 py-3 font-mono text-xs tracking-[0.18em] uppercase text-ink hover:bg-clay hover:text-cream">
                Inquire about {s.name} <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase"><ArrowLeft size={14} aria-hidden /> All services</Link>
            <div className="border rule bg-paper p-5">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted">Also consider</p>
              {others.map((o) => (
                <Link key={o.slug} href={`/services/${o.slug}`} className="link-underline mt-2 block font-display text-xl">{o.name} — {o.short}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
