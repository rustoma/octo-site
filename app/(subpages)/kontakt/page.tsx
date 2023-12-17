import parse from "html-react-parser";
import { notFound } from "next/navigation";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { Advertisement } from "@/features/widgets/components/advertisment/Advertisement";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";

import "./page.style.scss";

const ContactPage = async () => {
  const page = await getBasicPageBySlug("contact");

  if (!page) {
    return notFound();
  }

  return (
    <>
      <SimpleBanner title={page.title} />
      <Container>
        <div className="contact-page">
          <div className="contact-page__content">{parse(page.body ?? "")}</div>
          <div className="contact-page__sidebar">
            <TagsCloud />
            <Advertisement />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
