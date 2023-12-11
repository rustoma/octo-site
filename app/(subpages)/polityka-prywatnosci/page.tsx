import React from "react";
import parse from "html-react-parser";

import { Container } from "@/components/container/Container";
import { SimpleBanner } from "@/features/banners/components/simpleBanner/SimpleBanner";

import "./page.style.scss";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SimpleBanner title="Polityka prywatności" />
      <Container>
        <div className="privacy-policy-page">
          <div className="privacy-policy-page__content">
            {parse(
              ' <h3>GDPR compliance</h3><p className="subtitle-2 mb--40">Sed nec ex vitae justo molestie maximus. Sed ut neque sit\n' +
                "    amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus vitae. Donec a justo nec elit\n" +
                "    sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean convallis ligula\n" +
                "    orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent\n" +
                "    bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan\n" +
                '    bibendum sapien. Nunc non facilisis sem.</p><h3>About Blogar</h3><p className="subtitle-2 mb--40">In dapibus, nibh\n' +
                "    sit amet pulvinar convallis, massa nunc tincidunt nunc, a pretium risus nulla ut dui. Ut ut condimentum tellus,\n" +
                "    dapibus volutpat est. Integer ullamcorper iaculis blandit. Pellentesque id tempus urna. Quisque luctus cursus\n" +
                '    imperdiet.&nbsp;<a href="https://new.axilthemes.com/demo/template/blogar/privacy-policy.html#">hello@Blogar.com</a>\n' +
                "</p><h3>When we collect personal data about you</h3>\n" +
                '    <ul className="mb--40">\n' +
                "        <li>Email is a crucial channel in any marketing.</li>\n" +
                "        <li>Curious what to say? How to say it?</li>\n" +
                "        <li>Whether you’re kicking off a new campaign.</li>\n" +
                "        <li>Habitasse per feugiat aliquam luctus accumsan curae</li>\n" +
                "    </ul>\n" +
                '    <h3>Why we collect and use personal data</h3><p className="subtitle-2">Sed nec ex vitae justo molestie maximus. Sed\n' +
                "    ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus vitae. Donec a justo\n" +
                "    nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean\n" +
                "    convallis ligula orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit\n" +
                "    hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus\n" +
                "    fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>\n" +
                '    <ul className="mb--40">\n' +
                "        <li>Nulla facilisi. Sed pulvinar nec purus eu sollicitudin. Quisque ut tempus quam, in cursus eros.</li>\n" +
                "        <li>Fusce malesuada luctus velit eu tempor. Pellentesque habitant morbi tristique senectus et netus et.</li>\n" +
                "        <li>Pellentesque ornare nulla est, non blandit sapien lacinia nec. Nulla ac velit id est mattis faucibus.</li>\n" +
                "        <li>Aliquam lacus nisi, lobortis non diam eget, malesuada bibendum justo. Praesent fringilla sagittis ex, ac\n" +
                "            molestie ipsum ullamcorper a.\n" +
                "        </li>\n" +
                "        <li>Vestibulum nulla tortor, aliquam at porta in, hendrerit sed nibh.</li>\n" +
                "    </ul>\n" +
                '    <h3>Type of personal data collected</h3><p className="subtitle-2 mb--40">In ultrices elit malesuada velit ornare,\n' +
                "    eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam,\n" +
                "    hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p><h3>Information we collect\n" +
                '    automatically</h3><p className="subtitle-2 mb--40">Etiam vel mi vel neque mattis iaculis. Proin vitae consequat\n' +
                "    augue, vel porta tellus. Nullam tincidunt ac lorem eu lacinia. Praesent ac diam id odio elementum efficitur.\n" +
                "    Suspendisse sit amet urna vitae neque tempor pellentesque. Aenean ut dapibus urna. Pellentesque neque nulla,\n" +
                "    interdum vitae rhoncus at, pretium id arcu. Etiam sodales lectus at convallis vestibulum. Quisque non neque augue.\n" +
                "    Nullam condimentum nulla felis, nec suscipit augue congue ac.</p><h3>The use of cookies and web beacons</h3><p\n" +
                '    className="subtitle-2">We may log information using “cookies.” Cookies are small data files stored on your hard\n' +
                '    drive by a website. Cookies help us make our Site and your visit better.</p><p className="subtitle-2">We may log\n' +
                "    information using digital images called web beacons on our Site or in our emails.</p><p\n" +
                '    className="subtitle-2 mb--40">This information is used to make our Site work more efficiently, as well as to provide\n' +
                "    business and marketing information to the owners of the Site, and to gather such personal data as browser type and\n" +
                "    operating system, referring page, path through site, domain of ISP, etc. for the purposes of understanding how\n" +
                "    visitors use our Site. Cookies and similar technologies help us tailor our Site to your personal needs, as well as\n" +
                "    to detect and prevent security threats and abuse. If used alone, cookies and web beacons do not personally identify\n" +
                '    you.</p><h3>How long we keep your data</h3><p className="subtitle-2">We store personal data for as long as we find\n' +
                "    it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to\n" +
                "    answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable\n" +
                "    laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p><p\n" +
                '    className="subtitle-2 mb--40">We store personal data for as long as we find it necessary to fulfill the purpose for\n' +
                "    which the personal data was collected, while also considering our need to answer your queries or resolve possible\n" +
                "    problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal\n" +
                "    claims/complaints, and for safeguarding purposes.</p><h3>Your rights to your personal data</h3><p\n" +
                '    className="subtitle-2 mb--40">We store personal data for as long as we find it necessary to fulfill the purpose for\n' +
                "    which the personal data was collected, while also considering our need to answer your queries or resolve possible\n" +
                "    problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal\n" +
                "    claims/complaints, and for safeguarding purposes.</p><h3>Hotjar’s privacy policy</h3><p\n" +
                '    className="subtitle-2 mb--40">Pellentesque vestibulum venenatis iaculis. Aliquam viverra sodales ultrices. Quisque\n' +
                "    sed purus id massa consequat consectetur eu vel lorem. Maecenas lectus velit, cursus quis orci non, laoreet\n" +
                "    hendrerit mi. Nulla vitae ipsum fringilla, placerat metus eu, malesuada velit. Quisque viverra risus ex. Aenean\n" +
                "    commodo vestibulum efficitur. Nullam ligula orci, aliquet sed luctus vel, luctus vel dui. Sed pulvinar, ipsum at\n" +
                "    mattis imperdiet, diam augue tempor diam, sed porttitor odio elit ut ante. In posuere mi at mi pellentesque ornare\n" +
                "    sit amet gravida nisi. Praesent ac blandit odio. Curabitur iaculis ante elit, et imperdiet leo mollis at.</p>\n" +
                '    <h3>Changes to this Privacy Policy</h3><p className="subtitle-2">Integer eu ornare lectus, ornare ullamcorper\n' +
                "    tellus. Morbi in urna a justo dignissim luctus. Nam sagittis ante ut lorem feugiat, sed consectetur ligula lacinia.\n" +
                "    Vestibulum quis mauris sed lectus pretium dictum sed vitae orci. Vestibulum facilisis facilisis mauris non maximus.\n" +
                "    Nam tristique ipsum egestas, suscipit orci sit amet, rutrum ante. Proin in felis pellentesque, ullamcorper enim vel,\n" +
                "    molestie ipsum.</p>"
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicyPage;
