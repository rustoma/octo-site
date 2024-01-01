import React from "react";

import { Container } from "@/components/container/Container";
import { GridImageTextMainItem } from "@/features/posts/components/gridImageText/GridImageTextMainItem";
import { GridImageTextSubItem } from "@/features/posts/components/gridImageText/GridImageTextSubItem";
import { Article } from "@/services/article/article.types";

import "./gridImageText.style.scss";

interface GridImageTextProps {
  items: Article[];
  priority?: boolean;
}

export const GridImageText = ({ items, priority }: GridImageTextProps) => {
  const [mainItem, ...subItems] = items;

  return (
    <section className="grid-it">
      <Container>
        <div className="grid-it__wrapper">
          {mainItem && <GridImageTextMainItem item={mainItem} priority={priority} />}
          <div className="grid-it__sub-items-wrapper">
            {subItems.map((item) => (
              <GridImageTextSubItem key={`${item.title + `${item.category.slug}/${item.slug}`}`} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
