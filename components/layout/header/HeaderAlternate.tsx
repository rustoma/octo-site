import React from "react";
import Link from "next/link";

import { LogoDark } from "@/features/logos/components/LogoDark";
import { HamburgerMenu } from "@/features/nav/mobileMenu/hamburgerMenu/HamburgerMenu";
import { TopNav } from "@/features/nav/topNav/TopNav";
import { getCategoriesByDomain } from "@/services/category/category.service";
import { getDomainId } from "@/utils";

import "./headerAlternate.style.scss";

export const HeaderAlternate = async () => {
  const domainId = getDomainId();
  const categories = await getCategoriesByDomain(domainId);

  const categoryMenuItems = categories
    ? categories.map((category) => ({
        id: category.id,
        title: category.name,
        href: `/${category.slug}`,
        items: [],
      }))
    : [];

  const menuTree = [
    {
      id: "Home",
      title: "Home",
      href: "/",
      items: [],
    },
    ...categoryMenuItems.slice(0, 3),
    {
      id: "pozostale-kategorie",
      title: "Pozostałe kategorie",
      items: categoryMenuItems.slice(3),
    },
  ];

  const mobileMenuTree = [
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
    ...categoryMenuItems,
    {
      id: "polityka-prywatnosci",
      title: "Polityka prywatności",
      href: "/polityka-prywatnosci",
      items: [],
    },
    {
      id: "polityka-cookies",
      title: "Polityka cookies",
      href: "/polityka-cookies",
      items: [],
    },
    {
      id: "kontakt",
      title: "Kontakt",
      href: "/kontakt",
      items: [],
    },
  ];

  return (
    <header className="header-alternate">
      <div className="header-alternate__logo">
        <Link href="/" aria-label="Logo - move to homepage">
          <LogoDark />
        </Link>
      </div>
      <TopNav menuTree={menuTree} />
      <HamburgerMenu menuTree={mobileMenuTree} />
    </header>
  );
};
