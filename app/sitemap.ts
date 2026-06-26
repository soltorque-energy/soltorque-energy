import type { MetadataRoute } from "next";
import { seoProductPages } from "@/lib/seo-products";
import { navItems, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainPages = navItems.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: item.href === "/" ? 1 : 0.8
  }));

  const productPages = seoProductPages.map((page) => ({
    url: `${site.url}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [...mainPages, ...productPages];
}
