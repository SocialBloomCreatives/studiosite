import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import assetSizes from "@/data/asset-sizes.json";
const sizes: Record<string, { width: number; height: number }> = assetSizes;
export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="project-card">
      {project.textCover ? (
        <div className="project-text-cover" aria-hidden>
          <span>{project.name}</span>
        </div>
      ) : (
        <div className="project-cover">
          <Image
            src={`/work/${project.slug}/cover.webp`}
            alt={`${project.name} — ${project.industry} project by SBC`}
            width={sizes[`/work/${project.slug}/cover.webp`]?.width ?? 1200}
            height={sizes[`/work/${project.slug}/cover.webp`]?.height ?? 900}
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 600px) 100vw, 50vw"
            priority={priority}
          />
        </div>
      )}
      <div className="project-caption">
        <div>
          <h3>{project.name}</h3>
          <p>{project.categories.join(" · ")}</p>
        </div>
        <span className="project-arrow" aria-hidden>
          <ArrowUpRight size={19} />
        </span>
      </div>
    </Link>
  );
}
