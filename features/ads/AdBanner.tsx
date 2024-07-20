"use client";

import React, { useEffect } from "react";

interface AdComponentProps {
  adSlot: string;
  adFormat?: "auto" | "autorelaxed";
  adLayout?: string;
  adResponsive?: boolean;
}

const AdBanner: React.FC<AdComponentProps> = ({ adSlot, adFormat = "auto", adLayout = "", adResponsive = "" }) => {
  useEffect(() => {
    try {
      /* eslint-disable  @typescript-eslint/no-explicit-any */
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Error loading ads:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6904919818397768"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-ad-layout={adLayout}
      data-full-width-responsive={`${adResponsive ?? ""}`}></ins>
  );
};

export default AdBanner;
