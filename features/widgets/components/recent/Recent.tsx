import React from "react";
import Image from "next/image";
import Link from "next/link";

import { PostMetaList } from "@/features/posts/components/postMeta/PostMetaList";
import { getArticles } from "@/services/article/article.service";

import "./recent.style.scss";

export const Recent = async () => {
  const articles = (await getArticles({ limit: "3" })) ?? [];

  return (
    <div className="recent-widget">
      <h5 className="recent-widget__title">Najnowsze</h5>
      <div className="recent-widget__items">
        {articles.map((item) => (
          <div key={item.id} className="recent-widget-item">
            <div className="recent-widget-item__thumbnail">
              <Link href={`/${item.category.slug}/${item.slug}`}>
                {item.thumbnail && (
                  <Image
                    src={process.env.NEXT_PUBLIC_BACKEND_HOST + item.thumbnail.path}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="150px"
                  />
                )}
              </Link>
            </div>
            <div className="recent-widget-item__content">
              <h6 className="recent-widget-item__title">
                <Link href={`/${item.category.slug}/${item.slug}`}>{item.title}</Link>
              </h6>
              <PostMetaList date={item.updatedAt} readingTime={item.readingTime ?? undefined} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
