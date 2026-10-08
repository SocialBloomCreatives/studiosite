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
              The Leading Creative Agency Building &amp; Marketing Brands
              Impossible to Ignore.
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
              src="/brand/hero-cover.jpg"
              alt="SBC studio cover"
              fill
              sizes="(max-width: 600px) 100vw, 55vw"
              priority
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
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 0c1.7 18.8 17.2 34.3 36 36-18.8 1.7-34.3 17.2-36 36-1.7-18.8-17.2-34.3-36-36 18.8-1.7 34.3-17.2 36-36Z"
                    fill="currentColor"
                  />
                </svg>
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
            eyebrow="Logos we've made"
            title={
              <>
                Identities built
                <br />
                to be <span className="serif">remembered.</span>
              </>
            }
          >
            <Link className="text-link" href="/portfolio">
              See them in context <ArrowUpRight size={16} aria-hidden />
            </Link>
          </SectionHeading>
          <div className="logo-grid">
            <div className="logo-cell">
              <Image
                src="/brand/logos/luma-silver.svg"
                alt="Luma logo"
                width={220}
                height={110}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="logo-cell">
              <Image
                src="/brand/logos/eve-wordmark.svg"
                alt="Eve Effect logo"
                width={220}
                height={110}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="logo-cell">
              <Image
                src="/brand/logos/second-skin-primary.svg"
                alt="Second Skin logo"
                width={220}
                height={110}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="logo-cell">
              <Image
                src="/work/zione-secrets/logos/zione-4.svg"
                alt="Zione Secrets logo"
                width={220}
                height={110}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="logo-cell">
              <Image
                src="/brand/logos/dear-amorea.svg"
                alt="Dear Amorea logo"
                width={220}
                height={110}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="logo-cell">
              <Image
                src="/brand/logos/oknotsorry.svg"
                alt="OknotSorry logo"
                width={220}
                height={110}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="logo-cell">
              <Image
                src="/brand/logos/off-the-street.svg"
                alt="Off the Street logo"
                width={220}
                height={110}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
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
            {projects.slice(0, 5).map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>
      <section className="section divider">
        <div className="wrap">
          <SectionHeading
            eyebrow="Websites"
            title={
              <>
                Brands, live
                <br />
                <span className="serif">online.</span>
              </>
            }
          >
            <Link className="text-link" href="/portfolio/allay-house">
              See the case study <ArrowUpRight size={16} aria-hidden />
            </Link>
          </SectionHeading>
          <div className="logo-grid">
            <div className="logo-cell">
              <p className="logo-wordmark font-montserrat">Allay House</p>
              <p className="eyebrow">Beauty & wellness — Lagos</p>
              <a
                className="text-link mt-4"
                href="https://www.allayhouse.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit website <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
            <div className="logo-cell">
              <p className="logo-wordmark font-montserrat">LUMA.</p>
              <p className="eyebrow">Beauty — Lagos & diaspora</p>
              <a
                className="text-link mt-4"
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
      <section className="college-band">
        <div className="wrap college-grid">
          <div>
            <p className="eyebrow mb-6">
              04 / For the founders doing it themselves
            </p>
            <h2 className="section-title">
              <Image
                src="/brand/sbc-college-brown.svg"
                width={767}
                height={191}
                alt="SBC College"
                className="college-logo"
              />
            </h2>
            <p className="copy">
              Building it yourself doesn’t mean building it alone. Learn the
              frameworks and strategies we use with our agency clients through
              practical toolkits, courses, and AI resources.
            </p>
            <div className="actions">
              <Link className="button" href="/resources">
                Explore resources <ArrowUpRight size={17} aria-hidden />
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
