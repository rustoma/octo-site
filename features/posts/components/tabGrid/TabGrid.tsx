"use client";

import React, { useState } from "react";

import { Container } from "@/components/container/Container";
import { TabGridContent } from "@/features/posts/components/tabGrid/TabGridContent";
import { Post } from "@/features/posts/types";
import { Tabs } from "@/features/tabs/components/Tabs";
import { TabItem } from "@/features/tabs/types";

import "./tabGrid.style.scss";

interface TabGridProps {
  tabs: TabItem[];
  items: Record<string, Post[]>;
}

export const TabGrid = ({ tabs, items }: TabGridProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value);

  return (
    <section className="tab-grid">
      <Container>
        <h2 className="tab-grid__title">Top Stories</h2>
        <div className="tab-grid__tabs">
          <Tabs items={tabs} activeTab={activeTab} onTabClick={(value) => setActiveTab(value)} />
        </div>

        {(!items[activeTab] || (Array.isArray(items[activeTab]) && !items[activeTab].length)) && (
          <div className="tab-grid__empty">
            <p>Brak nowych postów.</p>
          </div>
        )}

        {Object.keys(items).map((item) => (
          <TabGridContent key={item} items={items[item]} isActive={activeTab === item} />
        ))}
      </Container>
    </section>
  );
};
