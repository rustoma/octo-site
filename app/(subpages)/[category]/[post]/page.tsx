import React from "react";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import { PostBanner } from "@/features/banners/components/postBanner/PostBanner";
import { Breadcrumbs } from "@/features/breadcrumbs/components/Breadcrumbs";
import { Advertisement } from "@/features/widgets/components/advertisment/Advertisement";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { getArticles } from "@/services/article/article.service";
import { getCategories } from "@/services/category/category.service";

import "./page.style.scss";

export const generateStaticParams = async () => {
  const categories = await getCategories();

  return categories?.map((category) => ({
    category: category.slug,
  }));
};

const PostPage = async ({ params }: { params: { category: string; post: string } }) => {
  const article = await getArticles({ slug: params.post });
  if (!article?.[0]) notFound();
  const { title, description, category, author } = article[0];

  return (
    <Container>
      <div className="post-page">
        <div className="post-page__content">
          <PostBanner title={title} category={category} author={author} />
          <div className="post-page__breadcrumbs">
            <Breadcrumbs currentPageTitle={title} />
          </div>
          <div>{parse(description ?? "")}</div>
        </div>
        <div className="post-page__sidebar">
          <TagsCloud />
          <Advertisement />
        </div>
      </div>
    </Container>
  );
};

export default PostPage;
