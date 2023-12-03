import React from "react";
import Link from "next/link";

import { NavItem } from "@/features/nav/types";

import "./bottomNavItem.style.scss";

interface BottomNavItemProps {
  item: NavItem;
}

export const BottomNavItem = ({ item }: BottomNavItemProps) => {
  return (
    <li className="bottom-nav__list-item">
      <Link href={item.href ?? "/"}>{item.title}</Link>
    </li>
  );
};
