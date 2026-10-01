export const site = {
  name: "Kohi Design Studio",
  shortName: "Kohi",
  founder: "Serena Tyrrell",
  tagline: "Rooted brands & websites for female founders",
  location: "Montréal, Canada",
  working: "Working worldwide",
  email: "serena@kohidesignstudio.com",
  founded: "September 2021",
  booking: {
    status: "Fully booked for 2026",
    reopening: "Bookings estimated to reopen December 2026 for work starting early 2027.",
    waitlistYear: "2027",
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/kohi.design/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/serena-tyrrell/" },
    { label: "Pinterest", href: "https://ca.pinterest.com/kohidesignstudio/" },
    { label: "TikTok", href: "https://www.tiktok.com/@kohidesign" },
  ],
  url: "https://kohidesignstudio.com",
} as const;

export const navPrimary = [
  { label: "Services", href: "/services", index: "01" },
  { label: "Work", href: "/portfolio", index: "02" },
  { label: "Method", href: "/method", index: "03" },
  { label: "About", href: "/about", index: "04" },
  { label: "Journal", href: "/blog", index: "05" },
  { label: "FAQ", href: "/faq", index: "06" },
] as const;
