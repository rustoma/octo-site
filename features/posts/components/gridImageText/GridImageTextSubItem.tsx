import React from "react";
import Image from "next/image";
import Link from "next/link";

import { GridImageTextItem } from "@/features/posts/components/gridImageText/GridImageText";

import "./gridImageText.style.scss";
import "./gridImageTextSubItem.style.scss";

interface GridImageTextSubItemProps {
  item: GridImageTextItem;
}

export const GridImageTextSubItem = ({ item }: GridImageTextSubItemProps) => {
  return (
    <div className="grid-it__item grid-it__sub-item">
      <Link href={item.category.url} className="grid-it__sub-item-image">
        <Image src={item.imageUrl} alt="#" width={285} height={190} />
      </Link>
      <div className="grid-it__sub-item-content">
        <Link href={item.category.url} className="grid-it__category">
          {item.category.title}
        </Link>
        <h5 className="grid-it__title">
          <Link href="#">{item.title}</Link>
        </h5>
      </div>
    </div>
  );
};
