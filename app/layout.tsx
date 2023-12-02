import React, { ReactNode, Suspense } from "react";
import { Red_Hat_Display } from "next/font/google";

import GoogleAnalytics from "@/components/googleAnalytics/GoogleAnalytics";
import { WindowDimensionsProvider } from "@/context/WindowDimensionsContext";

import "./globals.scss";

const redHatDisplay = Red_Hat_Display({
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--theme-font-display",
  fallback: ["sans-serif"],
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: "Octo - new universe",
  openGraph: {
    images: "/octo-social.jpg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <WindowDimensionsProvider>
      <html lang="pl" className={`${redHatDisplay.variable} light`}>
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
