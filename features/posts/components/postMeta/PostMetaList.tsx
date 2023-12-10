import React from "react";

interface PostMetaListProps {
  date: string;
  readingTime: number;
  isOnDark?: boolean;
}

import clsx from "clsx";

import "./postMetaList.style.scss";

const PostMetaListDate = ({ date }: { date: string }) => <li className="post-meta-list__date">{date}</li>;
const PostMetaListReadingTime = ({ readingTime }: { readingTime: number }) => (
  <li className="post-meta-list__reading-time">{readingTime} minuty czytania</li>
);

export const PostMetaList = ({ date, readingTime, isOnDark }: PostMetaListProps) => {
  return (
    <ul className={clsx("post-meta-list", isOnDark && "post-meta-list--light")}>
      {date && <PostMetaListDate date={date} />}
      {readingTime && <PostMetaListReadingTime readingTime={readingTime} />}
    </ul>
  );
};
