import React from "react";
import Link from "next/link";

import { Container } from "@/components/container/Container";
import { LogoLight } from "@/features/logos/components/LogoLight";
import { BottomNav } from "@/features/nav/bottomNav/BottomNav";

import "./footer.style.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <div className="footer__nav">
            <Link href="/" className="footer__logo" aria-label="Logo - move to homepage">
              <LogoLight />
            </Link>
            <BottomNav
              items={[
                {
                  id: "kontakt",
                  title: "Kontakt",
                  href: "/kontakt",
                  items: [],
                },
                // {
                //   id: "Terms of Use",
                //   title: "Terms of Use",
                //   href: "/terms-of-use",
                //   items: [],
                // },
                {
                  id: "polityka-prywatnosci",
                  title: "Polityka prywatności",
                  href: "/polityka-prywatnosci",
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
