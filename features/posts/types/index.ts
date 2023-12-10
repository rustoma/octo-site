import { Author } from "@/features/author/types";

export interface Category {
  id: number;
  title: string;
  url: string;
}

export interface Post {
  id: string | number;
  title: string;
  url: string;
  imageUrl: string;
  category: Category;
  author: Author;
}
