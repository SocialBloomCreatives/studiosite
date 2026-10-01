export type Service = {
  slug: string;
  index: string;
  name: string;
  short: string;
  category: string;
  price: string;
  timeline: string;
  description: string;
  forWho: string[];
  includes: string[];
  notFor?: string[];
};

export const services: Service[] = [
  {
    slug: "deep-roots",
    index: "01",
    name: "Deep Roots",
    short: "Brand identity design",
    category: "Brand identity design",
    price: "From $2,900 USD",
    timeline: "Typical timeline: 3 weeks",
    description:
      "A brand identity that feels like the authentic, confident version of you. We craft a foundation that tells your story, attracts your ideal clients, and positions your business for lasting growth. This is the brand that finally feels aligned with your vision.",
    forWho: [
      "You built your brand quickly just to launch — and now you've outgrown it.",
      "You hesitate before sharing your visuals because they undersell your work.",
      "You have a Notes app of half-formed ideas and a Pinterest board of dream visuals.",
      "You're starting fresh and want to plant the right foundation first.",
    ],
    includes: [
      "Brand strategy & creative direction (guided discovery)",
      "Primary logo, secondary marks & submarks",
      "Curated colour palette & typography system",
      "Brand pattern / texture & supporting graphics",
      "Mini brand guidelines document",
      "Launch-ready file kit (print + digital)",
    ],
  },
  {
    slug: "the-canopy",
    index: "02",
    name: "The Canopy",
    short: "Website design & development",
    category: "Website design and development",
    price: "From $4,900 USD",
    timeline: "Typical timeline: 4 weeks",
    description:
      "Custom web design and development that doesn't just look good — it works. Every page, interaction, and visual element is crafted to reflect your brand, build trust, and guide your audience toward action.",
    forWho: [
      "Your work and client experience are better than your website suggests.",
      "You rely on over-explaining instead of letting your site do the work.",
      "You need a site that connects, converts, and shows the depth of your work.",
      "You want every page to have a purpose and every element to support your story.",
    ],
    includes: [
      "Website strategy & sitemap (conversion-focused structure)",
      "Custom homepage + key inner pages",
      "Copy polish & section hierarchy guidance",
      "Responsive build (mobile-first QA)",
      "Accessibility-friendly decisions (contrast, hierarchy, labels)",
      "Launch checklist & handover walkthrough",
    ],
  },
  {
    slug: "full-ecosystem",
    index: "03",
    name: "The Full Ecosystem",
    short: "Branding + web design",
    category: "Branding + web design",
    price: "From $6,500 USD",
    timeline: "Typical timeline: 6 weeks",
    description:
      "A comprehensive transformation of your brand and online presence. Ideal for businesses ready for a significant overhaul — every element designed to amplify your message and make your business feel fully aligned.",
    forWho: [
      "Your branding and website both feel stuck in an older version of you.",
      "You want one cohesive overhaul instead of piecemeal fixes.",
      "You're stepping into your next level and need everything to match.",
      "You want marketing to feel easy because the assets finally work together.",
    ],
    includes: [
      "Everything in Deep Roots (full identity system)",
      "Everything in The Canopy (custom website)",
      "Unified creative direction across brand + web",
      "Social starter templates matched to the new identity",
      "Launch asset pack & rollout guidance",
      "Priority support through the full 6-week arc",
    ],
  },
];

export const pillars = [
  {
    index: "Pillar (01)",
    name: "Plant Your Seed",
    text: "Before anything is designed, we dig into the heart of your business. Through guided conversation and strategic discovery, we uncover what's misaligned, what your business needs, and what it's growing toward.",
  },
  {
    index: "Pillar (02)",
    name: "Grow Your Roots",
    text: "This is where your brand begins to take shape. You'll have your own client portal, clear communication, and updates every step of the way — so you feel supported, involved, and confident throughout.",
  },
  {
    index: "Pillar (03)",
    name: "Bloom",
    text: "Once everything is refined and finalized, you receive your complete brand and website assets — ready to use, share, and grow with. This isn't just a launch; it's the beginning of a brand built to flourish.",
  },
] as const;
