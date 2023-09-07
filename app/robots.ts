import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://octo.pl",
    sitemap: "https://octo.pl/sitemap.xml",
  };
}
