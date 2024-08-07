import React from "react";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import AdBanner from "@/features/ads/AdBanner";
import { AdMultiplexerVertical } from "@/features/ads/AdMultiplexerVertical";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { GoogleCaptchaWrapper } from "@/features/captcha/context/CaptchaProvider";
import { ContactForm } from "@/features/forms/components/contactForm/ContactForm";
import { StickyWidget } from "@/features/widgets/components/stickyWidget/StickyWidget";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";
import { getDomainId } from "@/utils";

import "./page.style.scss";

export const metadata = {
  metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
  title: `Kontakt | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
  description: undefined,
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    images: `/img/jpg/social-${getDomainId()}.jpg`,
  },
};

const ContactPage = async () => {
  const page = await getBasicPageBySlug("kontakt");

  if (!page) {
    return notFound();
  }

  return (
    <GoogleCaptchaWrapper>
      <SimpleBanner title={page.title} />
      <Container>
        <div className="contact-page">
          <div className="contact-page__content">
            {parse(page.body ?? "")}
            <ContactForm />
            <AdBanner adSlot="1225727110" adFormat="auto" adResponsive />
          </div>
          <div className="contact-page__sidebar">
            <TagsCloud />
            <StickyWidget>
              <AdMultiplexerVertical />
            </StickyWidget>
          </div>
        </div>
      </Container>
    </GoogleCaptchaWrapper>
  );
};

export default ContactPage;
