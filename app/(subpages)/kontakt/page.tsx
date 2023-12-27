import parse from "html-react-parser";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { GoogleCaptchaWrapper } from "@/features/captcha/context/CaptchaProvider";
import { ContactForm } from "@/features/forms/components/contactForm/ContactForm";
import { Advertisement } from "@/features/widgets/components/advertisment/Advertisement";
import { StickyWidget } from "@/features/widgets/components/stickyWidget/StickyWidget";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";

import "./page.style.scss";

export const metadata = {
  metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
  title: `Kontakt | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
  description: undefined,
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    images: "/img/jpg/social.jpg",
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
          </div>
          <div className="contact-page__sidebar">
            <TagsCloud />
            <StickyWidget>
              <Advertisement />
            </StickyWidget>
          </div>
        </div>
      </Container>
    </GoogleCaptchaWrapper>
  );
};

export default ContactPage;
