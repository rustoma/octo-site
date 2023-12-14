export interface Article {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  thumbnail: number | null;
  publicationDate: string | null;
  isPublished: boolean;
  authorId: number;
  categoryId: number;
  domainId: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ArticleFilters {
  categoryId?: string;
  limit?: string;
  featured?: string;
  slug?: string;
}
