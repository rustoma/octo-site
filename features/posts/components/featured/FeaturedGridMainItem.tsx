import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Chip } from "@/features/chip/components/Chip";
import { CHIP_LABELS } from "@/features/chip/consts";
import { Category } from "@/features/posts/components/category/Category";
import { PostMeta } from "@/features/posts/components/postMeta/PostMeta";
import { Article } from "@/services/article/article.types";

import "./featuredGridMainItem.style.scss";

interface FeaturedGridMainItemProps {
  item: Article;
  isOnDark?: boolean;
}

export const FeaturedGridMainItem = ({ item, isOnDark = false }: FeaturedGridMainItemProps) => {
  const { slug, thumbnail, title, category, author } = item;

  return (
    <div className="featured-grid__item featured-grid__main-item">
      <Link href={`/${category.slug}/${slug}`}>
        {thumbnail && (
          <div className="featured-grid__main-item-image">
            <Image
              src={process.env.NEXT_PUBLIC_BACKEND_HOST + thumbnail.path}
              alt={item.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 690px, (max-width: 1199px) 930px, 600px"
            />
          </div>
        )}
      </Link>

      <div className="featured-grid__main-item-content">
        <Category url={`/${category.slug}`} name={category.name} />
        <h3 className="featured-grid__title featured-grid__main-item-title h4">
          <Link href={`/${category.slug}/${slug}`}>{title}</Link>
        </h3>
        {item.isSponsored && (
          <div className="featured-grid__chip-wrapper">
            <Chip label={CHIP_LABELS.sponsored} size="xs" />
          </div>
        )}
        <div className="featured-grid__post-meta-wrapper">
          <PostMeta
            author={author}
            isOnDark={isOnDark}
            readingTime={item.readingTime ?? undefined}
            date={item.updatedAt}
          />
        </div>
      </div>
    </div>
  );
};
