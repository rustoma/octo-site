import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Category } from "@/features/posts/components/category/Category";
import { Article } from "@/services/article/article.types";

import "./gridImageText.style.scss";
import "./gridImageTextSubItem.style.scss";

interface GridImageTextSubItemProps {
  item: Article;
  isOnDark?: boolean;
}

export const GridImageTextSubItem = ({ item, isOnDark = false }: GridImageTextSubItemProps) => {
  return (
    <div className="grid-it__item grid-it__sub-item">
      <Link href={`/${item.category.slug}/${item.slug}`} className="grid-it__sub-item-image">
        {item.thumbnail && (
          <Image src={process.env.NEXT_PUBLIC_BACKEND_HOST + item.thumbnail.path} alt="#" width={285} height={190} />
        )}
      </Link>
      <div className="grid-it__sub-item-content">
        <Category url={`/${item.category.slug}`} name={item.category.name} />
        <h5 className={clsx("grid-it__title", isOnDark && "grid-it__title--light")}>
          <Link href={`/${item.category.slug}/${item.slug}`}>{item.title}</Link>
        </h5>
      </div>
    </div>
  );
};
