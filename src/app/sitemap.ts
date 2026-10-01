import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const statics = ["", "/services", "/method", "/portfolio", "/about", "/blog", "/faq", "/contact", "/waitlist", "/love"];
  return [
    ...statics.map((p) => ({ url: `${base}${p || "/"}`, lastModified: new Date() })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() })),
    ...projects.map((p) => ({ url: `${base}/portfolio/${p.slug}`, lastModified: new Date() })),
    ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date() })),
  ];
}
