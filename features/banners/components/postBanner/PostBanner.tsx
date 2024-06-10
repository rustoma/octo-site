import React from "react";

import { Chip } from "@/features/chip/components/Chip";
import { CHIP_LABELS } from "@/features/chip/consts";
import { Category } from "@/features/posts/components/category/Category";
import { PostMeta } from "@/features/posts/components/postMeta/PostMeta";
import { Author } from "@/services/author/author.types";
import { Category as CategoryType } from "@/services/category/category.types";

import "./postBanner.style.scss";

interface PostBannerProps {
  title: string;
  category: CategoryType;
  author: Author;
  date: string;
  isSponsored?: boolean;
  readingTime?: number;
}

export const PostBanner = ({ title, category, author, date, readingTime, isSponsored = false }: PostBannerProps) => {
  return (
    <div className="post-banner">
      <Category name={category.name} url={`/${category.slug}`} />
      <h1 className="post-banner__title">{title}</h1>
      {isSponsored && (
        <div className="post-banner__chip-wrapper">
          <Chip label={CHIP_LABELS.sponsored} />
        </div>
      )}
      <PostMeta author={author} date={date} readingTime={readingTime} />
    </div>
  );
};
