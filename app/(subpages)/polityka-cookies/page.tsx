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
  title: `Polityka cookies | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
  description: undefined,
  alternates: {
    canonical: "/polityka-cookies",
  },
  openGraph: {
    images: `/img/jpg/social-${getDomainId()}.jpg`,
  },
};

const CookiesPage = async () => {
  const page = await getBasicPageBySlug("polityka-cookies");

  if (!page) {
    return notFound();
  }

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

export default CookiesPage;
