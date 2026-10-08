export type Project = {
  slug: string;
  name: string;
  industry: string;
  location: string;
  headline: string;
  summary: string;
  categories: string[];
  scope: string[];
  challenge: string;
  brief: string;
  approach: string[];
  outcome?: string;
  galleryCount: number;
  pages: string;
  highlights?: { title: string; text: string }[];
  videos?: { title: string; href: string; poster?: string }[];
  website?: string;
  instagram?: string;
  textCover?: boolean;
};
// Mapped to the June 2026 SBC Agency Portfolio. Synn is the spelling in the
// project's own identity; the index inconsistently says Skynn. BLE's detailed
// results (p12) take precedence over p4. No unsupported sales metric is added.
export const projects: Project[] = [
  {
    slug: "luma",
    name: "Luma",
    industry: "Beauty",
    location: "Lagos & the diaspora",
    headline: "A beauty brand built to stand apart.",
    summary:
      "Logo, branding, and product and packaging design for Luma Brow Slick — butter-yellow boxes, bags, and a complete retail-ready system.",
    categories: ["Branding", "Strategy"],
    scope: [
      "Logo & brand identity",
      "Product & packaging design",
      "Brand strategy",
      "Personal branding",
      "Launch content",
    ],
    challenge:
      "In a market filled with increasingly similar beauty brands, LUMA needed to stand apart. Its products are created specifically for African and Afro-diasporic brow textures, and the brand needed an identity that felt just as distinctive.",
    brief:
      "Create a bold, unique and premium identity for LUMA and carry it across the complete product range and packaging experience.",
    approach: [
      "We created LUMA's brand identity and translated it across the full product line, designing everything from the individual product tubes and outer boxes to the brand's bags and larger packaging pieces.",
      "The result was a complete visual system that feels unmistakably LUMA rather than following the familiar beauty-brand aesthetics.",
    ],
    outcome:
      "A distinctive, elevated brow brand with an identity and packaging system designed to be instantly recognisable and impossible to confuse with the crowd.",
    galleryCount: 13,
    pages: "6–8",
    website: "https://www.shopwithluma.com",
  },
  {
    slug: "eve-effect",
    name: "Eve Effect",
    industry: "Haircare",
    location: "Australia",
    headline: "Hair care that works.",
    summary:
      "Logo, branding, and product design for Eve Effect — Moisturising Hair Butter, Hydrating Hair Mist, and Rapunzel Hair Oil.",
    categories: ["Branding", "Strategy"],
    scope: ["Logo & brand identity", "Branding", "Product design"],
    challenge:
      "Based in Australia and created for textured-hair women, Eve Effect needed a distinctive, premium identity that could stand out in a competitive beauty market and feel at home alongside global haircare brands.",
    brief:
      "Create a complete visual identity for Eve Effect and carry it consistently across the product range, content, and digital presence.",
    approach: [
      "We developed the brand identity and full product line, creating a cohesive visual language across packaging and product imagery.",
      "We also shaped the social media strategy and content direction to define how Eve Effect communicates, tells its story, and connects with its audience.",
    ],
    outcome:
      "A confident, premium brand presence built around one clear promise: Hair care that works.",
    galleryCount: 7,
    pages: "New",
  },
  {
    slug: "second-skin",
    name: "Second Skin",
    industry: "Fragrance",
    location: "Lagos, Nigeria",
    headline: "A scent. An identity. An impression.",
    summary:
      "Logo, branding, product design, and social media for Second Skin After Hours — identity, packaging, and launch content.",
    categories: ["Branding", "Strategy", "Campaigns", "Social"],
    scope: [
      "Logo & visual identity",
      "Brand strategy",
      "Product & packaging design",
      "Social media management",
      "Launch planning",
      "Creative direction",
    ],
    challenge:
      "Second Skin had a compelling fragrance and a strong founding idea, but no visual identity, defined positioning, content direction, or social foundation to communicate its value.",
    brief:
      "Design the logo, icon and visual identity and execute a product launch that positions Second Skin as a considered Nigerian fragrance house.",
    approach: [
      "We created the Second Skin wordmark and the icon, then developed the visual identity around them. We also developed the brand strategy, audience definition, and competitor analysis, then translated the positioning into sensory marketing, editorial lifestyle, founder storytelling, and product education.",
      "A refined communication system and four-week pre-launch content calendar supported the launch. The visual identity extended into packaging, tester materials, shopping bags, tissue paper, business cards, and digital assets.",
    ],
    outcome:
      "Second Skin entered the market with strategy, identity, content direction, and a physical brand experience working together from day one.",
    galleryCount: 5,
    pages: "22–23",
    instagram: "https://www.instagram.com/seconddskinn?stkn=MXZrN2RicmYyYzcxeQ==",
    videos: [
      {
        title: "After Hours — film 01",
        href: "/work/second-skin/videos/01.mp4",
        poster: "/work/second-skin/videos/01-poster.webp",
      },
      {
        title: "After Hours — film 02",
        href: "/work/second-skin/videos/02.mp4",
        poster: "/work/second-skin/videos/02-poster.webp",
      },
      {
        title: "After Hours — film 03",
        href: "/work/second-skin/videos/03.mp4",
        poster: "/work/second-skin/videos/03-poster.webp",
      },
    ],
  },
  {
    slug: "zione-secrets",
    name: "Zione Secrets",
    industry: "Lingerie & lifestyle",
    location: "Lagos, Nigeria",
    headline: "A brand world, entirely for her.",
    summary:
      "A soft, intentional identity and lifestyle-led campaign built around confidence, femininity, and self-connection.",
    categories: ["Branding", "Campaigns", "Social"],
    scope: [
      "Brand repositioning",
      "Visual identity",
      "Brand assets",
      "Campaign direction & shoot",
      "Social media management",
    ],
    challenge:
      "Zione Secrets had a strong product and an existing identity, but its social presence wasn't fully capturing the feeling of the brand or the lifestyle around it.",
    brief:
      "Build on the existing identity and create a more expressive visual direction for the lingerie brand, with content that feels feminine, personal, and engaging.",
    approach: [
      "We created two logo variations from the existing wordmark, then developed the campaign concept and creative direction for Zione Secrets.",
      "We shot the campaign and additional photo and video content showcasing the lingerie and sets, along with behind-the-scenes content. We also edited selected content for social media.",
    ],
    outcome:
      "A richer, more cohesive brand presence that extends beyond the product and creates a stronger connection with its audience.",
    galleryCount: 4,
    pages: "19–21",
    instagram: "https://www.instagram.com/zionesecrets?stkn=MXVjMDYxOWpjYWVlYQ==",
    videos: [
      {
        title: "Zione Secrets — film 01",
        href: "/work/zione-secrets/videos/01.mp4",
        poster: "/work/zione-secrets/videos/01-poster.webp",
      },
      {
        title: "Zione Secrets — film 02",
        href: "/work/zione-secrets/videos/02.mp4",
        poster: "/work/zione-secrets/videos/02-poster.webp",
      },
    ],
  },
  {
    slug: "allay-house",
    name: "Allay House",
    industry: "Beauty & wellness",
    location: "Lagos, Nigeria",
    headline: "A space Lagos was missing.",
    summary:
      "Social media management and content creation for Allay House — spa, pilates, events, and the launch of a first-of-its-kind space.",
    categories: ["Social", "Campaigns"],
    scope: [
      "Social media management",
      "Content creation",
      "Creative direction",
      "Launch content",
    ],
    challenge:
      "Allay House was opening a first-of-its-kind wellness, beauty, and movement space in Lagos and needed content that could introduce the space and carry everyday engagement.",
    brief:
      "Manage the social presence and create launch and lifestyle content across spa treatments, the build-out, pilates, lash, and events.",
    approach: [
      "We directed and edited launch storytelling, from the construction journey to treatment moments and in-space lifestyle.",
      "Ongoing management keeps the grid active across services, events, and community moments.",
    ],
    outcome:
      "Launch and lifestyle content reaching six-figure views, including Reels over 100K views.",
    galleryCount: 1,
    pages: "New",
    website: "https://www.allayhouse.com",
    instagram: "https://www.instagram.com/theallayhouse?stkn=MTUwZmhoczU0NmpsZQ==",
    videos: [
      {
        title: "The space — film 01",
        href: "/work/allay-house/videos/01.mp4",
        poster: "/work/allay-house/videos/01-poster.webp",
      },
      {
        title: "Treatments — film 02",
        href: "/work/allay-house/videos/02.mp4",
        poster: "/work/allay-house/videos/02-poster.webp",
      },
      {
        title: "Movement — film 03",
        href: "/work/allay-house/videos/03.mp4",
        poster: "/work/allay-house/videos/03-poster.webp",
      },
    ],
  },
  {
    slug: "maek-glasses",
    name: "Maek Glasses",
    industry: "Eyewear",
    location: "United Kingdom",
    headline: "Renewal, seen through a different lens.",
    summary:
      "A lifestyle and fashion campaign that places eyewear naturally inside moments of renewal, ease, and a great beach day.",
    categories: ["Campaigns"],
    scope: [
      "Creative direction",
      "Campaign planning",
      "Content ideation & scripting",
      "Video & lifestyle imagery",
    ],
    challenge:
      "The brand needed campaign content that felt natural and elevated, blending lifestyle with fashion without forcing the product into the story.",
    brief:
      "Capture rebirth and renewal for a New Year recharge campaign through clean, summery visuals and intentional product placement.",
    approach: [
      "We handled creative direction, campaign planning, and the shoot. Three edited video posts, raw footage, and supporting lifestyle images formed the delivery.",
      "The concepts included a beach-day outfit moment, a campaign ad, and a playful film built around girlhood and an easy day by the sea.",
    ],
    galleryCount: 0,
    pages: "9–10",
    textCover: true,
    instagram: "https://www.instagram.com/maekeyewear?stkn=MWxwZ3c4dHhpMXJyOA==",
    videos: [
      {
        title: "Beach day — film 01",
        href: "/work/maek-glasses/videos/01.mp4",
        poster: "/work/maek-glasses/videos/01-poster.webp",
      },
      {
        title: "Campaign — film 02",
        href: "/work/maek-glasses/videos/02.mp4",
        poster: "/work/maek-glasses/videos/02-poster.webp",
      },
      {
        title: "Renewal — film 03",
        href: "/work/maek-glasses/videos/03.mp4",
        poster: "/work/maek-glasses/videos/03-poster.webp",
      },
    ],
  },
  {
    slug: "goal-up",
    name: "Goal Up",
    industry: "Community & empowerment",
    location: "Women-led community",
    headline: "A community that moves together.",
    summary:
      "Content strategy, event promotion, and everyday social management for a platform supporting women's growth and empowerment.",
    categories: ["Social", "Campaigns", "Strategy"],
    scope: [
      "Social strategy",
      "Content direction",
      "Event promotion",
      "Community engagement",
    ],
    challenge:
      "Goal Up's established in-person community was not fully reflected online. Its content lacked a consistent framework connecting community growth with event registrations.",
    brief:
      "Bring structure to social content, strengthen the brand's presence, and support community building and event promotion with an empowering voice.",
    approach: [
      "We reviewed the existing presence and developed pillars covering personal growth, goal setting, community experiences, success stories, and educational content.",
      "A structured calendar and ongoing management support everyday engagement, alongside campaigns for flagship events, workshops, and community experiences.",
    ],
    highlights: [
      {
        title: "The Ace Gala Dinner",
        text: "Pre-event content, panellist features, sponsor amplification, and live coverage supported the annual dinner. The portfolio reports a sold-out room.",
      },
      {
        title: "The Vision Mapping Experience",
        text: "A campaign for a half-day workshop around identity, clarity, and intentional goal-setting, supporting registrations and the Goal Up Insiders membership launch.",
      },
      {
        title: "Everyday social management",
        text: "Content calendars, captions, community engagement, and event storytelling maintain a consistent voice on Instagram.",
      },
    ],
    galleryCount: 6,
    pages: "24–27",
  },
];
