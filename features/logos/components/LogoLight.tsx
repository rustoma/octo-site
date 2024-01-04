import React, { ReactElement } from "react";

import { FloorServiceLight } from "@/features/logos/components/floorService/FloorServiceLight";
import { RoofServiceLight } from "@/features/logos/components/roofService/RoofServiceLight";
import { getDomainId } from "@/utils";

const LOGOS: Record<string, ReactElement> = {
  1: <FloorServiceLight />,
  2: <RoofServiceLight />,
};

export const LogoLight = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
