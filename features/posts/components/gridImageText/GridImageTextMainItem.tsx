import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Category } from "@/features/posts/components/category/Category";
import { Post } from "@/features/posts/types";

import "./gridImageTextMainItem.style.scss";

interface GridImageTextMainItemProps {
  item: Post;
}

export const GridImageTextMainItem = ({ item }: GridImageTextMainItemProps) => {
  return (
    <div className="grid-it__item grid-it__main-item">
      <Link href={item.url}>
        <Image src={item.imageUrl} alt="#" width={750} height={750} />
      </Link>

      <div className="grid-it__main-item-content">
        <Category url={item.category.url} name={item.category.title} />
        <h3 className="grid-it__title grid-it__main-item-title">
          <Link href="#">{item.title}</Link>
        </h3>
      </div>
    </div>
  );
};
