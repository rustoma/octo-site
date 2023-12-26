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
          <Image
            src={process.env.NEXT_PUBLIC_BACKEND_HOST + item.thumbnail.path}
            alt={item.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 330px, (max-width: 1199px) 450px, 300px"
          />
        )}
      </Link>
      <div className="grid-it__sub-item-content">
        <Category url={`/${item.category.slug}`} name={item.category.name} />
        <h3 className={clsx("grid-it__title h5", isOnDark && "grid-it__title--light")}>
          <Link href={`/${item.category.slug}/${item.slug}`}>{item.title}</Link>
        </h3>
      </div>
    </div>
  );
};
