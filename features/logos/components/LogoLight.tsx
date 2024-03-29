import React, { ReactElement } from "react";

import { ArtstylModernLight } from "@/features/logos/components/artstylmodern/ArtstylModernLight";
import { BepemamebleLight } from "@/features/logos/components/bepemameble/BepemamebleLight";
import { BioSerwisLight } from "@/features/logos/components/bioserwis/BioSerwisLight";
import { CawioLight } from "@/features/logos/components/cawio/CawioLight";
import { FinanceObrLight } from "@/features/logos/components/financeObr/FinanceObrLight";
import { FloorServiceLight } from "@/features/logos/components/floorService/FloorServiceLight";
import { KrismetLight } from "@/features/logos/components/krismet/KrismetLight";
import { MaximLight } from "@/features/logos/components/maxim/MaximLight";
import { MetalbudLight } from "@/features/logos/components/metalbud/MetalbudLight";
import { RoofServiceLight } from "@/features/logos/components/roofService/RoofServiceLight";
import { getDomainId } from "@/utils";

const LOGOS: Record<string, ReactElement> = {
  1: <FloorServiceLight />,
  2: <RoofServiceLight />,
  3: <FinanceObrLight />,
  4: <MaximLight />,
  5: <CawioLight />,
  6: <BioSerwisLight />,
  7: <BepemamebleLight />,
  8: <KrismetLight />,
  9: <MetalbudLight />,
  10: <ArtstylModernLight />,
};

export const LogoLight = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
