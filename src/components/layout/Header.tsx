"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navPrimary } from "@/data/site";
export function Header() {
  const pathname = usePathname(),
    dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const previous = document.body.style.overflow;
    if (open) {
      element.showModal();
      document.body.style.overflow = "hidden";
    } else element.close();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-row">
          <Link
            href="/"
            className="wordmark"
            aria-label="Social Bloom Creatives home"
          >
            <strong>SBC</strong>
            <span>
              Social Bloom
              <br />
              Creatives
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary">
            {navPrimary.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link href="/contact" className="button">
              Work with us <ArrowUpRight size={16} aria-hidden />
            </Link>
            <button
              className="menu-toggle"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={dialog}
        className="mobile-menu"
        id="mobile-navigation"
        aria-label="Site navigation"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <div className="menu-top">
          <span className="eyebrow">Social Bloom Creatives</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav aria-label="Mobile">
          {[
            { label: "Home", href: "/" },
            ...navPrimary,
            { label: "Work with us", href: "/contact" },
          ].map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === n.href ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </dialog>
    </>
  );
}
