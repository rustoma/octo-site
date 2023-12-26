"use client";

import React, { useState } from "react";

import { ChevronUp } from "@/components/icons/ChevronUp";

import "./BackToTop.style.scss";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="back-to-top"
      style={{ visibility: visible ? "visible" : "hidden", opacity: visible ? "1" : "0" }}
      onClick={scrollToTop}>
      <ChevronUp />
    </button>
  );
};
