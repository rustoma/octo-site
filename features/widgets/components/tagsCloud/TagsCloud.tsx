import React from "react";
import Link from "next/link";

import { getCategories } from "@/services/category/category.service";

import "./tagsCloud.style.scss";

export const TagsCloud = async () => {
  const categories = await getCategories();
  if (!categories) return null;

  return (
    <div className="tags-cloud">
      <h5 className="tags-cloud__title">Kategorie</h5>
      <div className="tags-cloud__items">
        {categories.map((item) => (
          <Link key={item.id} href={`/${item.slug}`} className="tags-cloud__item">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
