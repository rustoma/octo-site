import React from "react";

interface PostMetaProps {
  author: Author;
  isOnDark?: boolean;
}

import { Avatar } from "@/features/author/components/Avatar";
import { Author } from "@/features/author/types";
import { PostMetaList } from "@/features/posts/components/postMeta/PostMetaList";

import "./postMeta.style.scss";

export const PostMeta = ({ author, isOnDark = false }: PostMetaProps) => {
  const { name, imageUrl } = author;

  return (
    <div className="post-meta">
      <div className="post-meta__avatar">
        <Avatar imageUrl={imageUrl} />
      </div>
      <div className="post-meta__content">
        <h6 className="post-meta__author-name">{name}</h6>
        <PostMetaList isOnDark={isOnDark} date="January 20, 2021" readingTime={4} />
      </div>
    </div>
  );
};
