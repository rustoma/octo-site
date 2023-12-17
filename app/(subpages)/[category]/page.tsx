import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { ListViewItem } from "@/features/posts/components/listViewWithSidebar/ListViewItem";
import { LoadMorePosts } from "@/features/posts/components/loadMorePosts/LoadMorePosts";
import { Advertisement } from "@/features/widgets/components/advertisment/Advertisement";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { getArticles } from "@/services/article/article.service";
import { getCategoriesByDomain } from "@/services/category/category.service";
import { getDomainId } from "@/utils";

import "./page.style.scss";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const domainId = getDomainId();

  const LIMIT = 5;

  const categories = await getCategoriesByDomain(domainId);
  const category = categories?.find((category) => category.slug === params.category);

  if (!category) return notFound();
  const articles = await getArticles({ limit: LIMIT.toString(), categoryId: category.id.toString() });

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
              <LoadMorePosts initialOffset={LIMIT} limit={5} category={category.id} />
            ) : null}

            <div className="category-page__content-advertisement">
              <Image src="/img/jpg/advertisement-long.jpg" alt="reklama" width={810} height={115} />
            </div>
          </div>
          <div className="category-page__sidebar">
            <TagsCloud />
            <Advertisement />
          </div>
        </div>
      </Container>
    </>
  );
};

export default CategoryPage;
