import { ArticleFilters } from "@/services/article/article.types";
import { getDomainId, removeEmptyStringValuesFromObj } from "@/utils";

export const ARTICLE_ROUTES = {
  index: (filters?: ArticleFilters) => {
    const domainId = getDomainId();
    const baseRoute = `/articles?domainId=${domainId}`;
    if (!filters) return baseRoute;
    const queryParams = removeEmptyStringValuesFromObj({ domainId, ...filters } as Record<string, string>);

    if (!Object.keys(queryParams).length) return baseRoute;

    const search = new URLSearchParams(queryParams);
    return `/articles?${search}`;
  },
};
