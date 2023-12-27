import React from "react";
import parse from "html-react-parser";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import { PostBanner } from "@/features/banners/components/postBanner/PostBanner";
import { Breadcrumbs } from "@/features/breadcrumbs/components/Breadcrumbs";
import { RelatedItems } from "@/features/posts/components/relatedItems/RelatedItems";
import { Advertisement } from "@/features/widgets/components/advertisment/Advertisement";
import { Recent } from "@/features/widgets/components/recent/Recent";
import { StickyWidget } from "@/features/widgets/components/stickyWidget/StickyWidget";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { getArticles } from "@/services/article/article.service";
import { getCategories } from "@/services/category/category.service";

import "./page.style.scss";

export const generateStaticParams = async ({ params: { category } }: { params: { category: string } }) => {
  const categoriesBySlug = await getCategories({ slug: category });
  const categoryForRoute = categoriesBySlug?.[0];

  if (categoryForRoute) {
    const articles = await getArticles({ categoryId: `${categoryForRoute.id}` });

    if (!articles) {
      return [];
    }

    return articles.map((post) => ({
      post: post.slug,
    }));
  }

  return [];
};

export async function generateMetadata({ params }: { params: { post: string } }): Promise<Metadata> {
  const { post } = params;
  const article = await getArticles({ slug: post });

  if (!article?.[0]) return {};

  const { title, slug } = article[0];

  return {
    metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
    title: `${title} | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
    description: undefined,
    alternates: {
      canonical: slug,
    },
    openGraph: {
      images: "/img/jpg/social.jpg",
    },
  };
}

const PostPage = async ({ params }: { params: { category: string; post: string } }) => {
  const article = await getArticles({ slug: params.post });
  if (!article?.[0]) notFound();
  const articlesFromTheSameCategory = await getArticles({ categoryId: article[0].category.id.toString(), limit: "5" });
  const relatedArticles = articlesFromTheSameCategory
    ? articlesFromTheSameCategory.filter((a) => a.id !== article[0].id)
    : [];
  const { title, body, category, author, readingTime, updatedAt } = article[0];

  return (
    <>
      <Container>
        <div className="post-page">
          <div className="post-page__content">
            <PostBanner
              title={title}
              category={category}
              author={author}
              readingTime={readingTime ?? undefined}
              date={updatedAt}
            />
            <div className="post-page__breadcrumbs">
              <Breadcrumbs currentPageTitle={title} />
            </div>
            <div>{parse(body ?? "")}</div>
          </div>
          <div className="post-page__sidebar">
            <TagsCloud />
            <StickyWidget fraction={0.3}>
              <Advertisement />
            </StickyWidget>
            <StickyWidget fraction={0.7}>
              <Recent />
            </StickyWidget>
          </div>
        </div>
      </Container>
      <RelatedItems items={relatedArticles} />
    </>
  );
};

export default PostPage;
