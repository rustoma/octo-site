import React, { ReactNode, Suspense } from "react";
import { Red_Hat_Display } from "next/font/google";

import GoogleAnalytics from "@/components/googleAnalytics/GoogleAnalytics";
import { WindowDimensionsProvider } from "@/context/WindowDimensionsContext";
import CookieBanner from "@/features/cookie/components/cookieBanner/CookieBanner";

import "./globals.scss";

const redHatDisplay = Red_Hat_Display({
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--theme-font-display",
  fallback: ["sans-serif"],
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
  title: `${process.env.DOMAIN_NAME} | ${new Date().getFullYear()}`,
  openGraph: {
    images: "/img/jpg/social.jpg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <WindowDimensionsProvider>
      <html lang="pl" className={`${redHatDisplay.variable} light`}>
        <body>
          {children}
          <CookieBanner />
          <Suspense>
            <GoogleAnalytics />
          </Suspense>
        </body>
      </html>
    </WindowDimensionsProvider>
  );
};

export default RootLayout;
