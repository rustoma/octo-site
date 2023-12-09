import React from "react";

import { TabGridItem } from "@/features/posts/components/tabGrid/TabGridItem";
import { Post } from "@/features/posts/types";

interface TabGridItemsProps {
  items: Post[];
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
