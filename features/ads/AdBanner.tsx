"use client";

import React, { useEffect, useRef, useState } from "react";

interface AdComponentProps {
  adSlot: string;
  adFormat?: "auto" | "autorelaxed";
  adLayout?: string;
  adResponsive?: boolean;
  height?: number;
  className?: string;
}

const AdBanner: React.FC<AdComponentProps> = ({
  height,
  adSlot,
  adFormat = "auto",
  adLayout = "",
  adResponsive = "",
  className,
}) => {
  const adRef = useRef<HTMLModElement | null>(null);

  const [isBannerVisible, setIsBannerVisible] = useState(true);

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

  console.log("Atr", adRef.current?.getAttribute("data-ad-status"));

  if (adRef.current && adRef.current?.getAttribute("data-ad-status") === "unfilled") {
    setIsBannerVisible(false);
  }

  if (!isBannerVisible) {
    return null;
  }

  return (
    <ins
      ref={adRef}
      className={className}
      style={{ display: "block", overflow: "hidden", height: height ? `${height}px` : "auto" }}
      data-ad-client="ca-pub-6904919818397768"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-ad-layout={adLayout}
      data-full-width-responsive={`${adResponsive ?? "false"}`}></ins>
  );
};

export default AdBanner;
