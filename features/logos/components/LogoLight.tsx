import React, { ReactElement } from "react";

import { OctoLight } from "@/features/logos/components/octo/OctoLight";
import { getDomainId } from "@/utils";

const LOGOS: Record<string, ReactElement> = {
  1: <OctoLight />,
};

export const LogoLight = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
