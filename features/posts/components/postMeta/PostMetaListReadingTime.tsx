"use client";

import React from "react";

import { useDictionary } from "@/context/DictionaryContext";

import "./postMetaList.style.scss";

export const PostMetaListReadingTime = ({ readingTime }: { readingTime: number }) => {
  const { t } = useDictionary();

  return (
    <li className="post-meta-list__reading-time">
      {readingTime < 1 && t.postMetaListDate.singleReadingTime}
      {readingTime >= 1 && `${readingTime} ${t.postMetaListDate.pluralReadingTime}`}
    </li>
  );
};
