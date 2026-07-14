import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Museo Infantil Trampolín",
    short_name: "Trampolín",
    description:
      "Una experiencia educativa para descubrir, jugar y aprender.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf2",
    theme_color: "#123b55",
    lang: "es-DO",
  };
}
