"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { pageView } from "@/lib/gtagHelper";

export const useAnalytics = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathName + searchParams.toString();

    pageView(url);
  }, [pathName, searchParams]);
};
