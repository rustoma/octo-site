import React from "react";

import { Logo } from "@/components/icons/Logo";
import { TopNav } from "@/features/nav/topNav/TopNav";

import "./headerAlternate.style.scss";

export const HeaderAlternate = () => {
  return (
    <header className="header-alternate">
      <div className="header-alternate__logo">
        <Logo />
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
            id: "Lifestyle",
            title: "Lifestyle",
            href: "/lifestyle",
            items: [],
          },
          {
            id: "Technology",
            title: "Technology",
            href: "/technology",
            items: [],
          },
          {
            id: "Pages",
            title: "Pages",
            items: [
              {
                id: "Page 1",
                title: "Page 1",
                href: "/page-1",
                items: [],
              },
              {
                id: "Page 2",
                title: "Page 2",
                href: "/page-2",
                items: [
                  {
                    id: "Page 1-1",
                    title: "Page 1",
                    href: "/page-1-1",
                    items: [],
                  },
                  {
                    id: "Page 2-2",
                    title: "Page 1",
                    href: "/page-2-2",
                    items: [],
                  },
                ],
              },
            ],
          },
        ]}
      />
    </header>
  );
};
