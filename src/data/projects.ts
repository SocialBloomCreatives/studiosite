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
      "Luma had an at-home brow lamination product formulated for African and Afro-diasporic brow textures, but no identity or strategic direction to communicate what made it different in a crowded market.",
    brief:
      "Build a premium, distinctive identity, carry it across boxes, tubes, and bags, and create a content strategy for both the brand and founder Onyekachi Roha.",
    approach: [
      "We created a butter-yellow and silver visual world, with a complete identity and product packaging system.",
      "The brand strategy covered positioning, audience profiling, content pillars, and competitor analysis. A personal brand strategy for the founder and a 30-day Instagram calendar translated that direction into launch content.",
    ],
    galleryCount: 9,
    pages: "6–8",
  },
  {
    slug: "eve-effect",
    name: "Eve Effect",
    industry: "Haircare",
    location: "Nigeria",
    headline: "Hair care that works.",
    summary:
      "Logo, branding, and product design for Eve Effect — Moisturising Hair Butter, Hydrating Hair Mist, and Rapunzel Hair Oil.",
    categories: ["Branding", "Strategy"],
    scope: ["Logo & brand identity", "Branding", "Product design"],
    challenge:
      "Eve Effect needed a cohesive, premium identity to unite its haircare range and communicate efficacy on shelf and on social.",
    brief:
      "Design a distinctive logo and carry it across labels, packaging, and product photography for the core trio.",
    approach: [
      "We built the Eve Effect wordmark with its looping E monogram and a deep-brown and cream label system.",
      "The identity was applied to jars, spray bottles, and dropper bottles, with art direction for pack shots and e-commerce imagery.",
    ],
    outcome:
      "A shelf-ready range with consistent branding across butter, mist, and oil.",
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
      "Second Skin had a compelling fragrance and a strong founding idea, but no defined positioning, content direction, or social foundation to communicate its value.",
    brief:
      "Build a complete identity and execute a product launch that positions Second Skin as a considered Nigerian fragrance house.",
    approach: [
      "We developed the brand strategy, audience definition, and competitor analysis, then translated the positioning into sensory marketing, editorial lifestyle, founder storytelling, and product education.",
      "A refined communication system and four-week pre-launch content calendar supported the launch. The visual identity extended into packaging, tester materials, shopping bags, tissue paper, business cards, and digital assets.",
    ],
    outcome:
      "Second Skin entered the market with strategy, identity, content direction, and a physical brand experience working together from day one.",
    galleryCount: 5,
    pages: "22–23",
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
      "Zione Secrets had a product people connected with, but its social presence felt more like a store than a lifestyle brand. Static graphics did not fully express its emotional direction.",
    brief:
      "Reframe lingerie around a woman's relationship with herself and build a visual world that feels soft, personal, and accessible.",
    approach: [
      "We refined the brand icon and identity system, developing typography, colour direction, and assets that reflect the brand's feminine positioning.",
      "Campaign planning, creative direction, and a shoot brought the new world to life. Social media management carried the identity consistently across the brand's content.",
    ],
    outcome:
      "A more cohesive, lifestyle-led presence designed for connection and long-term growth.",
    galleryCount: 4,
    pages: "19–21",
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
    galleryCount: 2,
    pages: "9–10",
    textCover: true,
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
    textCover: true,
    website: "https://www.allayhouse.com",
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
    slug: "kynda",
    name: "Kynda",
    industry: "Fashion accessories",
    location: "Nigeria",
    headline: "Warmth you can carry with you.",
    summary:
      "A warm, earthy visual identity for a store specialising in pouches and personalised bags.",
    categories: ["Branding"],
    scope: ["Logo suite", "Colour palette", "Typography", "Packaging & labels"],
    challenge:
      "Kynda's products had a warm, tactile personality, but the store lacked a cohesive identity that customers could recognise and return to.",
    brief:
      "Build a versatile visual identity that works across packaging, product tags, labels, sticker seals, and future touchpoints.",
    approach: [
      "We developed a complete logo suite with variations for different applications, an earthy colour palette, and typography that carries the brand's personality.",
      "The system brings packaging, product labels, sticker seals, and branded tags together into a consistent, recognisable presence.",
    ],
    outcome:
      "A cohesive identity that reflects the character and quality of Kynda's products.",
    galleryCount: 3,
    pages: "15–16",
  },
  {
    slug: "synn",
    name: "Synn",
    industry: "Loungewear",
    location: "Lagos, Nigeria",
    headline: "Comfort, with a signature.",
    summary:
      "A deep-burgundy brand world that connects effortless loungewear, packaging, and an intentional social presence.",
    categories: ["Branding", "Social"],
    scope: [
      "Visual identity",
      "Product branding",
      "Packaging",
      "Social strategy & management",
    ],
    challenge:
      "Synn had a vision for effortless luxury loungewear and lingerie, but no visual foundation, strategy, or social presence to support its launch.",
    brief:
      "Build the brand across identity, product, packaging, and social media, with an Instagram presence that feels premium from the first post.",
    approach: [
      "We built the identity around a deep-burgundy and cream palette, a logo system, and packaging details. The Synn monogram appears on signature tanks and sets.",
      "Campaign imagery at airports, tennis courts, and on the street sits alongside product details, unboxing content, and flat-lays, tied together by a consistent visual world.",
    ],
    galleryCount: 5,
    pages: "17–18",
  },
  {
    slug: "big-and-tall",
    name: "Big and Tall",
    industry: "Fashion",
    location: "Lagos, Nigeria",
    headline: "Own your size. Own your style.",
    summary:
      "A premium, inclusive identity and launch system for a unisex fashion brand serving plus-sized people across Nigeria.",
    categories: ["Branding", "Strategy"],
    scope: [
      "Logo & identity",
      "Brand guidelines",
      "Product mockups",
      "Brand printables",
      "Launch content strategy",
    ],
    challenge:
      "The founder had a clear vision for modern plus-size fashion but no logo, visual system, or content direction to bring it to market.",
    brief:
      "Create an identity that feels premium and inclusive, with product applications, printables, and a social content plan ready for launch.",
    approach: [
      "We developed a BT monogram and wordmark, a navy-cream-steel palette, and a three-font typography system, supported by brand guidelines.",
      "The identity was applied to clothing mockups, packaging bags, hang tags, garment labels, and business cards. Instagram grid architecture and a 10-step launch content plan connected the system to the rollout.",
    ],
    outcome:
      "Big and Tall launched with a cohesive identity across digital and physical touchpoints, from its social grid to garment details.",
    galleryCount: 4,
    pages: "13–14",
  },
  {
    slug: "breathe-live-explore",
    name: "Breathe Live Explore",
    industry: "Home & lifestyle",
    location: "Canada",
    headline: "Bold patterns. A clearer presence.",
    summary:
      "A social strategy and ongoing content system for artist-designed bedding and intentional, colourful living.",
    categories: ["Social", "Strategy"],
    scope: [
      "Social media audit",
      "Content strategy",
      "Visual direction",
      "Instagram & TikTok management",
    ],
    challenge:
      "BLE had distinctive visuals, but its social page lacked a clear bio, content rhythm, consistent calls to action, and a framework for what to post.",
    brief:
      "Audit the existing presence, create a clear content strategy, and manage its execution while maintaining the brand's intentional tone.",
    approach: [
      "We audited the bio, grid, content performance, and opportunities, then built four pillars: Product Focus, Lifestyle & Everyday Living, Mood & Aesthetic Storytelling, and Founder/Brand Story.",
      "A visual direction, hashtag framework, and content library supported ongoing management, including four to five Reels per month.",
    ],
    outcome:
      "The detailed case study reports growth from 509 to 610 followers in the first month: 101 new followers through organic Reels, without paid promotion.",
    galleryCount: 3,
    pages: "11–12",
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
