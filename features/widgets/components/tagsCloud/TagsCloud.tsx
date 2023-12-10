import React from "react";
import Link from "next/link";

import { Category } from "@/features/posts/types";

import "./tagsCloud.style.scss";

const categories: Category[] = [
  {
    id: 1,
    title: "Technology",
    url: "#",
  },
  {
    id: 2,
    title: "Mobile",
    url: "#",
  },
  {
    id: 3,
    title: "Android Dev",
    url: "#",
  },
  {
    id: 4,
    title: "Blockchain",
    url: "#",
  },
];

export const TagsCloud = () => {
  return (
    <div className="tags-cloud">
      <h5 className="tags-cloud__title">Kategorie</h5>
      <div className="tags-cloud__items">
        {categories.map((item) => (
          <Link key={item.id} href={item.url} className="tags-cloud__item">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
