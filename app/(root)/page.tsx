import React from "react";

import { Container } from "@/components/container/Container";
import { GridImageText, GridImageTextItem } from "@/features/posts/components/gridImageText/GridImageText";

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
      <Container>
        <GridImageText items={gridItItems} />
      </Container>
    </main>
  );
}
