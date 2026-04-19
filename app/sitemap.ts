import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cozynestbylidia.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/the-reset`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/the-reset/included`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/mommy-reset`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/add-ons`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
