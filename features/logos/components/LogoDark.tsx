import React, { ReactElement } from "react";

import { ArtstylModernDark } from "@/features/logos/components/artstylmodern/ArtstylModernDark";
import { BepemamebleDark } from "@/features/logos/components/bepemameble/BepemamebleDark";
import { BioSerwisDark } from "@/features/logos/components/bioserwis/BioSerwisDark";
import { CawioDark } from "@/features/logos/components/cawio/CawioDark";
import { FinanceObrLight } from "@/features/logos/components/financeObr/FinanceObrLight";
import { FloorServiceDark } from "@/features/logos/components/floorService/FloorServiceDark";
import { KrismetDark } from "@/features/logos/components/krismet/KrismetDark";
import { MaximDark } from "@/features/logos/components/maxim/MaximDark";
import { MetalbudDark } from "@/features/logos/components/metalbud/MetalbudDark";
import { RoletywiralDark } from "@/features/logos/components/roletywiral/RoletywiralDark";
import { RoofServiceLight } from "@/features/logos/components/roofService/RoofServiceLight";
import { SaunyBasenyDark } from "@/features/logos/components/saunyBaseny/SaunyBasenyDark";
import { TalentHuntersDark } from "@/features/logos/components/talentHunters/TalentHuntersDark";
import { TimepiecesDark } from "@/features/logos/components/timepieces/TimepiecesDark";
import { VilamaliaDark } from "@/features/logos/components/vilamalia/VilamaliaDark";
import { WielkopolskaesDark } from "@/features/logos/components/wielkopolskaes/WielkopolskaesDark";
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
  9: <MetalbudDark />,
  10: <ArtstylModernDark />,
  11: <RoletywiralDark />,
  12: <TimepiecesDark />,
  13: <VilamaliaDark />,
  14: <SaunyBasenyDark />,
  15: <WielkopolskaesDark />,
  16: <TalentHuntersDark />,
};

export const LogoDark = () => {
  const domainId = getDomainId();

  return LOGOS[domainId];
};
