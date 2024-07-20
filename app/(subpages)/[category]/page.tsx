import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import AdBanner from "@/features/ads/AdBanner";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { ListViewItem } from "@/features/posts/components/listViewWithSidebar/ListViewItem";
import { LoadMorePosts } from "@/features/posts/components/loadMorePosts/LoadMorePosts";
import { StickyWidget } from "@/features/widgets/components/stickyWidget/StickyWidget";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { getArticles } from "@/services/article/article.service";
import { getCategories, getCategoriesByDomain } from "@/services/category/category.service";
import { getDomainId } from "@/utils";

import "./page.style.scss";

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const { category } = params;
  const domainId = getDomainId();
  const categoriesBySlug = await getCategories({ slug: category });

  return {
    metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
    title: `${categoriesBySlug?.[0].name ?? category} | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
    description: undefined,
    alternates: {
      canonical: category,
    },
    openGraph: {
      images: `/img/jpg/social-${domainId}.jpg`,
    },
  };
}

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const domainId = getDomainId();

  const LIMIT = 30;

  const categories = await getCategoriesByDomain(domainId);
  const category = categories?.find((category) => category.slug === params.category);

  if (!category) return notFound();
  const articles = await getArticles({
    limit: LIMIT.toString(),
    categoryId: category.id.toString(),
    excludeBody: "true",
  });

  return (
    <>
      <SimpleBanner title={category.name} />
      <Container>
        <div className="category-page">
          <div className="category-page__content">
            {!articles && <div>Brak artykułów dla danej kategorii</div>}

            {articles?.map((article) => (
              <ListViewItem key={article.id} item={article} />
            ))}

            {articles && articles.length === LIMIT ? (
              <LoadMorePosts initialOffset={LIMIT} limit={10} category={category.id} />
            ) : null}

            <div className="category-page__content-advertisement">
              <AdBanner adSlot="1225727110" adFormat="auto" adResponsive />
            </div>
          </div>
          <div className="category-page__sidebar">
            <TagsCloud />
            <StickyWidget>
              <AdBanner adSlot="7791135465" adFormat="autorelaxed" />
            </StickyWidget>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CategoryPage;
