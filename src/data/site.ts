export const site = {
  name: "Social Bloom Creatives",
  shortName: "SBC",
  founder: "Midey",
  tagline: "Building unforgettable brands",
  location: "Lagos, Nigeria",
  working: "Creating across borders",
  email: "socialbloomcreatives@gmail.com",
  phone: "+971 55 975 8688",
  whatsapp: "https://wa.me/971559758688",
  portfolio:
    "https://drive.google.com/file/d/1P4iu11ID_lgsFSGuZwTRMYPI-8brOm-7/view?usp=sharing",
  original: "https://mideylyn.my.canva.site/sbc-website/",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/social.bloom.creatives_/",
    },
    { label: "TikTok", href: "https://www.tiktok.com/@sbc.agency" },
    { label: "YouTube", href: "https://youtube.com/@sbc_agency" },
  ],
} as const;
export const navPrimary = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "SBC College", href: "/college" },
  { label: "Resources", href: "/resources" },
] as const;
// Set when the new domain is known; never canonicalize to the reference studio.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
