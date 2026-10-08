import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return s ? { title: s.name, description: s.description } : {};
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const featured: Record<string, string[]> = {
    branding: ["luma", "eve-effect"],
    "campaign-development": ["zione-secrets", "maek-glasses"],
    "social-media-management": ["allay-house"],
    "website-design": [],
    "brand-strategy": [],
  };
  const related = (featured[slug] ?? [])
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p) => p !== undefined);
  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={
          <>
            {service.short.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="serif">{service.short.split(" ").at(-1)}</span>
          </>
        }
        lede={service.description}
      >
        <Link className="button" href="/contact">
          Let’s talk about your brand <ArrowUpRight size={16} aria-hidden />
        </Link>
      </PageHero>
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Made with intention</p>
            <h2 className="section-title">
              A direction that
              <br />
              feels like <span className="serif">you.</span>
            </h2>
            <p className="copy mt-7">{service.details}</p>
          </div>
          <div>
            <p className="eyebrow">Ways we can support you</p>
            <ul className="service-detail-list">
              {service.includes.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="form-note mt-6">
              These are areas of support. Your exact deliverables, timeline, and
              investment are agreed in your project proposal.
            </p>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section divider">
          <div className="wrap">
            <SectionHeading
              eyebrow="The work in the world"
              title={
                <>
                  A little <span className="serif">inspiration.</span>
                </>
              }
            />
            <div className="project-grid">
              {related.map((p) => (
                <ProjectCard project={p} key={p.slug} />
              ))}
            </div>
          </div>
        </section>
      )}
      {slug === "website-design" && (
        <section className="section divider">
          <div className="wrap">
            <SectionHeading
              eyebrow="Websites we've made"
              title={
                <>
                  Brands, live <span className="serif">online.</span>
                </>
              }
            />
            <div className="site-grid">
              <div className="site-card">
                <div>
                  <h3>Allay House</h3>
                  <p className="site-meta">
                    Beauty, Wellness &amp; lifestyle
                    <br />
                    Service based (Lagos, Nigeria)
                  </p>
                </div>
                <a
                  className="button pink"
                  href="https://www.allayhouse.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit website <ArrowUpRight size={16} aria-hidden />
                </a>
              </div>
              <div className="site-card">
                <div>
                  <h3>LUMA.</h3>
                  <p className="site-meta">
                    Beauty
                    <br />
                    E-commerce (Lagos, Nigeria and Diaspora)
                  </p>
                </div>
                <a
                  className="button pink"
                  href="https://www.shopwithluma.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit website <ArrowUpRight size={16} aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="section divider">
        <div className="wrap actions">
          <Link href="/services" className="text-link">
            ← All services
          </Link>
          <Link href="/contact" className="button">
            Start your project <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
