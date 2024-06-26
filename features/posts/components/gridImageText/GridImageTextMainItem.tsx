import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Chip } from "@/features/chip/components/Chip";
import { CHIP_LABELS } from "@/features/chip/consts";
import { Category } from "@/features/posts/components/category/Category";
import { Article } from "@/services/article/article.types";

import "./gridImageTextMainItem.style.scss";

interface GridImageTextMainItemProps {
  item: Article;
  priority?: boolean;
}

export const GridImageTextMainItem = ({ item, priority = false }: GridImageTextMainItemProps) => {
  return (
    <div className="grid-it__item grid-it__main-item">
      <Link href={`/${item.category.slug}/${item.slug}`} className="grid-it__main-item-image">
        {item.thumbnail && (
          <Image
            src={process.env.NEXT_PUBLIC_BACKEND_HOST + item.thumbnail.path}
            alt={item.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 690px, (max-width: 1199px) 930px, 900px"
            priority={priority}
          />
        )}
      </Link>

      <div className="grid-it__main-item-content">
        <Category url={`/${item.category.slug}`} name={item.category.name} />
        <h3 className="grid-it__title grid-it__main-item-title h5">
          <Link href={`/${item.category.slug}/${item.slug}`}>{item.title}</Link>
        </h3>
        {item.isSponsored && (
          <div className="grid-it__chip-wrapper">
            <Chip label={CHIP_LABELS.sponsored} size="xs" />
          </div>
        )}
      </div>
    </div>
  );
};
