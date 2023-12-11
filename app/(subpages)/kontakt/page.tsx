import parse from "html-react-parser";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { Advertisement } from "@/features/widgets/components/advertisment/Advertisement";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";

import "./page.style.scss";

const ContactPage = () => {
  return (
    <>
      <SimpleBanner title="Kontakt" />
      <Container>
        <div className="contact-page">
          <div className="contact-page__content">
            {parse(
              "  <h2>Say Hello!</h2><p>Donec cursus dolor vitae congue consectetur. Morbi mattis viverra felis. Etiam dapibus id\n" +
                "    turpis at sagittis. Cras mollis mi vel ante ultricies, id ullamcorper mi pulvinar. Proin bibendum ornare risus,\n" +
                "    lacinia cursus quam condimentum id. Curabitur auctor massa eget porttitor molestie. Aliquam imperdiet dolor nec\n" +
                "    metus pulvinar sollicitudin.</p><p><strong>Aliquam iaculis at odio ut tempus</strong>. Suspendisse blandit luctus\n" +
                "    dui, a consequat mauris mollis id. Sed in ante at tortor malesuada imperdiet. Vestibulum sed gravida nibh. Nulla\n" +
                "    suscipit congue lorem, id tempor ipsum molestie sit amet. Nulla ultricies vitae erat in tincidunt. Maecenas tempus\n" +
                "    quam et ipsum elementum, a efficitur lectus tincidunt. Praesent diam elit, tincidunt ac tempus vulputate, aliquet\n" +
                "    viverra mauris. Etiam eu nunc efficitur, sagittis est ut, fringilla neque. Ut interdum eget lorem eget congue. Ut\n" +
                "    nec arcu placerat, mattis urna vel, consequat diam. Sed in leo in dolor suscipit molestie.</p><p\n" +
                "    >Email:&nbsp;<a\n" +
                '    href="mailto:octopulse@gmail.com">octopulse@gmail.com</a></p>'
            )}
          </div>
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
