import { BasicPageBySlugFilters, BasicPagesFilters } from "@/services/basicPage/basicPage.types";
import { getDomainId, removeEmptyStringValuesFromObj } from "@/utils";

export const BASIC_PAGE_ROUTES = {
  index: (filters?: BasicPagesFilters) => {
    const domainId = getDomainId();
    const baseRoute = `/basic-pages?domainId=${domainId}`;

    if (!filters) return baseRoute;

    const queryParams = removeEmptyStringValuesFromObj({ domainId, ...filters } as Record<string, string>);
    if (!Object.keys(queryParams).length) return baseRoute;

    const search = new URLSearchParams(queryParams);

    return `/basic-pages?${search}`;
  },
  bySlug: (slug: string, filters?: BasicPageBySlugFilters) => {
    const domainId = getDomainId();

    const baseRoute = `/basic-pages/slug/${slug}?domainId=${domainId}`;

    if (!filters) return baseRoute;

    const queryParams = removeEmptyStringValuesFromObj({ domainId, ...filters } as Record<string, string>);
    if (!Object.keys(queryParams).length) return baseRoute;

    const search = new URLSearchParams(queryParams);

    return `/basic-pages/slug/${slug}?${search}`;
  },
};
