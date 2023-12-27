import React, { ReactElement } from "react";

import { OctoDark } from "@/features/logos/components/octo/OctoDark";
import { getDomainId } from "@/utils";

const LOGOS: Record<string, ReactElement> = {
  1: <OctoDark />,
};

export const LogoDark = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
