import React from "react";
import parse from "html-react-parser";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { BasicPage } from "@/services/basicPage/basicPage.types";

import "./cookiePolicyPage.style.scss";

interface CookiesPageProps {
  page: BasicPage;
}

export const CookiesPage = ({ page }: CookiesPageProps) => {
  return (
    <>
      <SimpleBanner title={page.title} />
      <Container>
        <div className="cookies-page">
          <div className="cookies-page__content">{parse(page.body ?? "")}</div>
        </div>
      </Container>
    </>
  );
};
