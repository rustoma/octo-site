import React from "react";

import { Container } from "@/components/container/Container";
import { GridImageTextSubItem } from "@/features/posts/components/gridImageText/GridImageTextSubItem";
import { Article } from "@/services/article/article.types";

import "./relatedItems.style.scss";

interface RelatedItemsProps {
  items: Article[];
}

export const RelatedItems = ({ items }: RelatedItemsProps) => {
  return (
    <div className="related-items">
      <Container>
        <h2 className="related-items__title ">Podobne artykuły</h2>
        <div className="related-items__content">
          {items.map((item) => (
            <GridImageTextSubItem key={item.id} item={item} isOnDark />
          ))}
        </div>
      </Container>
    </div>
  );
};
