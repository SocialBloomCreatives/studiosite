import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";

const display = Fraunces({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const sans = Instrument_Sans({ variable: "--font-sans", subsets: ["latin"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kohi Design Studio — Rooted Brands & Websites for Female Founders",
    template: "%s — Kohi Design Studio",
  },
  description:
    "Montréal-based branding and web design studio for female entrepreneurs. Strategic brand identities and conversion-focused websites through the Rooted Brand Ecosystem.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    title: "Kohi Design Studio — Rooted Brands & Websites for Female Founders",
    description:
      "Clarity-led branding and websites for female founders who have outgrown DIY. Based in Montréal, working worldwide.",
  },
  twitter: { card: "summary_large_image", title: "Kohi Design Studio", description: "Rooted brands & websites for female founders." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    founder: { "@type": "Person", name: site.founder },
    address: { "@type": "PostalAddress", addressLocality: "Montréal", addressCountry: "CA" },
    email: site.email,
    url: site.url,
    description: "Branding and website design studio for female entrepreneurs.",
  };
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
