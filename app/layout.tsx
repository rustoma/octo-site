import React, { ReactNode, Suspense } from "react";
import { Bebas_Neue, Oxygen } from "next/font/google";

import GoogleAnalytics from "@/components/googleAnalytics/GoogleAnalytics";
import { WindowDimensionsProvider } from "@/context/WindowDimensionsContext";

import "./globals.scss";

const oxygen = Oxygen({
  weight: ["400", "700"],
  display: "swap",
  variable: "--theme-font-body",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin", "latin-ext"],
});

const bebas = Bebas_Neue({
  weight: ["400"],
  display: "swap",
  variable: "--theme-font-display",
  fallback: ["cursive"],
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: "Octo - new universe",
  openGraph: {
    images: "/octo-social.jpg",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <WindowDimensionsProvider>
      <html lang="pl" className={`${oxygen.variable} ${bebas.variable} light`}>
        <body>
          {children}
          <Suspense>
            <GoogleAnalytics />
          </Suspense>
        </body>
      </html>
    </WindowDimensionsProvider>
  );
};

export default RootLayout;
