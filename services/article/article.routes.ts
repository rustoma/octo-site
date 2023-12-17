import { ArticleFilters } from "@/services/article/article.types";
import { getDomainId, removeEmptyStringValuesFromObj } from "@/utils";

const BASE_ROUTE = "/articles";

export const ARTICLE_ROUTES = {
  index: (filters?: ArticleFilters) => {
    const domainId = getDomainId();
    if (!filters) return BASE_ROUTE;
    const queryParams = removeEmptyStringValuesFromObj({ domainId, ...filters } as Record<string, string>);

    if (!Object.keys(queryParams).length) return BASE_ROUTE;

    const search = new URLSearchParams(queryParams);

    return `${BASE_ROUTE}?${search}`;
  },
};
