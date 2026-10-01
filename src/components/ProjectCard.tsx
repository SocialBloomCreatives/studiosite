import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [c1, c2, c3] = project.palette;
  return (
    <Reveal delay={(index % 3) * 80}>
      <Link
        href={`/portfolio/${project.slug}`}
        className="group block border rule bg-paper transition-colors hover:border-ink"
        aria-label={`${project.name} — ${project.scope}`}
      >
        <div className="img-frame relative aspect-[4/3] border-b rule" style={{ background: c1 }}>
          {/* generative editorial cover — placeholder until real imagery is added */}
          <div className="absolute inset-0 flex flex-col justify-between p-5" aria-hidden>
            <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: c3 }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.category}</span>
            </div>
            <p className="font-display leading-[0.9] tracking-tight" style={{ color: c3, fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
              {project.name}
            </p>
            <div className="flex gap-1.5">
              {[c1, c2, c3].map((c) => (
                <span key={c} className="h-4 w-10 border border-white/30" style={{ background: c }} />
              ))}
            </div>
          </div>
          <span className="absolute right-4 top-4 grid size-9 place-items-center border bg-cream text-ink opacity-0 transition-all duration-300 group-hover:opacity-100" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </div>
        <div className="flex items-baseline justify-between gap-4 p-5">
          <div>
            <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-clay">{project.scope}</p>
            <h3 className="font-display mt-1 text-2xl tracking-tight">{project.name}</h3>
          </div>
          <span className="font-mono text-[11px] text-muted">→</span>
        </div>
      </Link>
    </Reveal>
  );
}
