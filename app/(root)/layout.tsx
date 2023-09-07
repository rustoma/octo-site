import React, { ReactNode } from "react";

import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";

const Layout = async ({ children }: { children: ReactNode }) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
