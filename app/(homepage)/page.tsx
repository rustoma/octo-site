import React from "react";
import Image from "next/image";

import { Container } from "@/components/container/Container";
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
      <TabGrid tabs={TABS} items={tabGridItems} />
      <FeaturedGrid isOnDark items={featuredArticles ?? []} />
      <ListViewWithSidebar items={articles ?? []} />
      <div className="home-page-advertisement">
        <Container>
          <Image src="/img/jpg/advertisement-long-3.jpg" alt="reklama" width={1230} height={200} />
        </Container>
      </div>
    </main>
  );
}
