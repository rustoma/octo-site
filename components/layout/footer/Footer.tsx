import React from "react";
import Link from "next/link";

import { Container } from "@/components/container/Container";
import { getDictionary } from "@/dictionaries/dictionaries";
import { LogoDark } from "@/features/logos/components/LogoDark";
import { BottomNav } from "@/features/nav/bottomNav/BottomNav";

import "./footer.style.scss";

export const Footer = async () => {
  const t = await getDictionary();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <div className="footer__nav">
            <Link href="/" className="footer__logo" aria-label="Logo - move to homepage">
              <LogoDark />
            </Link>
            <BottomNav
              items={[
                {
                  id: t.menu.aboutUs,
                  title: t.menu.aboutUs,
                  href: "/o-nas",
                  items: [],
                },
                {
                  id: t.menu.privacyPolicy,
                  title: t.menu.privacyPolicy,
                  href: "/polityka-prywatnosci",
                  items: [],
                },
                {
                  id: t.menu.cookiesPolicy,
                  title: t.menu.cookiesPolicy,
                  href: "/polityka-cookies",
                  items: [],
                },
                {
                  id: t.menu.contact,
                  title: t.menu.contact,
                  href: "/kontakt",
                  items: [],
                },
              ]}
            />
          </div>
          <p className="footer__copyright">All Rights Reserved © {new Date().getFullYear()}</p>
        </div>
      </Container>
    </footer>
  );
};
