export interface Category {
  title: string;
  url: string;
}

export interface Post {
  title: string;
  url: string;
  imageUrl: string;
  category: Category;
}
