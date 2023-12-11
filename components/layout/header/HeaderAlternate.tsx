import React from "react";
import Link from "next/link";

import { Logo } from "@/components/icons/Logo";
import { TopNav } from "@/features/nav/topNav/TopNav";

import "./headerAlternate.style.scss";

export const HeaderAlternate = () => {
  return (
    <header className="header-alternate">
      <div className="header-alternate__logo">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <TopNav
        menuTree={[
          {
            id: "Home",
            title: "Home",
            href: "/",
            items: [],
          },
          {
            id: "o-nas",
            title: "O nas",
            href: "/o-nas",
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
    </header>
  );
};
