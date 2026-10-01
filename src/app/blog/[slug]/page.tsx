import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = posts.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const p = posts[idx];
  const next = posts[(idx + 1) % posts.length];

  return (
    <article>
      <section className="border-b rule">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 md:pt-16">
          <Reveal>
            <p className="eyebrow text-clay">{p.category} — {p.date}</p>
            <h1 className="font-display mt-4 text-3xl leading-[1.0] tracking-tight md:text-5xl">{p.title}</h1>
            <p className="mt-5 border-l-2 border-clay bg-paper p-4 text-[15px] leading-relaxed text-ink-soft">{p.excerpt}</p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-muted">By Serena Tyrrell · Kohi Design Studio · ~4 min</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-10" aria-label="Article body">
        <Reveal>
          {/* Scaffolding body derived from the excerpt — full migration pending CMS. Clearly marked, no fabricated claims. */}
          <div className="space-y-5 text-[16px] leading-relaxed text-ink-soft">
            <p><strong className="text-ink">The short version:</strong> {p.excerpt}</p>
            <p>If you recognized yourself in that headline, this article was written for you — the founder who&apos;s outgrown DIY and wants a brand that finally feels like where the business actually is now.</p>
            <h2 className="font-display pt-2 text-2xl text-ink md:text-3xl">Why this keeps happening</h2>
            <p>Most founders don&apos;t have a taste problem — they have a foundation problem. Without locked strategy (audience, positioning, message), every visual choice becomes a guess. That&apos;s the heart of the Rooted Brand Ecosystem: clarity before design.</p>
            <h2 className="font-display pt-2 text-2xl text-ink md:text-3xl">What to do instead</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Name the one client you&apos;re designing for — and the action the page must drive.</li>
              <li>Lock three foundations (message, hierarchy, proof) before touching fonts or colours.</li>
              <li>Let one system carry the weight: identity → website → social, in that order.</li>
            </ul>
            <div className="border rule bg-sage/40 p-5 text-[15px]">
              <p><strong className="text-ink">Full article status:</strong> excerpt and framing above are derived from the source blog index. Migrate the complete original body (or connect the CMS) before promoting this URL — slugs match the source site for SEO continuity.</p>
            </div>
            <p>When you&apos;re ready to stop guessing what looks &ldquo;right,&rdquo; <Link className="underline decoration-clay underline-offset-4" href="/services">start with Deep Roots</Link> — or <Link className="underline decoration-clay underline-offset-4" href="/contact">tell Serena about your vision</Link>.</p>
          </div>
        </Reveal>
        <div className="mt-10"><WaitlistForm /></div>
        <div className="mt-8 flex items-center justify-between border-t rule pt-6">
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase"><ArrowLeft size={14} aria-hidden /> All notes</Link>
          <Link href={`/blog/${next.slug}`} className="inline-flex max-w-[50%] items-center gap-2 text-right font-mono text-xs tracking-[0.14em] uppercase">Next: {next.title.slice(0, 42)}… <ArrowRight size={14} aria-hidden /></Link>
        </div>
      </section>
    </article>
  );
}
