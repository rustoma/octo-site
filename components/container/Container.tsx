import React, { ReactNode } from "react";
import clsx from "clsx";

import "./container.style.scss";

type ContainerSize = "xl";

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

const containerSizes = {
  xl: "container",
};

export const Container = ({ size = "xl", className, children }: ContainerProps) => {
  return <div className={clsx(containerSizes[size], className)}>{children}</div>;
};
