import React from "react";
import clsx from "clsx";

import { GridImageTextMainItem } from "@/features/posts/components/gridImageText/GridImageTextMainItem";
import { TabGridItems } from "@/features/posts/components/tabGrid/TabGridItems";
import { Post } from "@/features/posts/types";

interface TabContentProps {
  items?: Post[];
  isActive: boolean;
}

export const TabGridContent = ({ items, isActive }: TabContentProps) => {
  if (!items || (Array.isArray(items) && !items.length)) {
    return null;
  }

  return (
    <div className={clsx("tab-grid__items", isActive && "tab-grid__items--active")}>
      {items[0] && <GridImageTextMainItem item={items[0]} />}
      {items.length > 1 && <TabGridItems items={items.slice(1)} />}
    </div>
  );
};
