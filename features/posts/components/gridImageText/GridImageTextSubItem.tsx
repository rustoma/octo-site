import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Category } from "@/features/posts/components/category/Category";
import { Post } from "@/features/posts/types";

import "./gridImageText.style.scss";
import "./gridImageTextSubItem.style.scss";

interface GridImageTextSubItemProps {
  item: Post;
  isOnDark?: boolean;
}

export const GridImageTextSubItem = ({ item, isOnDark = false }: GridImageTextSubItemProps) => {
  return (
    <div className="grid-it__item grid-it__sub-item">
      <Link href={item.category.url} className="grid-it__sub-item-image">
        <Image src={item.imageUrl} alt="#" width={285} height={190} />
      </Link>
      <div className="grid-it__sub-item-content">
        <Category url={item.category.url} name={item.category.title} />
        <h5 className={clsx("grid-it__title", isOnDark && "grid-it__title--light")}>
          <Link href="#">{item.title}</Link>
        </h5>
      </div>
    </div>
  );
};
