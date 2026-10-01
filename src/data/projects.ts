export type Project = {
  slug: string;
  name: string;
  scope: string;
  category: string;
  year?: string;
  palette: [string, string, string];
  summary: string;
  testimonial?: { quote: string; author: string };
  liveUrl?: string;
  hasCaseStudy: boolean;
};

export const projects: Project[] = [
  {
    slug: "the-traveling-hairstylists",
    name: "The Traveling Hairstylists",
    scope: "Branding, Web Design, Social Templates",
    category: "The Full Ecosystem",
    palette: ["#372414", "#fe5f00", "#f9f0ab"],
    summary:
      "Reshaping the industry by creating new opportunities for stylists during salon leaves. A brand identity and website blending strategy with adventure and empowerment — colours inspired by the vast landscapes of the United States, rooted in connection, adaptability, and trust. The redesigned site guides users with refined structure, clear typographic hierarchy, and an improved experience.",
    testimonial: {
      quote:
        "Serena put me at ease to transfer the image I had in my head into digital form and website. I am so happy with the finished result and we nailed everything so quickly too.",
      author: "Leisha — The Traveling Hairstylists",
    },
    liveUrl: "https://www.thetravelinghairstylists.com/",
    hasCaseStudy: true,
  },
  {
    slug: "movimiento",
    name: "Mov&miento",
    scope: "Branding + Social Templates",
    category: "Deep Roots",
    palette: ["#1a1a1a", "#fe5f00", "#f6f7f1"],
    summary:
      "Personalised trip-planning brand. Deep Roots identity with social templates designed to carry the brand's movement and warmth across every touchpoint.",
    hasCaseStudy: false,
  },
  {
    slug: "lexa-wig",
    name: "Lexa Wig",
    scope: "Branding + Print Design",
    category: "Deep Roots",
    palette: ["#5590ba", "#f6f7f1", "#1a1a1a"],
    summary:
      "Medical wigs. Deep Roots identity extended into considered print design for a sensitive, trust-led client experience.",
    hasCaseStudy: false,
  },
  {
    slug: "rustic-wild",
    name: "Rustic & Wild",
    scope: "Branding + Web",
    category: "The Full Ecosystem",
    palette: ["#372414", "#bcdcf4", "#f6f7f1"],
    summary:
      "Branding and web for a grounded, outdoors-rooted business. Identity and site designed as one ecosystem.",
    hasCaseStudy: false,
  },
  {
    slug: "hype-man",
    name: "Hype Man",
    scope: "Web Design (Shopify)",
    category: "The Canopy",
    palette: ["#fe5f00", "#1a1a1a", "#f6f7f1"],
    summary:
      "Shopify web design. A conversion-focused storefront with bold, confident art direction.",
    hasCaseStudy: false,
  },
  {
    slug: "voila",
    name: "Voilà",
    scope: "Branding + Packaging",
    category: "Deep Roots",
    palette: ["#f9f0ab", "#fe5f00", "#372414"],
    summary:
      "Branding plus packaging — identity designed to live on shelves as beautifully as on screen.",
    hasCaseStudy: false,
  },
  {
    slug: "maven-ridge",
    name: "Maven Ridge",
    scope: "Branding + Web Design (Wix Studio)",
    category: "The Full Ecosystem",
    palette: ["#1a1a1a", "#bcdcf4", "#f6f7f1"],
    summary:
      "Full identity and Wix Studio website for a refined, editorial-feeling brand.",
    hasCaseStudy: false,
  },
  {
    slug: "echo-hills",
    name: "Echo Hills",
    scope: "Branding",
    category: "Deep Roots",
    palette: ["#5590ba", "#f9f0ab", "#1a1a1a"],
    summary: "Branding for Echo Hills — quiet, grounded identity work.",
    hasCaseStudy: false,
  },
  {
    slug: "revive",
    name: "Revive",
    scope: "Branding",
    category: "Deep Roots",
    palette: ["#bcdcf4", "#f9f0ab", "#372414"],
    summary: "Branding for Revive — a fresh-rooted identity.",
    hasCaseStudy: false,
  },
  {
    slug: "halifax-counselling-wellness",
    name: "Halifax Counselling & Wellness",
    scope: "Branding + Web Design (Squarespace)",
    category: "The Full Ecosystem",
    palette: ["#eaeae6", "#5590ba", "#372414"],
    summary:
      "Brand and Squarespace website for a counselling & wellness practice. Calm, trustworthy, and easy to navigate.",
    hasCaseStudy: false,
  },
  {
    slug: "sans-serif",
    name: "Sans Serif",
    scope: "Branding, Web Design (Framer) & Social",
    category: "The Full Ecosystem",
    palette: ["#1a1a1a", "#f6f7f1", "#fe5f00"],
    summary:
      "Identity, Framer website, and social system for a design-led brand.",
    hasCaseStudy: false,
  },
  {
    slug: "bak-d",
    name: "Bak'd",
    scope: "Branding",
    category: "Deep Roots",
    palette: ["#372414", "#fe5f00", "#f9f0ab"],
    summary: "Playful, warm branding for Bak'd.",
    hasCaseStudy: false,
  },
];
