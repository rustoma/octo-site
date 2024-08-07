import React from "react";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import { AdMultiplexerVertical } from "@/features/ads/AdMultiplexerVertical";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { StickyWidget } from "@/features/widgets/components/stickyWidget/StickyWidget";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";
import { getDomainId } from "@/utils";

import "./page.style.scss";

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

const AboutUsPage = async () => {
  const page = await getBasicPageBySlug("o-nas");

  if (!page) {
    return notFound();
  }

  return (
    <>
      <SimpleBanner title={page.title} />
      <Container>
        <div className="about-us-page">
          <div className="about-us-page__content">{parse(page.body ?? "")}</div>
          <div className="about-us-page__sidebar">
            <TagsCloud />
            <StickyWidget>
              <AdMultiplexerVertical />
            </StickyWidget>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUsPage;
