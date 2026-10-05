import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { navPrimary, site } from "@/data/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">Your next chapter starts here</p>
            <h2 className="section-title">
              Ready to grow
              <br />
              your <span className="serif">brand?</span>
            </h2>
          </div>
          <div className="actions">
            <Link className="button light" href="/contact">
              Work with SBC <ArrowUpRight size={17} aria-hidden />
            </Link>
            <Link className="text-link" href="/college">
              Start learning <ArrowUpRight size={17} aria-hidden />
            </Link>
          </div>
        </div>
        <div className="footer-columns">
          <div>
            <Link href="/" className="wordmark">
              <Image
                src="/brand/sbc-logo-cream.svg"
                width={783}
                height={305}
                alt="SBC"
                className="agency-logo"
              />
              <span>
                Social Bloom
                <br />
                Creatives
              </span>
            </Link>
            <p>
              Strategy, creativity, and AI.
              <br />
              For brands with somewhere to go.
            </p>
            <p>
              {site.location} · {site.working}
            </p>
            <a className="text-link mt-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <nav aria-label="Explore">
            <span className="eyebrow">Explore</span>
            <Link href="/">Home</Link>
            {navPrimary.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            <Link href="/contact">Contact</Link>
          </nav>
          <nav aria-label="Stay connected">
            <span className="eyebrow">A little more fun</span>
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp ↗
            </a>
            <a href={site.portfolio} target="_blank" rel="noreferrer">
              Full portfolio ↗
            </a>
            <Link href="/faq">FAQ</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Social Bloom Creatives. All rights
            reserved.
          </span>
          <span>
            Created by <a href="https://bexoni.com">Bexoni Labs</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
