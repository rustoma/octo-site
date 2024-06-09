import { Author } from "@/services/author/author.types";
import { Category } from "@/services/category/category.types";
import { Image } from "@/services/image/image.types";

export interface Article {
  id: number;
  title: string;
  slug: string;
  body: string | null;
  thumbnail: Image | null;
  publicationDate: string | null;
  isPublished: boolean;
  author: Author;
  category: Category;
  domainId: number;
  featured: boolean;
  readingTime: number | null;
  isSponsored: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ArticleFilters {
  domainId?: string;
  categoryId?: string;
  limit?: string;
  offset?: string;
  featured?: string;
  slug?: string;
  excludeBody?: "true";
  isPublished?: "true" | "false";
}
