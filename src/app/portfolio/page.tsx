import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Portfolio",
  description: "Branding and web design projects for women-led businesses: The Traveling Hairstylists, Mov&miento, Lexa Wig, Rustic & Wild, and more.",
};

const filters = ["All", "The Full Ecosystem", "Deep Roots", "The Canopy"];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Our work"
        title={<>Work that attracts, engages & converts.</>}
        lede="A selection of branding and web projects for women-led businesses. One full case study is live; the reusable case-study system is ready for the rest as content is approved."
        meta={["Projects::12", "Full case studies::01", "In system::11 stubs", "Scope::Brand · Web · Social · Print"]}
      />
      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14" aria-label="Filters">
        <Reveal>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Filter by offering (visual only on index)">
            {filters.map((f, i) => (
              <span key={f} role="listitem" className={`border px-4 py-2 font-mono text-[11px] tracking-[0.18em] uppercase ${i === 0 ? "border-ink bg-ink text-cream" : "rule bg-paper"}`}>
                {f}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <Reveal>
          <p className="mt-8 border rule bg-paper p-5 font-mono text-[11px] tracking-[0.14em] uppercase text-muted">
            Developer note: 11 project pages render from the same case-study template with palette-generated covers. Swap in real photography/embeds per project when assets are approved — see ASSETS notes in README.
          </p>
        </Reveal>
      </section>
    </>
  );
}
