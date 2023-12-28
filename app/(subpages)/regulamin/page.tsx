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
  title: `Regulamin | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
  description: undefined,
  alternates: {
    canonical: "/regulamin",
  },
  openGraph: {
    images: `/img/jpg/social-${getDomainId()}.jpg`,
  },
};

const RegulationsPage = async () => {
  const page = await getBasicPageBySlug("regulamin");

  if (!page) {
    return notFound();
  }

  return (
    <>
      <SimpleBanner title={page.title} />
      <Container>
        <div className="regulations-page">
          <div className="regulations-page__content">{parse(page.body ?? "")}</div>
        </div>
      </Container>
    </>
  );
};

export default RegulationsPage;
