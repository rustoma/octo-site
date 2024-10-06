import React from "react";
import parse from "html-react-parser";

import { Container } from "@/components/container/Container";
import AdBanner from "@/features/ads/AdBanner";
import { AdMultiplexerVertical } from "@/features/ads/AdMultiplexerVertical";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { GoogleCaptchaWrapper } from "@/features/captcha/context/CaptchaProvider";
import { ContactForm } from "@/features/forms/components/contactForm/ContactForm";
import { StickyWidget } from "@/features/widgets/components/stickyWidget/StickyWidget";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { BasicPage } from "@/services/basicPage/basicPage.types";

import "./contactPage.style.scss";

interface ContactPageProps {
  page: BasicPage;
  policyPrivacyLink: string;
  cookiePrivacyLink: string;
}

export const ContactPage = ({ page, policyPrivacyLink, cookiePrivacyLink }: ContactPageProps) => (
  <GoogleCaptchaWrapper>
    <SimpleBanner title={page.title} />
    <Container>
      <div className="contact-page">
        <div className="contact-page__content">
          {parse(page.body ?? "")}
          <ContactForm policyPrivacyLink={policyPrivacyLink} cookiePrivacyLink={cookiePrivacyLink} />
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
