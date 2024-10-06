import React from "react";

interface PostMetaListProps {
  date: string;
  readingTime?: number;
  isOnDark?: boolean;
}

import clsx from "clsx";

import { PostMetaListReadingTime } from "@/features/posts/components/postMeta/PostMetaListReadingTime";

import "./postMetaList.style.scss";

const PostMetaListDate = ({ date }: { date: string }) => {
  const renderDate = (date: string) => {
    const dateObject = new Date(date);
    return `${dateObject.getDate()} ${dateObject.toLocaleString(process.env.LANGUAGE === "de" ? "de-DE" : "pl-Pl", {
      month: "long",
    })} ${dateObject.getFullYear()}`;
  };

  return <li className="post-meta-list__date">{renderDate(date)}</li>;
};

export const PostMetaList = ({ date, readingTime, isOnDark }: PostMetaListProps) => {
  return (
    <ul className={clsx("post-meta-list", isOnDark && "post-meta-list--light")}>
      {date && <PostMetaListDate date={date} />}
      {(readingTime || readingTime === 0) && <PostMetaListReadingTime readingTime={readingTime} />}
    </ul>
  );
};
