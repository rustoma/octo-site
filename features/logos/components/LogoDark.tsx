import React, { ReactElement } from "react";

import { BepemamebleDark } from "@/features/logos/components/bepemameble/BepemamebleDark";
import { BioSerwisDark } from "@/features/logos/components/bioserwis/BioSerwisDark";
import { CawioDark } from "@/features/logos/components/cawio/CawioDark";
import { FinanceObrLight } from "@/features/logos/components/financeObr/FinanceObrLight";
import { FloorServiceDark } from "@/features/logos/components/floorService/FloorServiceDark";
import { KrismetDark } from "@/features/logos/components/krismet/KrismetDark";
import { MaximDark } from "@/features/logos/components/maxim/MaximDark";
import { RoofServiceLight } from "@/features/logos/components/roofService/RoofServiceLight";
import { getDomainId } from "@/utils";

const LOGOS: Record<string, ReactElement> = {
  1: <FloorServiceDark />,
  2: <RoofServiceLight />,
  3: <FinanceObrLight />,
  4: <MaximDark />,
  5: <CawioDark />,
  6: <BioSerwisDark />,
  7: <BepemamebleDark />,
  8: <KrismetDark />,
};

export const LogoDark = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
