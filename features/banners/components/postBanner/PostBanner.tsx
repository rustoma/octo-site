import React from "react";

import { Category } from "@/features/posts/components/category/Category";
import { PostMeta } from "@/features/posts/components/postMeta/PostMeta";
import { Author } from "@/services/author/author.types";
import { Category as CategoryType } from "@/services/category/category.types";

import "./postBanner.style.scss";

interface PostBannerProps {
  title: string;
  category: CategoryType;
  author: Author;
}

export const PostBanner = ({ title, category, author }: PostBannerProps) => {
  return (
    <div className="post-banner">
      <Category name={category.name} url={`/${category.slug}`} />
      <h1 className="post-banner__title">{title}</h1>
      <PostMeta author={author} />
    </div>
  );
};
