import React, { useCallback, useState } from "react";

import { Container } from "@/components/container/Container";
import AdBanner from "@/features/ads/AdBanner";

import "./adHomeWide.style.scss";

export const AdHomeWide = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleAdUnfilled = useCallback(() => setIsBannerVisible(false), [setIsBannerVisible]);

  if (!isBannerVisible) {
    return null;
  }

  return (
    <Container>
      {/*<aside className="ad-wide-home">*/}
      <AdBanner
        adSlot="8825015537"
        adFormat="auto"
        adResponsive
        onAdUnfilled={handleAdUnfilled}
        className="ad-wide-home"
      />
      {/*</aside>*/}
    </Container>
  );
};
