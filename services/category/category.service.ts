import { httpClient } from "@/features/http";
import { CATEGORY_ROUTES } from "@/services/category/category.routes";
import { Category, CategoryFilters } from "@/services/category/category.types";

export const getCategories = async (filters?: CategoryFilters): Promise<Category[] | null> => {
  const res = await httpClient.get(CATEGORY_ROUTES.index(filters));
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const getCategoriesByDomain = async (domainId: number | string): Promise<Category[] | null> => {
  const res = await httpClient.get(CATEGORY_ROUTES.byDomain(domainId));
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json();
};
