import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CursorDot } from "@/components/CursorDot";
import { site, siteUrl } from "@/data/site";
const display = localFont({
  variable: "--font-sbc-display",
  display: "swap",
  src: [
    { path: "./fonts/fraunces-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/fraunces-semibold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/fraunces-italic.ttf", weight: "400", style: "italic" },
  ],
});
const sans = localFont({
  variable: "--font-sbc-sans",
  display: "swap",
  src: [
    { path: "./fonts/instrument-regular.ttf", weight: "400" },
    { path: "./fonts/instrument-medium.ttf", weight: "500" },
    { path: "./fonts/instrument-semibold.ttf", weight: "600" },
  ],
});
const mono = localFont({
  variable: "--font-sbc-mono",
  display: "swap",
  src: "./fonts/plex-mono.ttf",
  weight: "400",
});
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Social Bloom Creatives — Building Unforgettable Brands",
    template: "%s — Social Bloom Creatives",
  },
  description:
    "Strategy, creativity, and AI for ambitious businesses. Discover SBC branding, campaigns, websites, social media management, and SBC College.",
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Social Bloom Creatives",
    description:
      "Your favourite brand’s favourite agency. Strategy, creativity, and AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    ...(siteUrl ? { url: siteUrl } : {}),
    sameAs: site.socials.map((s) => s.href),
  };
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CursorDot />
      </body>
    </html>
  );
}
