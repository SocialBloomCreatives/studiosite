import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import assetSizes from "@/data/asset-sizes.json";
const sizes: Record<string, { width: number; height: number }> = assetSizes;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p ? { title: `${p.name} — Our work`, description: p.summary } : {};
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const project = projects[index],
    next = projects[(index + 1) % projects.length];
  return (
    <article>
      <PageHero
        eyebrow={`${project.name} / ${project.industry}`}
        title={
          <>
            {project.headline.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="serif">
              {project.headline.split(" ").slice(-2).join(" ")}
            </span>
          </>
        }
        lede={project.summary}
      >
        <Link className="text-link" href="/portfolio">
          ← All work
        </Link>
      </PageHero>
      <div className="wrap">
        <div className="case-meta">
          <div>
            <span className="eyebrow">Client</span>
            <p>{project.name}</p>
          </div>
          <div>
            <span className="eyebrow">Market</span>
            <p>{project.location}</p>
          </div>
          <div>
            <span className="eyebrow">Scope</span>
            <p>{project.scope.join(" · ")}</p>
          </div>
        </div>
        <div className="case-cover">
          {project.textCover && project.videos?.[0]?.poster ? (
            <Image
              src={project.videos[0].poster}
              alt={`${project.name} campaign film still`}
              width={
                sizes[project.videos[0].poster]?.width ?? 720
              }
              height={
                sizes[project.videos[0].poster]?.height ?? 1280
              }
              style={{ width: "100%", height: "auto" }}
              sizes="100vw"
              priority
            />
          ) : (
            <Image
              src={`/work/${project.slug}/cover.webp`}
              alt={`${project.name} project artwork from the SBC Agency Portfolio`}
              fill
              sizes="100vw"
              priority
            />
          )}
        </div>
      </div>
      <section className="section">
        <div className="wrap case-copy">
          <div>
            <p className="eyebrow mb-6">The story behind the work</p>
            <h2>
              {project.name}
              <br />
              <span className="serif">in focus.</span>
            </h2>
          </div>
          <div>
            <section>
              <h2 className="mb-6">The challenge</h2>
              <p className="copy">{project.challenge}</p>
            </section>
            <section>
              <h2 className="mb-6">The brief</h2>
              <p className="copy">{project.brief}</p>
            </section>
            <section>
              <h2 className="mb-6">What we did</h2>
              <div className="copy">
                {project.approach.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
            {project.outcome && (
              <section>
                <h2 className="mb-6">The outcome</h2>
                <p className="copy">{project.outcome}</p>
              </section>
            )}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="wrap">
          <p className="eyebrow mb-8">The work / {project.name}</p>
          <div className="case-gallery">
            {Array.from({ length: project.galleryCount }, (_, i) => (
              <figure key={i}>
                <Image
                  src={`/work/${project.slug}/${String(i + 1).padStart(2, "0")}.webp`}
                  width={
                    sizes[
                      `/work/${project.slug}/${String(i + 1).padStart(2, "0")}.webp`
                    ].width
                  }
                  height={
                    sizes[
                      `/work/${project.slug}/${String(i + 1).padStart(2, "0")}.webp`
                    ].height
                  }
                  style={{ height: "auto" }}
                  sizes="(max-width: 600px) 100vw, 60vw"
                  alt={`${project.name} — ${["creative direction", "brand artwork", "project applications", "identity details", "campaign and content"][i % 5]} from the original portfolio`}
                />
              </figure>
            ))}
          </div>
          {project.videos &&
            project.videos.some((v) => v.href.endsWith(".mp4")) && (
              <div className="video-grid">
                {project.videos
                  .filter((v) => v.href.endsWith(".mp4"))
                  .map((v) => (
                    <figure key={v.href}>
                      <video
                        controls
                        preload="metadata"
                        poster={v.poster}
                        src={v.href}
                      />
                      <figcaption className="eyebrow mt-4">
                        {v.title}
                      </figcaption>
                    </figure>
                  ))}
              </div>
            )}
          {project.videos &&
            project.videos.some((v) => !v.href.endsWith(".mp4")) && (
              <div className="actions mt-8">
                {project.videos
                  .filter((v) => !v.href.endsWith(".mp4"))
                  .map((v) => (
                    <a
                      className="button outline"
                      href={v.href}
                      key={v.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {v.title} <ArrowUpRight size={16} aria-hidden />
                    </a>
                  ))}
              </div>
            )}
          {project.website && (
            <div className="actions mt-8">
              <a
                className="button"
                href={project.website}
                target="_blank"
                rel="noreferrer"
              >
                Visit live website <ArrowUpRight size={16} aria-hidden />
              </a>
              {project.instagram && (
                <a
                  className="text-link"
                  href={project.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Instagram <ArrowUpRight size={16} aria-hidden />
                </a>
              )}
            </div>
          )}
          {!project.website && project.instagram && (
            <div className="actions mt-8">
              <a
                className="button outline"
                href={project.instagram}
                target="_blank"
                rel="noreferrer"
              >
                View on Instagram <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
          )}
        </div>
      </section>
      {project.highlights && (
        <section className="section dark">
          <div className="wrap">
            <p className="eyebrow">Inside the project</p>
            <h2 className="section-title mt-6">
              Moments that
              <br />
              <span className="serif">brought it to life.</span>
            </h2>
            <div className="highlight-grid">
              {project.highlights.map((h) => (
                <div key={h.title}>
                  <h3>{h.title}</h3>
                  <p className="copy">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow mb-6">Keep exploring</p>
            <h2 className="section-title">
              The full <span className="serif">picture.</span>
            </h2>
          </div>
          <div>
            <p className="copy">
              See the original project details and artwork in the full SBC
              Agency Portfolio. This case study is adapted from pages{" "}
              {project.pages} of the June 2026 portfolio.
            </p>
            <a
              className="button outline mt-7"
              href={site.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              View the full portfolio PDF <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </section>
      <div className="wrap">
        <Link className="next-project" href={`/portfolio/${next.slug}`}>
          <div>
            <p className="eyebrow mb-4">Next project</p>
            <p className="section-title">{next.name}</p>
          </div>
          <ArrowUpRight size={40} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
