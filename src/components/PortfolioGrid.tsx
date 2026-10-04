"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
export function PortfolioGrid() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter(
    (p) => filter === "All" || p.categories.includes(filter),
  );
  return (
    <>
      <div className="filter-row" aria-label="Filter projects">
        {["All", "Branding", "Strategy", "Campaigns", "Social"].map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="eyebrow mb-7" role="status">
        {visible.length} projects
      </p>
      <div className="project-grid">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
