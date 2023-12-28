import React, { ReactElement } from "react";

import { FloorServiceDark } from "@/features/logos/components/floorService/FloorServiceDark";
import { getDomainId } from "@/utils";

const LOGOS: Record<string, ReactElement> = {
  1: <FloorServiceDark />,
};

export const LogoDark = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
