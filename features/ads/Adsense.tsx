"use client";

import React from "react";
import Script from "next/script";

export const Adsense = () => {
  return (
    <>
      <Script
        id="ads-banner"
        async
        strategy="lazyOnload"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6904919818397768`}
        crossOrigin="anonymous"
      />
    </>
  );
};
