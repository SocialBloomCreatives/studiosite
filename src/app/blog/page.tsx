import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Journal — Branding & Web Design Notes",
  description: "Educational articles on branding, web design, and marketing for service-based businesses from Kohi Design Studio.",
};

const cats = ["All", "Business", "Branding Tips", "Web Design Tips", "Social Media"];

export default function BlogIndex() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="Welcome to the blog"
        title={<>Notes for your service-based business.</>}
        lede="Your resource hub for branding, web design, and marketing — from a fellow female entrepreneur passionate about helping others succeed. All titles/excerpts below migrated from the source blog."
        meta={["Posts indexed::09", "Topics::Brand · Web · Business", "Voice::Real talk", "CMS::Ready to connect"]}
      />
      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14" aria-label="Posts">
        <div className="flex flex-wrap gap-2">
          {cats.map((c, i) => (
            <span key={c} className={`border px-4 py-2 font-mono text-[11px] tracking-[0.18em] uppercase ${i === 0 ? "border-ink bg-ink text-cream" : "rule bg-paper"}`}>{c}</span>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col border rule bg-paper hover:border-ink">
                <div className="border-b rule bg-cream px-5 py-3 font-mono text-[10.5px] tracking-[0.2em] uppercase text-clay">{p.category} — {p.date}</div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-2xl leading-tight tracking-tight group-hover:underline group-hover:decoration-clay group-hover:underline-offset-4">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[11px] tracking-[0.18em] uppercase">Read article <ArrowRight size={13} aria-hidden /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 border rule bg-paper p-5 font-mono text-[11px] tracking-[0.14em] uppercase text-muted">
            Architecture note: article pages render from this index with a reading template (new). Connect a CMS (Sanity/Contentful/MDX) to publish full bodies — slugs above are reserved.
          </p>
        </Reveal>
      </section>
    </>
  );
}
