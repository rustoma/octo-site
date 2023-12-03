import React from "react";
import Link from "next/link";

import { Container } from "@/components/container/Container";
import { Logo } from "@/components/icons/Logo";

import "./footer.style.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Link href="/">
          <Logo />
        </Link>
      </Container>
    </footer>
  );
};
