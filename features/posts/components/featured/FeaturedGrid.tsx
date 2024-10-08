import React from "react";

import { Container } from "@/components/container/Container";
import { getDictionary } from "@/dictionaries/dictionaries";
import { FeaturedGridMainItem } from "@/features/posts/components/featured/FeaturedGridMainItem";
import { GridImageTextSubItem } from "@/features/posts/components/gridImageText/GridImageTextSubItem";
import { Article } from "@/services/article/article.types";

import "./featuredGrid.style.scss";

interface FeaturedGridProps {
  items: Article[];
  isOnDark?: boolean;
}

export const FeaturedGrid = async ({ items, isOnDark = false }: FeaturedGridProps) => {
  const t = await getDictionary();

  if (Array.isArray(items) && !items.length) return null;

  const featuredPosts = items.slice(0, 5);
  const [mainPost, ...subPosts] = featuredPosts;

  return (
    <section className="featured-grid">
      <Container>
        <h2 className="featured-grid__title">{t.featuredGrid.title}</h2>
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
