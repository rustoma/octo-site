import { CategoryFilters } from "@/services/category/category.types";
import { removeEmptyStringValuesFromObj } from "@/utils";

export const CATEGORY_ROUTES = {
  index: (filters?: CategoryFilters) => {
    const baseRoute = "/categories";
    if (!filters) return baseRoute;

    const queryParams = removeEmptyStringValuesFromObj(filters as Record<string, string>);
    if (!Object.keys(queryParams).length) return baseRoute;

    const search = new URLSearchParams(queryParams);
    return `${baseRoute}?${search}`;
  },
  byDomain: (domainId: number | string) => `/domain-categories/${domainId}`,
};
