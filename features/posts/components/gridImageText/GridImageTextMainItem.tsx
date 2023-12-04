import React from "react";
import Image from "next/image";
import Link from "next/link";

import { GridImageTextItem } from "@/features/posts/components/gridImageText/GridImageText";

import "./gridImageText.style.scss";
import "./gridImageTextMainItem.style.scss";

interface GridImageTextMainItemProps {
  item: GridImageTextItem;
}

export const GridImageTextMainItem = ({ item }: GridImageTextMainItemProps) => {
  return (
    <div className="grid-it__item grid-it__main-item">
      <Link href={item.url}>
        <Image src={item.imageUrl} alt="#" width={650} height={650} />
      </Link>

      <div className="grid-it__main-item-content">
        <Link href={item.category.url} className="grid-it__category grid-it__main-item-category">
          {item.category.title}
        </Link>
        <h3 className="grid-it__title grid-it__main-item-title">
          <Link href="#">{item.title}</Link>
        </h3>
      </div>
    </div>
  );
};
