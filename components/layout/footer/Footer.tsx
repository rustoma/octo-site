import React from "react";
import Link from "next/link";

import { Container } from "@/components/container/Container";
import { LogoDark } from "@/features/logos/components/LogoDark";
import { BottomNav } from "@/features/nav/bottomNav/BottomNav";

import "./footer.style.scss";

export const Footer = () => {
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
                  id: "regulamin",
                  title: "Regulamin",
                  href: "/regulamin",
                  items: [],
                },
                {
                  id: "polityka-prywatnosci",
                  title: "Polityka prywatności",
                  href: "/polityka-prywatnosci",
                  items: [],
                },
                {
                  id: "kontakt",
                  title: "Kontakt",
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
