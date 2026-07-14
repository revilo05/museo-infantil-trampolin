import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { getBaseUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: getBaseUrl(),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Museo Infantil Trampolín" }],
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
