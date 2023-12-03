import React from "react";
import clsx from "clsx";

import { TopNavItem } from "@/features/nav/topNav/TopNavItem";
import { NavItem } from "@/features/nav/types";

import "./topNav.style.scss";

export interface TopNavClasses {
  root?: string;
  list?: string;
  listDeep?: string;
  listItem?: string;
  menuLink?: string;
  menuDeepLink?: string;
}

interface TopNavProps {
  menuTree: NavItem[];
  classes?: TopNavClasses;
}

export const TopNav = ({ menuTree, classes }: TopNavProps) => {
  return (
    <nav className="top-nav">
      <ul className={clsx("top-nav__list", classes?.list)}>
        {menuTree.map((menuItem) => {
          const depthLevel = 0;
          return (
            <TopNavItem
              menuItem={menuItem}
              key={menuItem.id}
              depthLevel={depthLevel}
              classes={{
                listDeep: classes?.listDeep,
                listItem: classes?.listItem,
                menuLink: classes?.menuLink,
                menuDeepLink: classes?.menuDeepLink,
              }}
            />
          );
        })}
      </ul>
    </nav>
  );
};
