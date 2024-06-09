export interface Category {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  domainId: number;
}

export interface CategoryFilters {
  slug?: string;
  domainId?: string;
}
