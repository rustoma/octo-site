"use client";

import React, { useCallback, useState } from "react";

import { Container } from "@/components/container/Container";
import AdBanner from "@/features/ads/AdBanner";

import "./adPostWide.style.scss";

export const AddPostWide = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleAdUnfilled = useCallback(() => setIsBannerVisible(false), [setIsBannerVisible]);

  if (!isBannerVisible) {
    return null;
  }

  return (
    // <aside className="ad-post-wide">
    <Container>
      <AdBanner
        adSlot="8825015537"
        adFormat="auto"
        adResponsive
        onAdUnfilled={handleAdUnfilled}
        className="ad-post-wide"
      />
    </Container>
    // </aside>
  );
};
