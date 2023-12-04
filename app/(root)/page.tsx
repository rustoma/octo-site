import React from "react";

import { GridImageText, GridImageTextItem } from "@/features/posts/components/gridImageText/GridImageText";
import { TabGrid } from "@/features/posts/components/tabGrid/TabGrid";

import "./page.style.scss";

const gridItItems: GridImageTextItem[] = [
  {
    title: "Rocket Lab mission fails shortly after launch",
    url: "#",
    imageUrl: "https://picsum.photos/650/650",
    category: {
      title: "Technology",
      url: "#",
    },
  },
  {
    title: "Rocket Lab mission fails shortly after launch",
    url: "#",
    imageUrl: "https://picsum.photos/300/200",
    category: {
      title: "Technology",
      url: "#",
    },
  },
  {
    title: "Rocket Lab mission fails shortly after launch",
    url: "#2",
    imageUrl: "https://picsum.photos/300/200",
    category: {
      title: "Technology",
      url: "#",
    },
  },
  {
    title: "Rocket Lab mission fails shortly after launch",
    url: "#3",
    imageUrl: "https://picsum.photos/300/200",
    category: {
      title: "Technology",
      url: "#4",
    },
  },
  {
    title: "Rocket Lab mission fails shortly after launch",
    url: "#5",
    imageUrl: "https://picsum.photos/300/200",
    category: {
      title: "Technology",
      url: "#",
    },
  },
];

export default function Home() {
  return (
    <main className="content">
      <GridImageText items={gridItItems} />
      <TabGrid />
    </main>
  );
}
