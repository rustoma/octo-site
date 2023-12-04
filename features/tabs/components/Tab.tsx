import React from "react";
import clsx from "clsx";

import { TabClickCb, TabItem } from "@/features/tabs/types";

import "./tab.style.scss";

export interface TabProps {
  tab: TabItem;
  isActive: boolean;
  onTabClick: TabClickCb;
  disabled?: boolean;
}

export const Tab = ({ tab, isActive, onTabClick, disabled = false }: TabProps) => {
  return (
    <li className="tabs__item">
      <button
        className={clsx("tabs__tab", isActive && "tabs__tab--active")}
        disabled={disabled}
        onClick={() => onTabClick(tab.value)}>
        {tab.text}
      </button>
    </li>
  );
};
