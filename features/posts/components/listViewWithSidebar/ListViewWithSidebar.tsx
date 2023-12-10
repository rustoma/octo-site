import React from "react";

interface ListViewWithSidebarProps {
  items: Post[];
}

import Image from "next/image";

import { Container } from "@/components/container/Container";
import { ListViewItem } from "@/features/posts/components/listViewWithSidebar/ListViewItem";
import { Post } from "@/features/posts/types";
import { Advertisement } from "@/features/widgets/components/advertisment/Advertisement";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";

import "./listViewWithSidebar.style.scss";

export const ListViewWithSidebar = ({ items }: ListViewWithSidebarProps) => {
  return (
    <section className="list-view">
      <Container>
        <div className="list-view__wrapper">
          <div>
            <Image src="/img/jpg/advertisement-big.jpg" alt="reklama" width={810} height={210} />
            {items.map((item) => (
              <ListViewItem key={item.id} item={item} />
            ))}
          </div>
          <div className="list-view__sidebar">
            <TagsCloud />
            <Advertisement />
          </div>
        </div>
      </Container>
    </section>
  );
};
