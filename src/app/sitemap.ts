import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://movetheworld.co";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/programmes`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/impact`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/partners`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/updates`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/donate`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}

