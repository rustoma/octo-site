import React from "react";

interface PostMetaListProps {
  date: string;
  readingTime?: number;
  isOnDark?: boolean;
}

import clsx from "clsx";

import { getDictionary } from "@/dictionaries/dictionaries";

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
const PostMetaListReadingTime = async ({ readingTime }: { readingTime: number }) => {
  const t = await getDictionary();

  return (
    <li className="post-meta-list__reading-time">
      {readingTime < 1 && t.postMetaListDate.singleReadingTime}
      {readingTime >= 1 && `${readingTime} ${t.postMetaListDate.pluralReadingTime}`}
    </li>
  );
};

export const PostMetaList = ({ date, readingTime, isOnDark }: PostMetaListProps) => {
  return (
    <ul className={clsx("post-meta-list", isOnDark && "post-meta-list--light")}>
      {date && <PostMetaListDate date={date} />}
      {(readingTime || readingTime === 0) && <PostMetaListReadingTime readingTime={readingTime} />}
    </ul>
  );
};
