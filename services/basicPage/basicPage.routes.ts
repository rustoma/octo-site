import { BasicPageBySlugFilters } from "@/services/basicPage/basicPage.types";
import { getDomainId, removeEmptyStringValuesFromObj } from "@/utils";

export const BASIC_PAGE_ROUTES = {
  bySlug: (slug: string, filters?: BasicPageBySlugFilters) => {
    const domainId = getDomainId();

    const baseRoute = `/basic-page/slug/${slug}?domainId=${domainId}`;

    if (!filters) return baseRoute;

    const queryParams = removeEmptyStringValuesFromObj({ domainId, ...filters } as Record<string, string>);
    if (!Object.keys(queryParams).length) return baseRoute;

    const search = new URLSearchParams(queryParams);

    return `/basic-page/slug/${slug}?${search}`;
  },
};
