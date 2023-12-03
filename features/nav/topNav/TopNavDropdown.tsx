import React from "react";
import clsx from "clsx";

import { TopNavItem } from "@/features/nav/topNav/TopNavItem";
import { NavItem } from "@/features/nav/types";

import "./topNavDropdown.style.scss";

interface TopNavDropdownClasses {
  listDeep?: string;
  listItem?: string;
  menuLink?: string;
  menuDeepLink?: string;
}

interface TopNavDropdownProps {
  submenus: NavItem[];
  dropdown: boolean;
  depthLevel: number;
  classes?: TopNavDropdownClasses;
}

export const TopNavDropdown = ({ submenus, dropdown, depthLevel, classes }: TopNavDropdownProps) => {
  depthLevel = depthLevel + 1;
  return (
    <ul
      className={clsx(
        "top-nav__dropdown",
        depthLevel > 1 && "top-nav__dropdown--deep",
        classes?.listDeep,
        dropdown && "top-nav__dropdown--visible",
        dropdown && depthLevel === 1 && "top-nav__dropdown--flat-animation",
        dropdown && depthLevel > 1 && "top-nav__dropdown--deep-animation"
      )}>
      {submenus.map((submenu) => (
        <TopNavItem menuItem={submenu} key={submenu.id} depthLevel={depthLevel} classes={classes} />
      ))}
    </ul>
  );
};
