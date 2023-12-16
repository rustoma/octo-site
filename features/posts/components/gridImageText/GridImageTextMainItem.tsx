import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Category } from "@/features/posts/components/category/Category";
import { Article } from "@/services/article/article.types";

import "./gridImageTextMainItem.style.scss";

interface GridImageTextMainItemProps {
  item: Article;
}

export const GridImageTextMainItem = ({ item }: GridImageTextMainItemProps) => {
  return (
    <div className="grid-it__item grid-it__main-item">
      <Link href={`/${item.category.slug}/${item.slug}`} className="grid-it__main-item-image">
        {item.thumbnail && (
          <Image
            src={process.env.NEXT_PUBLIC_BACKEND_HOST + item.thumbnail.path}
            alt={item.title}
            fill
            style={{ objectFit: "cover", backgroundPosition: "center" }}
          />
        )}
      </Link>

      <div className="grid-it__main-item-content">
        <Category url={`/${item.category.slug}`} name={item.category.name} />
        <h3 className="grid-it__title grid-it__main-item-title">
          <Link href={`/${item.category.slug}/${item.slug}`}>{item.title}</Link>
        </h3>
      </div>
    </div>
  );
};
