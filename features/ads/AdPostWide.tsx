import React from "react";

import { Container } from "@/components/container/Container";
import AdBanner from "@/features/ads/AdBanner";

import "./adPostWide.style.scss";

export const AddPostWide = () => {
  return (
    <aside className="ad-post-wide">
      <Container>
        <AdBanner adSlot="8825015537" adFormat="auto" adResponsive />
      </Container>
    </aside>
  );
};
