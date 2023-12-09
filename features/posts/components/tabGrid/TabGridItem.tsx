import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Category } from "@/features/posts/components/category/Category";
import { Post } from "@/features/posts/types";

import "./tabGridItem.style.scss";

interface TabGridItemProps {
  item: Post;
}

export const TabGridItem = ({ item }: TabGridItemProps) => {
  return (
    <div className="tab-grid-item">
      <div className="tab-grid-item__thumbnail">
        <Link href={item.url}>
          <Image src={item.imageUrl} alt="#" width={100} height={100} />
        </Link>
      </div>
      <div className="tab-grid-item__content">
        <div className="tab-grid-item__category">
          <Category url={item.category.url} name={item.category.title} />
        </div>
        <h4 className="tab-grid-item__title">
          <Link href={item.url}>{item.title}</Link>
        </h4>
      </div>
    </div>
  );
};
