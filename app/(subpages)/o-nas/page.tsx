import React from "react";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { Advertisement } from "@/features/widgets/components/advertisment/Advertisement";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";

import "./page.style.scss";

export const metadata = {
  metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
  title: `O nas | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
  description: undefined,
  alternates: {
    canonical: "/o-nas",
  },
  openGraph: {
    images: "/img/jpg/social.jpg",
  },
};

const AboutUsPage = async () => {
  const page = await getBasicPageBySlug("about-us");

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
            <Advertisement />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUsPage;
