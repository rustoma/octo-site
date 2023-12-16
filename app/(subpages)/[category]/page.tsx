import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { ListViewItem } from "@/features/posts/components/listViewWithSidebar/ListViewItem";
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

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const category = await getCategories({ slug: params.category });
  if (!category?.[0]) return notFound();
  const articles = await getArticles({ limit: "5", categoryId: category[0].id.toString() });

  return (
    <>
      <SimpleBanner title={category[0].name} />
      <Container>
        <div className="category-page">
          <div className="category-page__content">
            {!articles && <div>Brak artykułów dla danej kategorii</div>}

            {articles?.map((article) => (
              <ListViewItem key={article.id} item={article} />
            ))}
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
