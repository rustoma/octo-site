"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { TopNavDropdown } from "@/features/nav/topNav/TopNavDropdown";
import { TopNavLink } from "@/features/nav/topNav/TopNavLink";
import { NavItem } from "@/features/nav/types";

import "./topNavItem.style.scss";

interface TopNavItemClasses {
  listDeep?: string;
  listItem?: string;
  menuLink?: string;
  menuDeepLink?: string;
}

interface MenuItemProps {
  menuItem: NavItem;
  depthLevel: number;
  classes?: TopNavItemClasses;
}

export const TopNavItem = ({ menuItem, depthLevel, classes }: MenuItemProps) => {
  const pathName = usePathname();
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const closeDropdown = () => {
    if (dropdown) {
      setDropdown(false);
    }
  };

  const renderLinkWithDropdown = (menuItem: NavItem) => (
    <>
      <TopNavLink
        menuLink={menuItem}
        dropdown={dropdown}
        depthLevel={depthLevel}
        classes={{
          menuLink: classes?.menuLink,
          menuDeepLink: classes?.menuDeepLink,
        }}
      />
      {Array.isArray(menuItem.items) && menuItem.items.length ? (
        <TopNavDropdown submenus={menuItem.items} dropdown={dropdown} depthLevel={depthLevel} classes={classes} />
      ) : null}
    </>
  );

  const renderLinkWithoutDropdown = (menuItem: NavItem) => (
    <>
      {!menuItem.href ? (
        <span
          className={clsx(
            "top-nav__link top-nav__link--no-url",
            classes?.menuLink,
            depthLevel > 0 && "top-nav__link--deep"
          )}
          tabIndex={0}>
          {menuItem.title}
        </span>
      ) : (
        <Link
          href={menuItem.href}
          className={clsx(
            "top-nav__link",
            depthLevel < 1 && "menu__link-flat",
            depthLevel > 0 && "menu__link--deep",
            depthLevel > 0 && classes?.menuLink,

            classes?.menuLink,
            pathName === menuItem.href && "menu__link--active"
          )}>
          {menuItem.title}
        </Link>
      )}
    </>
  );

  return (
    <li
      className={clsx("top-nav__item", depthLevel > 0 && "top-nav__item--deep", classes?.listItem)}
      onClick={closeDropdown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {menuItem.items ? renderLinkWithDropdown(menuItem) : renderLinkWithoutDropdown(menuItem)}
    </li>
  );
};
