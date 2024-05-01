import { artstylmodern404Sitemap } from "@/features/sitemaps/404/artstylmodern";
import { cawio404Sitemap } from "@/features/sitemaps/404/cawio";
import { krismet404Sitemap } from "@/features/sitemaps/404/krismet";
import { getDomainId } from "@/utils";

const get404Sitemap = (domainId: string) => {
  switch (domainId) {
    case "10": {
      return artstylmodern404Sitemap;
    }
    case "8": {
      return krismet404Sitemap;
    }
    case "5": {
      return cawio404Sitemap;
    }
    default: {
      return undefined;
    }
  }
};

export default async function sitemap() {
  const domainId = getDomainId();

  const sitemap = get404Sitemap(domainId);
  if (!sitemap) return [];

  const sitemapNextJs: { url: string }[] = sitemap.urlset.url.map((item) => ({
    url: item.loc.replace("&", "&amp;"),
  }));
  return sitemapNextJs;
}
