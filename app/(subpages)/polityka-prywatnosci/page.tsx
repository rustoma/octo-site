import React from "react";
import { notFound } from "next/navigation";

import { PrivacyPolicyPage } from "@/features/pages/privacyPolicy/PrivacyPolicyPage";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";
import { getDomainId } from "@/utils";

export const metadata = {
  metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
  title: `Polityka prywatności | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
  description: undefined,
  alternates: {
    canonical: "/polityka-prywatności",
  },
  openGraph: {
    images: `/img/jpg/social-${getDomainId()}.jpg`,
  },
};

const PrivacyPolicy = async () => {
  const page = await getBasicPageBySlug("polityka-prywatnosci");

  if (!page) {
    return notFound();
  }

  return <PrivacyPolicyPage page={page} />;
};

export default PrivacyPolicy;
