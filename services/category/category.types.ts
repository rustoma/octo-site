export interface Category {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryFilters {
  slug?: string;
}
