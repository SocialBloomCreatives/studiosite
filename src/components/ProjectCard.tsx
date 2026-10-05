import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="project-card">
      <div className="project-cover">
        <Image
          src={`/work/${project.slug}/cover.webp`}
          alt={`${project.name} — ${project.industry} project by SBC`}
          fill
          sizes="(max-width: 600px) 100vw, 50vw"
          priority={priority}
        />
      </div>
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
