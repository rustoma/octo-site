import React from "react";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";
import { getDomainId } from "@/utils";

import "./page.style.scss";

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

const PrivacyPolicyPage = async () => {
  const page = await getBasicPageBySlug("polityka-prywatnosci");

  if (!page) {
    return notFound();
  }

  return (
    <>
      <SimpleBanner title={page.title} />
      <Container>
        <div className="privacy-policy-page">
          <div className="privacy-policy-page__content">{parse(page.body ?? "")}</div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicyPage;
