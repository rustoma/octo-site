import React from "react";
import parse from "html-react-parser";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";
import { Advertisement } from "@/features/widgets/components/advertisment/Advertisement";
import { TagsCloud } from "@/features/widgets/components/tagsCloud/TagsCloud";

import "./page.style.scss";

const AboutUsPage = () => {
  return (
    <>
      <SimpleBanner title="O nas" />
      <Container>
        <div className="about-us-page">
          <div className="about-us-page__content">
            {parse(
              " <h3>The Professional Publishing Platform</h3><p>Aenean consectetur massa quis sem volutpat, a\n" +
                "                  condimentum tortor pretium. Cras id ligula consequat, sagittis nulla at, sollicitudin lorem. Orci\n" +
                "                  varius natoque penatibus et magnis dis parturient montes.</p><p>Cras id ligula consequat, sagittis\n" +
                "                  nulla at, sollicitudin lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\n" +
                "                  ridiculus mus. Phasellus eleifend, dolor vel condimentum imperdiet.</p><p>In a professional context it\n" +
                "                  often happens that private or corporate clients corder a publication to be made and presented with the\n" +
                "                  actual content still not being ready. Think of a news blog that’s filled with content hourly on the\n" +
                "                  day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random\n" +
                "                  text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the\n" +
                "                  layout and its elements.</p><h3>Our Growing News Network</h3><p>Cicero famously orated against his\n" +
                "                  political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken\n" +
                "                  for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste\n" +
                "                  tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that\n" +
                "                  madness of yours mock us?)</p><p>Most text editors like MS Word or Lotus Notes generate random lorem\n" +
                "                  text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence\n" +
                "                  don’t necessarily match the original, which is intended to add variety.</p><h3>The Professional\n" +
                "                  Publishing Platform</h3><p>Cicero famously orated against his political opponent Lucius Sergius\n" +
                "                  Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque\n" +
                "                  tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O\n" +
                "                  Catiline, will you abuse our patience? And for how long will that madness of yours mock us?)</p>\n" +
                "                  <p>Most text editors like MS Word or Lotus Notes generate random lorem text when needed, either as\n" +
                "                      pre-installed module or plug-in to be added. Word selection or sequence don’t necessarily match\n" +
                "                      the original, which is intended to add variety.</p><h3>Quo usque tandem abutere</h3><p>Cicero\n" +
                "                  famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration\n" +
                "                  against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra?\n" +
                "                  Quam diu etiam furor iste tuus nos eludet?</p>"
            )}
          </div>
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
