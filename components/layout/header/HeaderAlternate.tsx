import React from "react";
import Link from "next/link";

import { getDictionary } from "@/dictionaries/dictionaries";
import { LogoDark } from "@/features/logos/components/LogoDark";
import { HamburgerMenu } from "@/features/nav/mobileMenu/hamburgerMenu/HamburgerMenu";
import { TopNav } from "@/features/nav/topNav/TopNav";
import { getStaticPageRoutesByLang } from "@/features/nav/utils";
import { getCategoriesByDomain } from "@/services/category/category.service";
import { getDomainId } from "@/utils";

import "./headerAlternate.style.scss";

export const HeaderAlternate = async () => {
  const domainId = getDomainId();
  const t = await getDictionary();
  const categories = await getCategoriesByDomain(domainId);
  const { aboutUs, contact, cookiesPolicy, privacyPolicy } = getStaticPageRoutesByLang(process.env.LANGUAGE);

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
      id: t.menu.otherCategories,
      title: t.menu.otherCategories,
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
      id: t.menu.aboutUs,
      title: t.menu.aboutUs,
      href: aboutUs,
      items: [],
    },
    ...categoryMenuItems,
    {
      id: t.menu.privacyPolicy,
      title: t.menu.privacyPolicy,
      href: privacyPolicy,
      items: [],
    },
    {
      id: t.menu.cookiesPolicy,
      title: t.menu.cookiesPolicy,
      href: cookiesPolicy,
      items: [],
    },
    {
      id: t.menu.contact,
      title: t.menu.contact,
      href: contact,
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
