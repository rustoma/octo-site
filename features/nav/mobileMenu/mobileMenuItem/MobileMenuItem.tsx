"use client";
import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronDown } from "@/components/icons/ChevronDown";
import { ChevronUp } from "@/components/icons/ChevronUp";
import { NavItem } from "@/features/nav/types";

import "./mobileMenuItem.style.scss";

interface MobileMenuItemProps {
  children: ReactNode;
  menuItem: NavItem;
  openMenu: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  isOpen: boolean;
}

export const MobileMenuItem = ({ children, menuItem, openMenu, isOpen }: MobileMenuItemProps) => {
  const pathName = usePathname();

  return (
    <li key={menuItem.title} className={clsx("mobile-menu__item", children && "mobile-menu__item--with-children")}>
      {menuItem.href ? (
        <Link
          href={menuItem.href}
          className={clsx("mobile-menu__link", pathName === menuItem.href && "mobile-menu__link--active")}>
          {menuItem.title}
        </Link>
      ) : (
        <span
          className={clsx("mobile-menu__link", pathName === menuItem.href && "mobile-menu__link--active")}
          tabIndex={0}
          onClick={() =>
            openMenu((prevState) => ({
              ...prevState,
              [menuItem.title]: !prevState[menuItem.title],
            }))
          }>
          {menuItem.title}
        </span>
      )}

      {children && (
        <div
          className="mobile-menu__link-icon-wrapper"
          onClick={() =>
            openMenu((prevState) => ({
              ...prevState,
              [menuItem.title]: !prevState[menuItem.title],
            }))
          }>
          {isOpen ? (
            <span className="mobile-menu__link-icon-holder">
              <ChevronUp className="mobile-menu__link-icon" />
            </span>
          ) : (
            <span className="mobile-menu__link-icon-holder">
              <ChevronDown className="mobile-menu__link-icon" />
            </span>
          )}
        </div>
      )}
      {children}
    </li>
  );
};
