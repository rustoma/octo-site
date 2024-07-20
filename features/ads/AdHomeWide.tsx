import React from "react";

import { Container } from "@/components/container/Container";
import AdBanner from "@/features/ads/AdBanner";

import "./adHomeWide.style.scss";

export const AdHomeWide = () => {
  return (
    <Container>
      {/*<aside className="ad-wide-home">*/}
      <AdBanner adSlot="8825015537" adFormat="auto" adResponsive className="ad-wide-home" />
      {/*</aside>*/}
    </Container>
  );
};
