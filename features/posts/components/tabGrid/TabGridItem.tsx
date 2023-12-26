import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Category } from "@/features/posts/components/category/Category";
import { Article } from "@/services/article/article.types";

import "./tabGridItem.style.scss";

interface TabGridItemProps {
  item: Article;
}

export const TabGridItem = ({ item }: TabGridItemProps) => {
  return (
    <div className="tab-grid-item">
      <div className="tab-grid-item__thumbnail">
        <Link href={`/${item.category.slug}/${item.slug}`}>
          {item.thumbnail && (
            <Image
              src={process.env.NEXT_PUBLIC_BACKEND_HOST + item.thumbnail.path}
              alt={item.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="100px"
            />
          )}
        </Link>
      </div>
      <div className="tab-grid-item__content">
        <div className="tab-grid-item__category">
          <Category url={`/${item.category.slug}`} name={item.category.name} />
        </div>
        <h4 className="tab-grid-item__title">
          <Link href={`/${item.category.slug}/${item.slug}`}>{item.title}</Link>
        </h4>
      </div>
    </div>
  );
};
