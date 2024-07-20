import React, { ReactNode } from "react";

import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import { AdBlockModal } from "@/features/adblock/AdBlockModal";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />

      <AdBlockModal />
    </>
  );
};

export default Layout;
