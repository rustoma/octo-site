import React from "react";

import { Container } from "@/components/container/Container";
import AdBanner from "@/features/ads/AdBanner";
import { AdMultiplexerVertical } from "@/features/ads/AdMultiplexerVertical";
import { ListViewItem } from "@/features/posts/components/listViewWithSidebar/ListViewItem";
import { StickyWidget } from "@/features/widgets/components/stickyWidget/StickyWidget";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { Article } from "@/services/article/article.types";

import "./listViewWithSidebar.style.scss";

interface ListViewWithSidebarProps {
  items: Article[];
}

export const ListViewWithSidebar = ({ items }: ListViewWithSidebarProps) => {
  return (
    <section className="list-view">
      <Container>
        <div className="list-view__wrapper">
          <div>
            <AdBanner adSlot="8825015537" adFormat="auto" adResponsive />

            {items.map((item) => (
              <ListViewItem key={item.id} item={item} />
            ))}
          </div>
          <div className="list-view__sidebar">
            <TagsCloud />
            <StickyWidget>
              <AdMultiplexerVertical />
            </StickyWidget>
          </div>
        </div>
      </Container>
    </section>
  );
};
