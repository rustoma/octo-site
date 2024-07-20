import React, { ReactNode } from "react";

import { Footer } from "@/components/layout/footer/Footer";
import { HeaderAlternate } from "@/components/layout/header/HeaderAlternate";
import { AdBlockModal } from "@/features/adblock/AdBlockModal";

import "./layout.styles.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderAlternate />
      <main className="subpage-content">{children}</main>
      <Footer />

      <AdBlockModal />
    </>
  );
};

export default Layout;
