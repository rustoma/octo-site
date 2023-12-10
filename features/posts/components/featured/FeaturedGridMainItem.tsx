import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Category } from "@/features/posts/components/category/Category";
import { PostMeta } from "@/features/posts/components/postMeta/PostMeta";
import { Post } from "@/features/posts/types";

import "./featuredGridMainItem.style.scss";

interface FeaturedGridMainItemProps {
  item: Post;
}

export const FeaturedGridMainItem = ({ item }: FeaturedGridMainItemProps) => {
  const { url, imageUrl, title, category, author } = item;

  return (
    <div className="featured-grid__item featured-grid__main-item">
      <Link href={url}>
        <div className="featured-grid__main-item-image">
          <Image src={imageUrl} alt="#" fill style={{ objectFit: "cover" }} />
        </div>
      </Link>

      <div className="featured-grid__main-item-content">
        <Category url={category.url} name={category.title} />
        <h4 className="featured-grid__title featured-grid__main-item-title">
          <Link href="#">{title}</Link>
        </h4>
        <div className="featured-grid__post-meta-wrapper">
          <PostMeta author={author} />
        </div>
      </div>
    </div>
  );
};
