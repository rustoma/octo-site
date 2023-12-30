import { getArticles } from "@/services/article/article.service";
import { getBasicPages } from "@/services/basicPage/basicPage.service";
import { getCategoriesByDomain } from "@/services/category/category.service";
import { getDomainId } from "@/utils";

export default async function sitemap() {
  const domainId = getDomainId();

  const categories = await getCategoriesByDomain(domainId);
  const postByCategories = categories
    ? await Promise.all(categories.map((category) => getArticles({ categoryId: `${category.id}`, limit: "6" })))
    : [];

  const basicPages = await getBasicPages();

  const categoryPages = categories
    ? categories.map((category) => ({
        url: `${process.env.FRONTEND_HOST}/${category.slug}`,
        lastModified: new Date().toISOString(),
        priority: 0.8,
      }))
    : [];

  const postPages = categories
    ? categories.map((category, index) => {
        return postByCategories[index]
          ? postByCategories[index]?.map((post) => ({
              url: `${process.env.FRONTEND_HOST}/${category.slug}/${post.slug}`,
              lastModified: new Date(post.updatedAt).toISOString(),
              priority: 1,
            }))
          : [];
      })
    : [];

  const basicPagesRoutes = basicPages
    ? basicPages.map((page) => ({
        url: `${process.env.FRONTEND_HOST}/${page.slug}`,
        lastModified: new Date(page.updatedAt).toISOString(),
        priority: 0.8,
      }))
    : [];

  const staticRoutes = [""].map((route) => ({
    url: `${process.env.FRONTEND_HOST}${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
  }));

  return [...staticRoutes, ...basicPagesRoutes, ...categoryPages, ...postPages.flat()];
}
