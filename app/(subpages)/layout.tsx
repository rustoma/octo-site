import React, { ReactNode } from "react";

import { Footer } from "@/components/layout/footer/Footer";
import { HeaderAlternate } from "@/components/layout/header/HeaderAlternate";

import "./layout.styles.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderAlternate />
      <main className="subpage-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
