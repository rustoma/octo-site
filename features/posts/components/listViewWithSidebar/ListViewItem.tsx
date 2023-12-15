import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Category } from "@/features/posts/components/category/Category";
import { PostMeta } from "@/features/posts/components/postMeta/PostMeta";
import { Article } from "@/services/article/article.types";

import "./listViewItem.style.scss";

interface ListViewItemProps {
  item: Article;
}

export const ListViewItem = ({ item }: ListViewItemProps) => {
  const { thumbnail, slug, title, category, author } = item;

  return (
    <div className="list-view-item">
      <div className="list-view-item__thumbnail">
        {thumbnail && (
          <Link href={`/${category.slug}/${slug}`}>
            <Image src={process.env.NEXT_PUBLIC_BACKEND_HOST + thumbnail.path} alt="#" fill />
          </Link>
        )}
      </div>
      <div className="list-view-item__content">
        <div>
          <Category url={`/${category.slug}`} name={category.name} />
          <h4 className="list-view-item__title">
            <Link href={`/${category.slug}/${slug}`}>{title}</Link>
          </h4>
        </div>

        <div className="list-view-item__post-meta">
          <PostMeta author={author} />
        </div>
      </div>
    </div>
  );
};
