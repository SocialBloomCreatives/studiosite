import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.name} — Case Study`, description: `${p.name}: ${p.scope}. ${p.summary}` };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = projects.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const [c1, c2, c3] = p.palette;

  return (
    <>
      <PageHero
        index="02"
        eyebrow={`Work / ${p.scope}`}
        title={<>{p.name}.</>}
        lede={p.summary}
        meta={[`Scope::${p.scope}`, `Offering::${p.category}`, `Status::${p.hasCaseStudy ? "Full story" : "Overview — full story soon"}`, "Studio::Kohi"]}
      />

      {/* cover */}
      <section className="border-b rule" aria-label="Project cover">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <Reveal>
            <div className="border rule p-6 md:p-12" style={{ background: c1 }}>
              <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: c3 }}>
                <span>Kohi × {p.name}</span><span>{p.scope}</span>
              </div>
              <p className="font-display mt-8 leading-[0.98] tracking-tight md:mt-10" style={{ color: c3, fontSize: "clamp(2.6rem, 1.75rem + 4vw, 4.5rem)" }}>{p.name}</p>
              <div className="mt-8 flex gap-2" aria-label="Brand palette">
                {[c1, c2, c3].map((c) => (
                  <span key={c} className="h-8 flex-1 border border-white/30" style={{ background: c }} title={c} />
                ))}
              </div>
              <p className="mt-4 font-mono text-[10.5px] tracking-[0.16em] uppercase" style={{ color: c3 }}>
                {p.hasCaseStudy ? "Photography placeholder — replace with final brand imagery" : "Overview page — full case study pending client-approved assets & results"}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b rule" aria-label="About the design">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow text-fern">About the design</p>
            <div className="mt-4 space-y-px border rule bg-[var(--line)] font-mono text-[11px] tracking-[0.14em] uppercase">
              {[["Client", p.name], ["Scope", p.scope], ["Offering", p.category]].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 bg-cream px-4 py-3"><span className="text-muted">{k}</span><span className="text-right">{v}</span></div>
              ))}
            </div>
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-[11px] tracking-[0.18em] uppercase hover:bg-ink hover:text-cream">
                View live website <ArrowUpRight size={14} aria-hidden />
              </a>
            )}
          </div>
          <div>
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">{p.summary}</p>
            {!p.hasCaseStudy && (
              <p className="mt-4 border rule bg-paper p-5 text-sm leading-relaxed text-ink-soft">
                <strong className="text-ink">Content status:</strong> this page uses the reusable case-study template with source-approved summary only. No outcomes, metrics, or quotes have been invented. To complete: add challenge → approach → outcomes, 4–8 images with alt text, and an approved client quote.
              </p>
            )}
            {p.testimonial && (
              <blockquote className="mt-6 border-l-2 border-clay bg-paper p-6">
                <p className="font-display text-xl leading-snug md:text-2xl">&ldquo;{p.testimonial.quote}&rdquo;</p>
                <cite className="mt-3 block font-mono text-[11px] tracking-[0.18em] uppercase text-muted not-italic">— {p.testimonial.author}</cite>
              </blockquote>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14" aria-label="More work">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl md:text-5xl">Next seedling →</h2>
          <Link href="/portfolio" className="link-underline hidden font-mono text-xs tracking-[0.18em] uppercase sm:inline-flex sm:items-center sm:gap-2"><ArrowLeft size={14} aria-hidden /> All work</Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <ProjectCard project={next} index={0} />
          <Link href={`/portfolio/${next.slug}`} className="group flex flex-col justify-between border rule bg-ink p-8 text-cream hover:bg-clay" aria-label={`Next project ${next.name}`}>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-cream/70">{next.scope}</p>
            <p className="font-display mt-4 text-4xl md:text-5xl">{next.name}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase">Open case <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
