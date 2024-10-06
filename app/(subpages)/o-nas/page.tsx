import React from "react";
import { notFound } from "next/navigation";

import { AboutUsPage } from "@/features/pages/aboutUs/AboutUsPage";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";
import { getDomainId } from "@/utils";

export const metadata = {
  metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
  title: `O nas | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
  description: undefined,
  alternates: {
    canonical: "/o-nas",
  },
  openGraph: {
    images: `/img/jpg/social-${getDomainId()}.jpg`,
  },
};

const AboutUs = async () => {
  const page = await getBasicPageBySlug("o-nas");

  if (!page) {
    return notFound();
  }

  return <AboutUsPage page={page} />;
};

export default AboutUs;
