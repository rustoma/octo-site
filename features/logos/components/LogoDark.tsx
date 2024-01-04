import React, { ReactElement } from "react";

import { FloorServiceDark } from "@/features/logos/components/floorService/FloorServiceDark";
import { RoofServiceLight } from "@/features/logos/components/roofService/RoofServiceLight";
import { getDomainId } from "@/utils";

const LOGOS: Record<string, ReactElement> = {
  1: <FloorServiceDark />,
  2: <RoofServiceLight />,
};

export const LogoDark = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
