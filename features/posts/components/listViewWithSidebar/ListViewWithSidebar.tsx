import React from "react";
import Image from "next/image";

import { Container } from "@/components/container/Container";
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
            <Image src="/img/jpg/advertisement-big-2.jpg" alt="reklama" width={810} height={210} />
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
