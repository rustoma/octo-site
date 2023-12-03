import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavItem } from "@/features/nav/types";

import "./topNavLink.style.scss";

interface TopNavLinkClasses {
  menuLink?: string;
  menuDeepLink?: string;
}

interface TopNavLinkProps {
  menuLink: NavItem;
  dropdown: boolean;
  depthLevel: number;
  classes?: TopNavLinkClasses;
}

export const TopNavLink = ({ menuLink, dropdown, depthLevel, classes }: TopNavLinkProps) => {
  const pathName = usePathname();

  return (
    <>
      {menuLink.href ? (
        <Link
          href={menuLink.href}
          role="button"
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          className={clsx(
            depthLevel > 0 && "top-nav__link--deep",
            depthLevel > 0 && classes?.menuDeepLink,
            depthLevel === 0 && "top-nav__link",
            classes?.menuLink,
            pathName === menuLink.href && "top-nav__link--active"
          )}>
          {menuLink.title}
        </Link>
      ) : (
        <span
          className={clsx(
            "top-nav__link--no-url",
            classes?.menuLink,
            depthLevel === 0 && "top-nav__link",
            depthLevel > 0 && "top-nav__link--deep"
          )}
          role="button"
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          tabIndex={0}>
          {menuLink.title}
        </span>
      )}
    </>
  );
};
