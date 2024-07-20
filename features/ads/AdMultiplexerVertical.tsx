import React, { useCallback, useState } from "react";

import AdBanner from "@/features/ads/AdBanner";

import "./adMultiplexerVertical.style.scss";

export const AdMultiplexerVertical = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleAdUnfilled = useCallback(() => setIsBannerVisible(false), [setIsBannerVisible]);

  if (!isBannerVisible) {
    return null;
  }

  return (
    // <aside className="ad-multi-vertical">
    <AdBanner
      adSlot="7791135465"
      adFormat="autorelaxed"
      height={540}
      onAdUnfilled={handleAdUnfilled}
      className="ad-multi-vertical"
    />
    // </aside>
  );
};
