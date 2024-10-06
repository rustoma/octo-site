import React from "react";
import parse from "html-react-parser";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { BasicPage } from "@/services/basicPage/basicPage.types";

import "./privacyPolicyPage.style.scss";

interface PrivacyPolicyPageProps {
  page: BasicPage;
}

export const PrivacyPolicyPage = ({ page }: PrivacyPolicyPageProps) => {
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
