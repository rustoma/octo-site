import React from "react";
import parse from "html-react-parser";

import { Container } from "@/components/container/Container";
import { AdMultiplexerVertical } from "@/features/ads/AdMultiplexerVertical";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { StickyWidget } from "@/features/widgets/components/stickyWidget/StickyWidget";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { BasicPage } from "@/services/basicPage/basicPage.types";

import "./aboutUsPage.style.scss";

interface AboutUsPageProps {
  page: BasicPage;
}

export const AboutUsPage = ({ page }: AboutUsPageProps) => {
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
