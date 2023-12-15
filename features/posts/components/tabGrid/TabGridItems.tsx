import React from "react";

import { TabGridItem } from "@/features/posts/components/tabGrid/TabGridItem";
import { Article } from "@/services/article/article.types";

interface TabGridItemsProps {
  items: Article[];
}

export const TabGridItems = ({ items }: TabGridItemsProps) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <TabGridItem item={item} />
        </div>
      ))}
    </div>
  );
};
