import { httpClient } from "@/features/http";
import { ARTICLE_ROUTES } from "@/services/article/article.routes";
import { Article, ArticleFilters } from "@/services/article/article.types";

export const getArticles = async (filters?: ArticleFilters): Promise<Article[]> => {
  const res = await httpClient.get(ARTICLE_ROUTES.index(filters));
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json();
};
