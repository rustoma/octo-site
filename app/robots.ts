import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: process.env.FRONTEND_HOST,
    sitemap: `${process.env.FRONTEND_HOST}/sitemap.xml`,
  };
}
