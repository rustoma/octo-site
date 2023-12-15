import React from "react";

import { Container } from "@/components/container/Container";
import { FeaturedGridMainItem } from "@/features/posts/components/featured/FeaturedGridMainItem";
import { GridImageTextSubItem } from "@/features/posts/components/gridImageText/GridImageTextSubItem";
import { Article } from "@/services/article/article.types";

import "./featuredGrid.style.scss";

interface FeaturedGridProps {
  items: Article[];
  isOnDark?: boolean;
}

export const FeaturedGrid = ({ items, isOnDark = false }: FeaturedGridProps) => {
  const featuredPosts = items.slice(0, 5);
  const [mainPost, ...subPosts] = featuredPosts;

  return (
    <section className="featured-grid">
      <Container>
        <h2 className="featured-grid__title">Polecane Artykuły</h2>
        <div className="featured-grid__wrapper">
          <FeaturedGridMainItem item={mainPost} isOnDark={isOnDark} />
          <div className="featured-grid__sub-items-wrapper">
            {subPosts.map((post) => (
              <GridImageTextSubItem isOnDark key={post.id} item={post} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
