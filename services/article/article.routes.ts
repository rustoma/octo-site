import { ArticleFilters } from "@/services/article/article.types";
import { getDomainId, removeEmptyStringValuesFromObj } from "@/utils";

export const ARTICLE_ROUTES = {
  index: (filters?: ArticleFilters) => {
    const domainId = getDomainId();
    const baseRoute = `/articles?domainId=${domainId}`;
    const isPublished = "true";
    if (!filters) return baseRoute;
    const queryParams = removeEmptyStringValuesFromObj({ domainId, ...filters, isPublished } as Record<string, string>);

    if (!Object.keys(queryParams).length) return baseRoute;

    const search = new URLSearchParams(queryParams);
    return `/articles?${search}`;
  },
};
