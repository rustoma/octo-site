import React from "react";
import clsx from "clsx";

import { Avatar } from "@/features/author/components/Avatar";
import { PostMetaList } from "@/features/posts/components/postMeta/PostMetaList";
import { Author } from "@/services/author/author.types";

import "./postMeta.style.scss";

interface PostMetaProps {
  author: Author;
  date: string;
  readingTime?: number;
  isOnDark?: boolean;
}

export const PostMeta = ({ author, date, readingTime, isOnDark = false }: PostMetaProps) => {
  const { firstName, lastName, imageUrl } = author;

  return (
    <div className="post-meta">
      <div className="post-meta__avatar">
        <Avatar imageUrl={imageUrl} />
      </div>
      <div className="post-meta__content">
        <h4
          className={clsx(
            "post-meta__author-name h6",
            isOnDark && "post-meta__author-name--light"
          )}>{`${firstName} ${lastName}`}</h4>
        <PostMetaList isOnDark={isOnDark} date={date} readingTime={readingTime} />
      </div>
    </div>
  );
};
