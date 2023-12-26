import React from "react";
import Link from "next/link";

import { Logo } from "@/components/icons/Logo";
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
    {
      id: "o-nas",
      title: "O nas",
      href: "/o-nas",
      items: [],
    },
    ...categoryMenuItems,
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
          <Logo />
        </Link>
      </div>
      <TopNav menuTree={menuTree} />
      <HamburgerMenu menuTree={menuTree} />
    </header>
  );
};
