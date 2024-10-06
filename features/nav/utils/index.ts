export const getStaticPageRoutesByLang = (lang?: string) => {
  switch (lang) {
    case "de": {
      return {
        aboutUs: "/uber-uns",
        privacyPolicy: "/datenschutzerklarung",
        cookiesPolicy: "/cookie-richtlinie",
        contact: "/kontakt",
      };
    }

    default: {
      return {
        aboutUs: "/o-nas",
        privacyPolicy: "/polityka-prywatnosci",
        cookiesPolicy: "/polityka-cookies",
        contact: "/kontakt",
      };
    }
  }
};
