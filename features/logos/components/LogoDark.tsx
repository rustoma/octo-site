import React, { ReactElement } from "react";

import { BepemamebleDark } from "@/features/logos/components/bepemameble/BepemamebleDark";
import { CawioDark } from "@/features/logos/components/cawio/CawioDark";
import { FinanceObrLight } from "@/features/logos/components/financeObr/FinanceObrLight";
import { FloorServiceDark } from "@/features/logos/components/floorService/FloorServiceDark";
import { MaximDark } from "@/features/logos/components/maxim/MaximDark";
import { RoofServiceLight } from "@/features/logos/components/roofService/RoofServiceLight";
import { getDomainId } from "@/utils";

const LOGOS: Record<string, ReactElement> = {
  1: <FloorServiceDark />,
  2: <RoofServiceLight />,
  3: <FinanceObrLight />,
  4: <MaximDark />,
  5: <CawioDark />,
  7: <BepemamebleDark />,
};

export const LogoDark = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
