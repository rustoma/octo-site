import React from "react";

interface ListViewItemProps {
  item: Post;
}

import Image from "next/image";
import Link from "next/link";

import { Category } from "@/features/posts/components/category/Category";
import { PostMeta } from "@/features/posts/components/postMeta/PostMeta";
import { Post } from "@/features/posts/types";

import "./listViewItem.style.scss";

export const ListViewItem = ({ item }: ListViewItemProps) => {
  const { imageUrl, url, title, category, author } = item;

  return (
    <div className="list-view-item">
      <div className="list-view-item__thumbnail">
        <Link href={url}>
          <Image src={imageUrl} alt="#" fill />
        </Link>
      </div>
      <div className="list-view-item__content">
        <div>
          <Category name={category.title} url={category.url} />
          <h4 className="list-view-item__title">
            <Link href={url}>{title}</Link>
          </h4>
        </div>

        <div className="list-view-item__post-meta">
          <PostMeta author={author} />
        </div>
      </div>
    </div>
  );
};
