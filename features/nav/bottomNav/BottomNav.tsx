import React from "react";

import { BottomNavItem } from "@/features/nav/bottomNav/BottomNavItem";
import { NavItem } from "@/features/nav/types";

import "./bottomNav.style.scss";

interface BottomNavProps {
  items: NavItem[];
}

export const BottomNav = ({ items }: BottomNavProps) => {
  return (
    <nav className="bottom-nav">
      <ul className="bottom-nav__list">
        {items.map((item) => (
          <BottomNavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};
