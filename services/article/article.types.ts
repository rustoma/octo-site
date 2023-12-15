import { Author } from "@/services/author/author.types";
import { Category } from "@/services/category/category.types";
import { Image } from "@/services/image/image.types";

export interface Article {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  thumbnail: Image | null;
  publicationDate: string | null;
  isPublished: boolean;
  author: Author;
  category: Category;
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
