import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/data/site";

const routes = [
  "",
  "/conoce-el-museo",
  "/trampolin-inclusivo",
  "/preguntas-frecuentes",
  "/contacto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  return routes.map((route) => ({
    url: new URL(route || "/", baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
