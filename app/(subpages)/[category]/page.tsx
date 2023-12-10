import React from "react";
import Image from "next/image";

import { Container } from "@/components/container/Container";
import { Author } from "@/features/author/types";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { ListViewItem } from "@/features/posts/components/listViewWithSidebar/ListViewItem";
import { Category, Post } from "@/features/posts/types";
import { Advertisement } from "@/features/widgets/components/advertisment/Advertisement";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";

import "./page.style.scss";

const AUTHORS: Author[] = [
  {
    id: 1,
    name: "John",
    imageUrl: "https://picsum.photos/100/100",
  },
];

const categories: Category[] = [
  {
    id: 1,
    title: "Technology",
    url: "#",
  },
  {
    id: 2,
    title: "Mobile",
    url: "#",
  },
  {
    id: 3,
    title: "Android Dev",
    url: "#",
  },
  {
    id: 4,
    title: "Blockchain",
    url: "#",
  },
];

const gridItItems: Post[] = [
  {
    id: 11,
    title: "Rocket Lab mission fails shortly after launch",
    url: "#",
    imageUrl: "https://picsum.photos/650/650",
    category: categories[0],
    author: AUTHORS[0],
  },
  {
    id: 12,
    title: "Rocket Lab mission fails shortly after launch",
    url: "#",
    imageUrl: "https://picsum.photos/300/200",
    category: categories[0],
    author: AUTHORS[0],
  },
  {
    id: 13,
    title: "Rocket Lab mission fails shortly after launch",
    url: "#2",
    imageUrl: "https://picsum.photos/300/200",
    category: categories[0],
    author: AUTHORS[0],
  },
  {
    id: 14,
    title: "Rocket Lab mission fails shortly after launch",
    url: "#3",
    imageUrl: "https://picsum.photos/300/200",
    category: categories[0],
    author: AUTHORS[0],
  },
  {
    id: 15,
    title: "Rocket Lab mission fails shortly after launch",
    url: "#5",
    imageUrl: "https://picsum.photos/300/200",
    category: categories[0],
    author: AUTHORS[0],
  },
];

const CategoryPage = () => {
  return (
    <>
      <SimpleBanner title="Mobile" />
      <Container>
        <div className="category-page">
          <div className="category-page__content">
            {gridItItems.map((item) => (
              <ListViewItem key={item.id} item={item} />
            ))}
            <div className="category-page__content-advertisement">
              <Image src="/img/jpg/advertisement-long.jpg" alt="reklama" width={810} height={115} />
            </div>
          </div>
          <div className="category-page__sidebar">
            <TagsCloud />
            <Advertisement />
          </div>
        </div>
      </Container>
    </>
  );
};

export default CategoryPage;
