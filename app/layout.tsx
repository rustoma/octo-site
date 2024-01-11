import React, { ReactNode, Suspense } from "react";
import { Montserrat, Red_Hat_Display, Roboto } from "next/font/google";

import { WindowDimensionsProvider } from "@/context/WindowDimensionsContext";
import GoogleAnalytics from "@/features/analytics/components/GoogleAnalytics";
import { BackToTop } from "@/features/backToTop/components/BackToTop";
import CookieBanner from "@/features/cookie/components/cookieBanner/CookieBanner";
import { getDomainId } from "@/utils";

import "./globals.scss";

const redHatDisplay = Red_Hat_Display({
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--theme-font-display",
  fallback: ["sans-serif"],
  subsets: ["latin", "latin-ext"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--theme-font-display",
  fallback: ["sans-serif"],
  subsets: ["latin", "latin-ext"],
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--theme-font-display",
  fallback: ["sans-serif"],
  subsets: ["latin", "latin-ext"],
});

const displayFont = {
  redHatDisplay,
  montserrat,
  roboto,
};

export const metadata = {
  metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
  title: `${process.env.DOMAIN_NAME} | ${new Date().getFullYear()}`,
  openGraph: {
    images: `/img/jpg/social-${getDomainId()}.jpg`,
  },
  icons: {
    icon: `/favicons/favicon-${getDomainId()}.png`,
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <WindowDimensionsProvider>
      <html
        lang="pl"
        className={`${
          displayFont[(process.env.DISPLAY_FONT ?? "redHatDisplay") as keyof typeof displayFont].variable
        } light`}>
        <body>
          {children}
          <CookieBanner />
          <Suspense>
            <GoogleAnalytics />
          </Suspense>
          <BackToTop />
        </body>
      </html>
    </WindowDimensionsProvider>
  );
};

export default RootLayout;
