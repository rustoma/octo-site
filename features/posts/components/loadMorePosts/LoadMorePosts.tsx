"use client";

import React, { useState } from "react";

import { Button } from "@/components/button/Button";
import { httpPublicClient } from "@/features/http";
import { ListViewItem } from "@/features/posts/components/listViewWithSidebar/ListViewItem";
import { Article } from "@/services/article/article.types";

import "./loadMorePosts.style.scss";

interface LoadMorePostsProps {
  category: number;
  initialOffset: number;
  limit?: number;
}

export const LoadMorePosts = ({ category, initialOffset, limit = 10 }: LoadMorePostsProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isMore, setIsMore] = useState(true);

  const loadMoreArticles = async () => {
    try {
      setisError(false);
      setisLoading(true);
      const res = await httpPublicClient.get(
        `/articles?limit=${limit}&offset=${initialOffset + offset}&categoryId=${category}`
      );
      if (!res.ok) {
        return setisError(false);
      }

      const articles = await res.json();
      if (articles) {
        setArticles((prev) => [...prev, ...articles]);
        setOffset((prev) => prev + limit);
      }

      if (!articles) {
        setIsMore(false);
      }
    } catch (err) {
      setisError(true);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <>
      {articles?.map((article) => (
        <ListViewItem key={article.id} item={article} />
      ))}
      <div className="additional-posts">
        {isError && <div className="additional-posts__error">Przepraszamy, nie udało się pobrać artykułów.</div>}
        {isMore && (
          <Button fit style="tertiary" variant="outline" onClick={() => loadMoreArticles()} loading={isLoading}>
            Pokaż więcej
          </Button>
        )}
      </div>
    </>
  );
};
