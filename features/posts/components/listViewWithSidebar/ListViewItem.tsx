import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Chip } from "@/features/chip/components/Chip";
import { CHIP_LABELS } from "@/features/chip/consts";
import { Category } from "@/features/posts/components/category/Category";
import { PostMeta } from "@/features/posts/components/postMeta/PostMeta";
import { Article } from "@/services/article/article.types";

import "./listViewItem.style.scss";

interface ListViewItemProps {
  item: Article;
}

export const ListViewItem = ({ item }: ListViewItemProps) => {
  const { thumbnail, slug, title, category, author, isSponsored } = item;

  return (
    <div className="list-view-item">
      <div className="list-view-item__thumbnail">
        {thumbnail && (
          <Link href={`/${category.slug}/${slug}`}>
            <Image
              src={process.env.NEXT_PUBLIC_BACKEND_HOST + thumbnail.path}
              alt={item.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 767px) 100vw, 400px"
            />
          </Link>
        )}
      </div>
      <div className="list-view-item__content">
        <div>
          <Category url={`/${category.slug}`} name={category.name} />
          <h3 className="list-view-item__title h4">
            <Link href={`/${category.slug}/${slug}`}>{title}</Link>
          </h3>
          {isSponsored && (
            <div className="list-view-item__chip-wrapper">
              <Chip label={CHIP_LABELS.sponsored} size="sm" />
            </div>
          )}
        </div>

        <div className="list-view-item__post-meta">
          <PostMeta author={author} date={item.updatedAt} readingTime={item.readingTime ?? undefined} />
        </div>
      </div>
    </div>
  );
};
