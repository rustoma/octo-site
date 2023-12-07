import React from "react";

import { Container } from "@/components/container/Container";
import { GridImageTextMainItem } from "@/features/posts/components/gridImageText/GridImageTextMainItem";
import { GridImageTextSubItem } from "@/features/posts/components/gridImageText/GridImageTextSubItem";
import { Post } from "@/features/posts/types";

import "./gridImageText.style.scss";

interface GridImageTextProps {
  items: Post[];
}

export const GridImageText = ({ items }: GridImageTextProps) => {
  const [mainItem, ...subItems] = items;
  return (
    <section className="grid-it">
      <Container>
        <div className="grid-it__wrapper">
          <GridImageTextMainItem item={mainItem} />
          <div className="grid-it__sub-items-wrapper">
            {subItems.map((item) => (
              <GridImageTextSubItem key={`${item.title + item.url}`} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
