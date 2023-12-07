import React from "react";

import { GridImageText } from "@/features/posts/components/gridImageText/GridImageText";
import { TabGrid } from "@/features/posts/components/tabGrid/TabGrid";
import { Post } from "@/features/posts/types";
import { TabItem } from "@/features/tabs/types";

import "./page.style.scss";

const gridItItems: Post[] = [
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

const TABS: TabItem[] = [
  {
    text: "Accessibility",
    value: "accessibility",
  },
  {
    text: "Android Dev",
    value: "android-dev",
  },
  {
    text: "Blockchain",
    value: "blockchain",
  },
];

const TAB_GRID_ITEMS: Post[] = [
  {
    title: "The new Moto G Stylus and G Power are surprisingly adept cameraphones",
    url: "#",
    imageUrl: "https://picsum.photos/750/750",
    category: {
      title: "Mobile",
      url: "#",
    },
  },
  {
    title: "Motorola Moto E (2020) and Moto G Fast review: smartphone basics",
    url: "#",
    imageUrl: "https://picsum.photos/100/100",
    category: {
      title: "Mobile",
      url: "#",
    },
  },
  {
    title: "Oppo Find X2 Pro Review: Supercar Smartphone",
    url: "#",
    imageUrl: "https://picsum.photos/100/100",
    category: {
      title: "Mobile",
      url: "#",
    },
  },
  {
    title: "Dell XPS 15 (2020) Review: New Design, Familiar Problems",
    url: "#",
    imageUrl: "https://picsum.photos/100/100",
    category: {
      title: "Mobile",
      url: "#",
    },
  },
  {
    title: "Virtual Reality or Artificial Intelligence Technology",
    url: "#",
    imageUrl: "https://picsum.photos/100/100",
    category: {
      title: "Mobile",
      url: "#",
    },
  },
];

export default function Home() {
  return (
    <main className="content">
      <GridImageText items={gridItItems} />
      <TabGrid tabs={TABS} items={TAB_GRID_ITEMS} />
    </main>
  );
}
