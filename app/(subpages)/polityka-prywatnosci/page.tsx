import React from "react";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";

import "./page.style.scss";

const PrivacyPolicyPage = async () => {
  const page = await getBasicPageBySlug("privacy-policy");

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
