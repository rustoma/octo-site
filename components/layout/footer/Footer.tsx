import React from "react";
import Link from "next/link";

import { Container } from "@/components/container/Container";
import { Logo } from "@/components/icons/Logo";
import { BottomNav } from "@/features/nav/bottomNav/BottomNav";

import "./footer.style.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <div className="footer__nav">
            <Link href="/" className="footer__logo">
              <Logo />
            </Link>
            <BottomNav
              items={[
                {
                  id: "Contact Us",
                  title: "Contact Us",
                  href: "/contact",
                  items: [],
                },
                {
                  id: "Terms of Use",
                  title: "Terms of Use",
                  href: "/terms-of-use",
                  items: [],
                },
                {
                  id: "Privacy Policy",
                  title: "Privacy Policy",
                  href: "/privacy-policy",
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
