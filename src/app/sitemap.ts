import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    "",
    "/services",
    "/portfolio",
    "/about",
    "/college",
    "/resources",
    "/contact",
    "/faq",
    ...services.map((s) => `/services/${s.slug}`),
    ...projects.map((p) => `/portfolio/${p.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path || "/"}` }));
}
