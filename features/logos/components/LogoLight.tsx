import React, { ReactElement } from "react";

import { CawioLight } from "@/features/logos/components/cawio/CawioLight";
import { FinanceObrLight } from "@/features/logos/components/financeObr/FinanceObrLight";
import { FloorServiceLight } from "@/features/logos/components/floorService/FloorServiceLight";
import { MaximLight } from "@/features/logos/components/maxim/MaximLight";
import { RoofServiceLight } from "@/features/logos/components/roofService/RoofServiceLight";
import { getDomainId } from "@/utils";

const LOGOS: Record<string, ReactElement> = {
  1: <FloorServiceLight />,
  2: <RoofServiceLight />,
  3: <FinanceObrLight />,
  4: <MaximLight />,
  5: <CawioLight />,
};

export const LogoLight = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
