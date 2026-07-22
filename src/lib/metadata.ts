import type { Metadata } from "next";
import { getBaseUrl, siteConfig } from "@/data/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
  image,
}: PageMetadataInput): Metadata {
  const url = new URL(path, getBaseUrl()).toString();
  const socialImage = image
    ? new URL(image, getBaseUrl()).toString()
    : undefined;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: !noIndex, follow: true },
    openGraph: {
      type: "website",
      locale: "es_DO",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: socialImage ? [{ url: socialImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: socialImage ? [socialImage] : undefined,
    },
  };
}
