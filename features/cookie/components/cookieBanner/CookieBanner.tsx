"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useDictionary } from "@/context/DictionaryContext";

import "./cookieBanner.style.scss";

interface CookieBannerProps {
  privacyPolicyLink: string;
  cookiesPolicyLink: string;
}

const CookieBanner = ({ privacyPolicyLink, cookiesPolicyLink }: CookieBannerProps) => {
  const { t } = useDictionary();
  const [isCookieConsent, setIsCookieConsent] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    setIsCookieConsent(!!cookieConsent);
  }, []);

  return (
    <>
      {!isCookieConsent ? (
        <div className="cookie-banner">
          <div className="cookie-banner__content">
            <p>
              {t.cookieBanner.description} <Link href={privacyPolicyLink}>{t.cookieBanner.privacyPolicyLinkText}</Link>{" "}
              {t.cookieBanner.secondDescription}{" "}
              <Link href={cookiesPolicyLink}>{t.cookieBanner.cookiePolicyLinkText}</Link>
            </p>
          </div>

          <div className="cookie-banner__buttons-wrapper">
            <button
              className="cookie-banner__button"
              onClick={() => {
                localStorage.setItem("cookieConsent", "true");
                setIsCookieConsent(true);
              }}>
              {t.cookieBanner.acceptText}
            </button>
            <button
              className="cookie-banner__button cookie-banner__button--decline"
              onClick={() => router.push("https://google.com")}>
              {t.cookieBanner.deniedText}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CookieBanner;
