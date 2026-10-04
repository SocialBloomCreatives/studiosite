import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Ticker } from "@/components/Ticker";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Testimonials } from "@/components/Testimonials";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap">
          <div className="hero-topline">
            <p className="eyebrow">
              Independent creative agency
              <br />
              Strategy × Creativity × AI
            </p>
            <p className="eyebrow">
              Lagos, Nigeria
              <br />
              Creating across borders
            </p>
          </div>
          <Reveal>
            <h1 className="headline hero-title">
              Building <span className="serif">unforgettable</span> brands.
            </h1>
          </Reveal>
          <div className="hero-bottom">
            <p className="copy">
              We blend strategy, creativity, and AI to help ambitious businesses
              craft memorable brands and grow strategically.
            </p>
            <div className="actions">
              <Link href="/contact" className="button">
                Work with us <ArrowUpRight size={17} aria-hidden />
              </Link>
              <Link href="/college" className="text-link">
                Learn our secrets <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-photo">
            <Image
              src="/brand/studio.webp"
              alt="SBC's creative director holding a phone displaying the SBC identity"
              fill
              sizes="(max-width: 600px) 100vw, 55vw"
              preload
            />
          </div>
          <div className="hero-statement">
            <p className="eyebrow">Social Bloom Creatives</p>
            <p className="serif">
              Your favourite brand’s
              <br />
              favourite agency.
            </p>
            <div className="hero-statement-bottom">
              <p className="eyebrow">
                Clear direction.
                <br />
                Memorable design.
                <br />A brand built to grow.
              </p>
              <span className="bloom-star" aria-hidden>
                ✳
              </span>
            </div>
          </div>
        </div>
      </section>
      <Ticker
        items={[
          "Brand strategy",
          "Visual identity",
          "Campaigns",
          "Websites",
          "Social media",
          "SBC College",
        ]}
      />
      <section className="section">
        <div className="wrap intro-grid">
          <p className="eyebrow">01 / More than a creative agency</p>
          <Reveal>
            <h2 className="section-title">
              Big ideas deserve
              <br />a <span className="serif">clear direction.</span>
            </h2>
            <div className="copy">
              <p>
                For founders with big ideas and a lot on their plates, we bring
                the strategy and creative thinking that make a brand feel
                intentional, memorable, and ready for what’s next.
              </p>
              <p>
                From brand identity and positioning to websites, content
                systems, and AI-powered workflows, we create the foundations
                that help businesses grow with clarity and confidence.
              </p>
            </div>
            <Link className="text-link mt-8" href="/about">
              Get to know SBC <ArrowUpRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section divider">
        <div className="wrap">
          <SectionHeading
            eyebrow="02 / Our services"
            title={
              <>
                Good strategy.
                <br />
                <span className="serif">Great possibilities.</span>
              </>
            }
          >
            <Link className="text-link" href="/services">
              Explore our services <ArrowUpRight size={16} aria-hidden />
            </Link>
          </SectionHeading>
          <div className="service-list">
            {services.map((s, i) => (
              <Link
                href={`/services/${s.slug}`}
                className="service-row"
                key={s.slug}
              >
                <span className="eyebrow">0{i + 1}</span>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <ArrowUpRight className="row-arrow" size={27} aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section divider">
        <div className="wrap">
          <SectionHeading
            eyebrow="03 / Selected work"
            title={
              <>
                A few brands we’ve
                <br />
                helped <span className="serif">bloom.</span>
              </>
            }
          >
            <Link className="text-link" href="/portfolio">
              View all work <ArrowUpRight size={16} aria-hidden />
            </Link>
          </SectionHeading>
          <div className="project-grid">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="college-band">
        <div className="wrap college-grid">
          <div>
            <p className="eyebrow mb-6">
              04 / For the founders doing it themselves
            </p>
            <h2 className="section-title">
              SBC <span className="serif">College</span>
            </h2>
            <p className="copy">
              Building it yourself doesn’t mean building it alone. Learn the
              frameworks and strategies we use with our agency clients through
              practical toolkits, courses, and AI resources.
            </p>
            <div className="actions">
              <Link className="button" href="/college">
                Explore College <ArrowUpRight size={17} aria-hidden />
              </Link>
              <Link className="text-link" href="/resources">
                Explore resources <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
          <div className="college-mini-list">
            {[
              [
                "01",
                "Modules & toolkits",
                "Skip the guesswork with ready-to-use business resources.",
              ],
              [
                "02",
                "Courses",
                "Actionable programs to help you launch, market, and grow.",
              ],
              ["03", "AI Lab", "Turn AI into a useful business assistant."],
              [
                "04",
                "SBC Campus",
                "A community of ambitious founders. Coming soon.",
              ],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span className="eyebrow">{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="05 / A word from the other side"
            title={
              <>
                Good work starts with
                <br />
                <span className="serif">good relationships.</span>
              </>
            }
          >
            <Link className="text-link" href="/love">
              View all preview quotes <ArrowUpRight size={16} aria-hidden />
            </Link>
          </SectionHeading>
          <Testimonials limit={3} />
        </div>
      </section>
    </>
  );
}
