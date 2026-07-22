import type { MetadataRoute } from "next";
import { activities } from "@/data/activities";
import { rooms } from "@/data/rooms";
import { getBaseUrl } from "@/data/site";

const routes = [
  "",
  "/conoce-el-museo",
  "/trampolin-inclusivo",
  "/preguntas-frecuentes",
  "/contacto",
  "/salas",
  "/actividades",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: new URL(route || "/", baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const moduleRoutes = [
    ...rooms.map((room) => `/salas/${room.slug}`),
    ...activities.map((activity) => `/actividades/${activity.slug}`),
  ].map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...moduleRoutes];
}
