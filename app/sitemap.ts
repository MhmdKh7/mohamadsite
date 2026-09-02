import type { MetadataRoute } from "next";
import { categoryInfo } from "@/lib/category-info";
import { getAllArticleSlugs } from "@/lib/bearing-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rollmachine.ir";
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bearing-info`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brand/zdk`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(categoryInfo).map(
    (slug) => ({
      url: `${baseUrl}/category/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const articleRoutes: MetadataRoute.Sitemap = getAllArticleSlugs().map(
    (slug) => ({
      url: `${baseUrl}/bearing-info/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const brandRoutes: MetadataRoute.Sitemap = ["skf", "fag", "nsk", "timken", "ntn", "koyo", "ina"].map((slug) => ({ url: `${baseUrl}/brand/${slug}`, lastModified, changeFrequency: "monthly", priority: 0.7 }));
  return [...staticRoutes, ...categoryRoutes, ...articleRoutes, ...brandRoutes];
}
