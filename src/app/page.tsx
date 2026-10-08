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
  const clientLogos = [
    { src: "/brand/logos/luma-silver.svg", alt: "Luma logo" },
    { src: "/brand/logos/eve-wordmark.svg", alt: "Eve Effect logo" },
    {
      src: "/brand/logos/second-skin-primary.svg",
      alt: "Second Skin logo",
    },
    {
      src: "/work/zione-secrets/logos/zione-4.svg",
      alt: "Zione Secrets logo",
    },
    { src: "/brand/logos/dear-amorea.svg", alt: "Dear Amorea logo" },
    { src: "/brand/logos/oknotsorry.svg", alt: "OknotSorry logo" },
    {
      src: "/brand/logos/off-the-street.svg",
      alt: "Off the Street logo",
    },
  ];
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
      <section className="section dark">
        <div className="wrap split">
          <div className="portrait">
            <Image
              src="/brand/about-home-v2.webp"
              alt="SBC creative director"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
          <div>
            <p className="eyebrow">This is SBC Agency</p>
            <h2 className="section-title">
              A creative partner
              <br />
              for your <span className="serif">next chapter.</span>
            </h2>
            <div className="copy mt-7">
              <p>
                Social Bloom Creatives Agency creative agency led by brand
                strategist and creative director Midey. We design identities
                that feel current, create content that people actually engage
                with, and build brands that are clear, cohesive, and instantly
                recognisable.
              </p>
              <p>
                From visuals, brand strategy to social media management and full
                content direction, we deliver work that&apos;s intentional and
                designed to work using a modern creative system designed for how
                brands grow today, through storytelling, identity, and culture
                grounded in insight and built to last.
              </p>
              <p>
                Every engagement starts with understanding- your audience, your
                vision, your market. We bring the creative architecture to make
                it real.
              </p>
            </div>
            <Link className="text-link mt-8" href="/about">
              Get to know SBC <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
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
            eyebrow="Logos we've made"
            title={
              <>
                Identities built
                <br />
                to be <span className="serif">remembered.</span>
              </>
            }
          />
          <div className="ticker logo-ticker" aria-hidden="true">
            <div className="ticker-track">
              {[...clientLogos, ...clientLogos].map((l, i) => (
                <span key={i} className="logo-ticker-item">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={240}
                    height={120}
                    style={{ width: "auto", height: 76 }}
                  />
                </span>
              ))}
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
              <ProjectCard
                key={p.slug}
                project={p}
                priority={i === 0}
                externalHref={p.instagram}
              />
            ))}
          </div>
        </div>
      </section>
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
