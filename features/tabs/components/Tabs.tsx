import React from "react";

import { Tab } from "@/features/tabs/components/Tab";
import { TabClickCb, TabItem } from "@/features/tabs/types";

import "./tabs.style.scss";

interface TabsProps {
  items: TabItem[];
  activeTab: string;
  onTabClick: TabClickCb;
}

export const Tabs = ({ items, activeTab, onTabClick }: TabsProps) => {
  return (
    <ul className="tabs">
      {items.map((tab) => (
        <Tab key={`${tab.text + tab.value}`} tab={tab} isActive={activeTab === tab.value} onTabClick={onTabClick} />
      ))}
    </ul>
  );
};
