import React from "react";
import Link from "next/link";

import { Container } from "@/components/container/Container";
import AdBanner from "@/features/ads/AdBanner";
import { LogoDark } from "@/features/logos/components/LogoDark";
import { HamburgerMenu } from "@/features/nav/mobileMenu/hamburgerMenu/HamburgerMenu";
import { TopNav } from "@/features/nav/topNav/TopNav";
import { getCategoriesByDomain } from "@/services/category/category.service";
import { getDomainId } from "@/utils";

import "./header.style.scss";

export const Header = async () => {
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
    <header className="header">
      <div className="header-top">
        <Container>
          <div className="header-top__wrapper">
            <span className="header-top__date">{renderDate()}</span>
            <ul className="header-top__menu list-style">
              <li className="header-top__menu-item">
                <Link href="/o-nas">O nas</Link>
              </li>
              <li className="header-top__menu-item">
                <Link href="/kontakt">Kontakt</Link>
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

            <div className="header-middle__advertisement">
              <AdBanner adSlot="8825015537" adFormat="auto" adResponsive height={92} />
            </div>
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
