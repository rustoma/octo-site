import React from "react";

export interface NavItem extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "id"> {
  id: number | string;
  title: string;
  items: NavItem[];
}
