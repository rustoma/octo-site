import React from "react";
import { notFound } from "next/navigation";

import { CookiesPage } from "@/features/pages/cookiePolicy/CookiePolicyPage";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";
import { getDomainId } from "@/utils";

export const metadata = {
  metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
  title: `Polityka cookies | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
  description: undefined,
  alternates: {
    canonical: "/polityka-cookies",
  },
  openGraph: {
    images: `/img/jpg/social-${getDomainId()}.jpg`,
  },
};

const Cookies = async () => {
  const page = await getBasicPageBySlug("polityka-cookies");

  if (!page) {
    return notFound();
  }

  return <CookiesPage page={page} />;
};

export default Cookies;
