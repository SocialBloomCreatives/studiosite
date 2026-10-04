export type Service = {
  slug: string;
  name: string;
  short: string;
  category: string;
  description: string;
  details: string;
  includes: string[];
};
export const services: Service[] = [
  {
    slug: "branding",
    name: "Full branding & brand building",
    short: "A brand they remember.",
    category: "Branding",
    description:
      "Build a distinctive visual identity that positions your business as a premium brand, builds trust, and gives you the confidence to charge what your work is worth.",
    details:
      "Your identity is more than a logo. We bring your positioning to life through a considered visual system that feels like your business and works across its touchpoints.",
    includes: [
      "Logo and visual identity",
      "Colour and typography direction",
      "Brand guidelines",
      "Packaging and supporting brand assets, shaped to your brief",
    ],
  },
  {
    slug: "brand-strategy",
    name: "Brand strategy",
    short: "Clarity before creativity.",
    category: "Strategy",
    description:
      "Stop guessing and start growing with intention. We help you define your positioning, messaging, and direction so every decision moves your business closer to its goals.",
    details:
      "We start with your audience, your vision, and your market. Together, we find what makes your business different and create a direction that guides your identity, content, and launch.",
    includes: [
      "Audience profiling and competitor research",
      "Brand positioning and messaging",
      "Content pillars and brand direction",
      "Launch and personal brand strategy where relevant",
    ],
  },
  {
    slug: "campaign-development",
    name: "Campaign development",
    short: "Ideas made impossible to ignore.",
    category: "Campaigns",
    description:
      "Create scroll-stopping visuals that tell your story, elevate your products, and make your brand impossible to ignore.",
    details:
      "From the first idea to the final shot, we build a campaign around what your brand needs to say. Creative direction, campaign planning, and content work together to bring that story to life.",
    includes: [
      "Creative direction and campaign concepts",
      "Campaign planning and content ideation",
      "Product and lifestyle shoots",
      "Supporting imagery and video content",
    ],
  },
  {
    slug: "website-design",
    name: "Website design & development",
    short: "A digital home with a purpose.",
    category: "Websites",
    description:
      "Your website should do more than look good. We design strategic websites that build trust, showcase your value, and turn visitors into paying clients.",
    details:
      "A clear story, an intentional structure, and a visual experience that feels like your brand. We shape the site around your business goals and the people you want to reach.",
    includes: [
      "Website structure and content direction",
      "Website design",
      "Website development",
    ],
  },
  {
    slug: "social-media-management",
    name: "Social media management",
    short: "Consistency that builds connection.",
    category: "Social",
    description:
      "Turn your social media into a business asset with consistent content that builds credibility, nurtures your audience, and attracts the right customers.",
    details:
      "We connect strategy with everyday execution, bringing structure to your content and maintaining a clear, recognisable brand presence across your social platforms.",
    includes: [
      "Social media audit and strategy",
      "Content calendars and caption writing",
      "Content planning and posting",
      "Audience engagement and event storytelling",
    ],
  },
];
export const pillars = [
  {
    name: "Understand",
    text: "Every engagement starts with understanding your audience, your vision, and your market. Strategy comes before design.",
  },
  {
    name: "Create",
    text: "We translate that direction into an intentional brand experience, from identity and websites to campaigns and content.",
  },
  {
    name: "Build",
    text: "Consistent execution brings it all together. Your brand shows up clearly across the touchpoints that matter to your business.",
  },
];
