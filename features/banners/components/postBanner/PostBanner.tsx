import React from "react";

import { Author } from "@/features/author/types";
import { Category } from "@/features/posts/components/category/Category";
import { PostMeta } from "@/features/posts/components/postMeta/PostMeta";
import { Category as CategoryType } from "@/features/posts/types";
interface PostBannerProps {
  title: string;
  category: CategoryType;
  author: Author;
}

import "./postBanner.style.scss";

export const PostBanner = ({ title, category, author }: PostBannerProps) => {
  return (
    <div className="post-banner">
      <Category name={category.title} url={category.url} />
      <h1 className="post-banner__title">{title}</h1>
      <PostMeta author={author} />
    </div>
  );
};
