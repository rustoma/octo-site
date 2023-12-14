import { ArticleFilters } from "@/services/article/article.types";
import { removeEmptyStringValuesFromObj } from "@/utils";

export const ARTICLE_ROUTES = {
  index: (filters?: ArticleFilters) => {
    const baseRoute = "/articles";
    if (!filters) return baseRoute;

    const queryParams = removeEmptyStringValuesFromObj(filters as Record<string, string>);
    if (!Object.keys(queryParams).length) return baseRoute;

    const search = new URLSearchParams(queryParams);
    return `${baseRoute}?${search}`;
  },
};
