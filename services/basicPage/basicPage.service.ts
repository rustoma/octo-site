import { httpClient } from "@/features/http";
import { BASIC_PAGE_ROUTES } from "@/services/basicPage/basicPage.routes";
import { BasicPage, BasicPageBySlugFilters, BasicPagesFilters } from "@/services/basicPage/basicPage.types";

export const getBasicPages = async (filters?: BasicPagesFilters): Promise<BasicPage[] | null> => {
  const res = await httpClient.get(BASIC_PAGE_ROUTES.index(filters));
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const getBasicPageBySlug = async (slug: string, filters?: BasicPageBySlugFilters): Promise<BasicPage | null> => {
  const res = await httpClient.get(BASIC_PAGE_ROUTES.bySlug(slug, filters));
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json();
};
