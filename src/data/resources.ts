export const resources = [
  {
    slug: "visibility-blueprint",
    name: "The Visibility Blueprint",
    category: "Brand visibility",
    description:
      "Find a clearer direction for how your brand shows up and gets noticed.",
    accent: "pink",
    symbol: "01",
  },
  {
    slug: "build-faster-with-ai",
    name: "Build Faster with AI",
    category: "AI & workflows",
    description:
      "Explore how AI can support your creative work and business workflows.",
    accent: "brown",
    symbol: "02",
  },
  {
    slug: "content-calendar-template",
    name: "Content Calendar Template",
    category: "Content planning",
    description:
      "Bring more structure and intention to the content you plan for your brand.",
    accent: "cream",
    symbol: "03",
  },
  {
    slug: "the-vault",
    name: "The Vault",
    category: "Business resources",
    description:
      "Explore a resource from SBC's collection for founders building their brands.",
    accent: "pink",
    symbol: "04",
  },
].map((resource) => ({ ...resource, usd: 25, ngn: 20000 }));
