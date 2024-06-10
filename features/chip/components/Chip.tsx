import React from "react";
import clsx from "clsx";

import "./chip.style.scss";
interface ChipProps {
  label: string;
  size?: "xs" | "sm" | "md";
}

export const Chip = ({ label, size = "md" }: ChipProps) => {
  return <div className={clsx("chip", `chip--${size}`)}>{label}</div>;
};
