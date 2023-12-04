import React from "react";

interface CategoryProps {
  name: string;
  url: string;
}

import Link from "next/link";

import "./category.style.scss";

export const Category = ({ name, url }: CategoryProps) => {
  return (
    <Link href={url} className="category">
      {name}
    </Link>
  );
};
