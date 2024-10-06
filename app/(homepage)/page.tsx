import React from "react";

import { getDictionary } from "@/dictionaries/dictionaries";
import { AdHomeWide } from "@/features/ads/AdHomeWide";
import { FeaturedGrid } from "@/features/posts/components/featured/FeaturedGrid";
import { GridImageText } from "@/features/posts/components/gridImageText/GridImageText";
import { ListViewWithSidebar } from "@/features/posts/components/listViewWithSidebar/ListViewWithSidebar";
import { TabGrid } from "@/features/posts/components/tabGrid/TabGrid";
import { TabItem } from "@/features/tabs/types";
import { getArticles } from "@/services/article/article.service";
import { Article } from "@/services/article/article.types";
import { getCategoriesByDomain } from "@/services/category/category.service";
import { getDomainId } from "@/utils";

import "./page.style.scss";

export const metadata = {
  alternates: {
    canonical: "",
  },
};

export default async function Home() {
  const domainId = getDomainId();

  const t = await getDictionary();

  const articles = await getArticles({ limit: "5" });
  const featuredArticles = await getArticles({ featured: "true", limit: "5" });

  const categories = await getCategoriesByDomain(domainId);

  const TABS: TabItem[] =
    categories?.map((category) => ({
      text: category.name,
      value: category.slug,
    })) ?? [];

  const tabGridItems: Record<string, Article[] | null> = {};

  for (const category of categories ?? []) {
    try {
      tabGridItems[category.slug] = await getArticles({ categoryId: `${category.id}`, limit: "6" });
    } catch (err) {
      console.log({ err });
      tabGridItems[category.slug] = null;
    }
  }

  return (
    <main className="content">
      <GridImageText items={articles ?? []} priority />
      <AdHomeWide />
      <TabGrid tabs={TABS} items={tabGridItems} title={t.tabGrid.title} emptyStateTitle={t.tabGrid.emptyStateTitle} />
      <FeaturedGrid isOnDark items={featuredArticles ?? []} />
      <AdHomeWide />
      <ListViewWithSidebar items={articles ?? []} />
      <div className="home-page-advertisement">
        <AdHomeWide />
      </div>
    </main>
  );
}
