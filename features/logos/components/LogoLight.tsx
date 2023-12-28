import React, { ReactElement } from "react";

import { FloorServiceLight } from "@/features/logos/components/floorService/FloorServiceLight";
import { getDomainId } from "@/utils";

const LOGOS: Record<string, ReactElement> = {
  1: <FloorServiceLight />,
};

export const LogoLight = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
