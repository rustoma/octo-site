import React from "react";
import Link from "next/link";

import { Container } from "@/components/container/Container";
import { getDictionary } from "@/dictionaries/dictionaries";
import { LogoDark } from "@/features/logos/components/LogoDark";
import { HamburgerMenu } from "@/features/nav/mobileMenu/hamburgerMenu/HamburgerMenu";
import { TopNav } from "@/features/nav/topNav/TopNav";
import { getStaticPageRoutesByLang } from "@/features/nav/utils";
import { getCategoriesByDomain } from "@/services/category/category.service";
import { getDomainId } from "@/utils";

import "./header.style.scss";

export const Header = async () => {
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

  const renderDate = () => {
    const date = new Date();
    return `${date.getDate()} ${date.toLocaleString("pl-Pl", { month: "long" })} ${date.getFullYear()}`;
  };

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
    <header className="header">
      <div className="header-top">
        <Container>
          <div className="header-top__wrapper">
            <span className="header-top__date">{renderDate()}</span>
            <ul className="header-top__menu list-style">
              <li className="header-top__menu-item">
                <Link href={aboutUs}>{t.menu.aboutUs}</Link>
              </li>
              <li className="header-top__menu-item">
                <Link href={contact}>{t.menu.contact}</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="header-middle">
        <Container>
          <div className="header-middle__wrapper">
            <div className="header-middle__logo">
              <Link href="/" aria-label="Logo - move to homepage">
                <LogoDark />
              </Link>
            </div>

            {/*<div className="header-middle__advertisement">*/}
            {/*  <AdBanner adSlot="8825015537" adFormat="auto" height={92} />*/}
            {/*</div>*/}
          </div>
        </Container>
      </div>
      <div className="header-bottom">
        <Container>
          <TopNav menuTree={menuTree} />
          <HamburgerMenu menuTree={mobileMenuTree} />
        </Container>
      </div>
    </header>
  );
};
