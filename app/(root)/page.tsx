import React from "react";

import { Author } from "@/features/author/types";
import { FeaturedGrid } from "@/features/posts/components/featured/FeaturedGrid";
import { GridImageText } from "@/features/posts/components/gridImageText/GridImageText";
import { TabGrid } from "@/features/posts/components/tabGrid/TabGrid";
import { Category, Post } from "@/features/posts/types";
import { TabItem } from "@/features/tabs/types";

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

const TABS: TabItem[] = [
  {
    text: categories[0].title,
    value: categories[0].title,
  },
  {
    text: categories[1].title,
    value: categories[1].title,
  },
];

const TAB_GRID_ITEMS: Post[] = [
  {
    id: 1,
    title: "The new Moto G Stylus and G Power are surprisingly adept cameraphones",
    url: "#",
    imageUrl: "https://picsum.photos/750/750",
    category: categories[0],
    author: AUTHORS[0],
  },
  {
    id: 2,
    title: "Motorola Moto E (2020) and Moto G Fast review: smartphone basics",
    url: "#",
    imageUrl: "https://picsum.photos/100/100",
    category: categories[0],
    author: AUTHORS[0],
  },
  {
    id: 3,
    title: "Oppo Find X2 Pro Review: Supercar Smartphone",
    url: "#",
    imageUrl: "https://picsum.photos/100/100",
    category: categories[0],
    author: AUTHORS[0],
  },
  {
    id: 4,
    title: "Dell XPS 15 (2020) Review: New Design, Familiar Problems",
    url: "#",
    imageUrl: "https://picsum.photos/100/100",
    category: categories[0],
    author: AUTHORS[0],
  },
  {
    id: 5,
    title: "Virtual Reality or Artificial Intelligence Technology",
    url: "#",
    imageUrl: "https://picsum.photos/100/100",
    category: categories[0],
    author: AUTHORS[0],
  },
];

const TAB_GRID_ITEMS_MOBILE: Post[] = [
  {
    id: 6,
    title: "Rocket Lab mission fails shortly after launch",
    url: "#",
    imageUrl: "https://picsum.photos/650/650",
    category: categories[1],
    author: AUTHORS[0],
  },
  {
    id: 7,
    title: "Rocket Lab mission fails shortly after launch",
    url: "#",
    imageUrl: "https://picsum.photos/300/200",
    category: categories[1],
    author: AUTHORS[0],
  },
  {
    id: 8,
    title: "Rocket Lab mission fails shortly after launch",
    url: "#2",
    imageUrl: "https://picsum.photos/300/200",
    category: categories[1],
    author: AUTHORS[0],
  },
  {
    id: 9,
    title: "Rocket Lab mission fails shortly after launch",
    url: "#3",
    imageUrl: "https://picsum.photos/300/200",
    category: categories[1],
    author: AUTHORS[0],
  },
  {
    id: 10,
    title: "Rocket Lab mission fails shortly after launch",
    url: "#5",
    imageUrl: "https://picsum.photos/300/200",
    category: categories[1],
    author: AUTHORS[0],
  },
];

export default function Home() {
  return (
    <main className="content">
      <GridImageText items={gridItItems} />
      <TabGrid
        tabs={TABS}
        items={{ [categories[0].title]: TAB_GRID_ITEMS, [categories[1].title]: TAB_GRID_ITEMS_MOBILE }}
      />
      <FeaturedGrid isOnDark items={gridItItems} />
    </main>
  );
}
