import React, { ReactNode } from "react";

import "./stickyWidget.style.scss";

interface StickyWidgetProps {
  children: ReactNode;
  fraction?: number;
}

export const StickyWidget = ({ children, fraction = 1 }: StickyWidgetProps) => {
  return (
    <div className="sticky-widget" style={{ flex: fraction }}>
      <div className="sticky-widget__content">{children}</div>
    </div>
  );
};
