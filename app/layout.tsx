import React, { ReactNode, Suspense } from "react";
import { Montserrat, Red_Hat_Display } from "next/font/google";

import { DictionaryProvider } from "@/context/DictionaryContext";
import { WindowDimensionsProvider } from "@/context/WindowDimensionsContext";
import { getDictionary } from "@/dictionaries/dictionaries";
import { Adsense } from "@/features/ads/Adsense";
import GoogleAnalytics from "@/features/analytics/components/GoogleAnalytics";
import { BackToTop } from "@/features/backToTop/components/BackToTop";
import CookieBanner from "@/features/cookie/components/cookieBanner/CookieBanner";
import { getStaticPageRoutesByLang } from "@/features/nav/utils";
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

const displayFont = {
  redHatDisplay,
  montserrat,
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

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const t = await getDictionary();
  const { cookiesPolicy, privacyPolicy } = getStaticPageRoutesByLang(process.env.LANGUAGE);

  return (
    <DictionaryProvider dictionary={t}>
      <WindowDimensionsProvider>
        <html
          lang={process.env.LANGUAGE === "de" ? "de" : "pl"}
          className={`${
            displayFont[(process.env.DISPLAY_FONT ?? "redHatDisplay") as keyof typeof displayFont].variable
          } light`}>
          <body>
            {children}
            <CookieBanner privacyPolicyLink={privacyPolicy} cookiesPolicyLink={cookiesPolicy} />
            <Suspense>
              <Adsense />
            </Suspense>
            <Suspense>
              <GoogleAnalytics />
            </Suspense>
            <BackToTop />
          </body>
        </html>
      </WindowDimensionsProvider>
    </DictionaryProvider>
  );
};

export default RootLayout;
