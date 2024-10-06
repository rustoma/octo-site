import React from "react";
import { notFound } from "next/navigation";

import { AboutUsPage } from "@/features/pages/aboutUs/AboutUsPage";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";
import { getDomainId } from "@/utils";

export const metadata = {
  metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
  title: `Über uns | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
  description: undefined,
  alternates: {
    canonical: "/uber-uns",
  },
  openGraph: {
    images: `/img/jpg/social-${getDomainId()}.jpg`,
  },
};

const AboutUs = async () => {
  const page = await getBasicPageBySlug("uber-uns");

  if (!page) {
    return notFound();
  }

  return <AboutUsPage page={page} />;
};

export default AboutUs;
