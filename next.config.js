/** @type {import('next').NextConfig} */
const path = require("path");
const cawioRedirects = require("./features/redirects/cawio");
const artstylmodernRedirects = require("./features/redirects/artstylmodern");
const bepemamebleRedirects = require("./features/redirects/bepemameble");
const bioSerwisRedirects = require("./features/redirects/bioSerwis");
const krismetRedirects = require("./features/redirects/krismet");
const obrachowaniRedirects = require("./features/redirects/obrachowani");
const oczyszczalnieMetalbudRedirects = require("./features/redirects/oczyszczalnieMetalbud");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "octopulse.adsvps.pl",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    const domainId = process.env.NEXT_PUBLIC_DOMAIN_ID;
    if (!domainId) return [];

    switch (domainId) {
      case "5":
        return cawioRedirects;
      case "10":
        return artstylmodernRedirects;
      case "7":
        return bepemamebleRedirects;
      case "6":
        return bioSerwisRedirects;
      case "8":
        return krismetRedirects;
      case "3":
        return obrachowaniRedirects;
      case "9":
        return oczyszczalnieMetalbudRedirects;
      default:
        [];
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
    @import "styles/functions";
    @import "styles/variables";
    @import "styles/media-queries";
    @import "styles/extend";
    @import "styles/mixins";
    @import ${
      process.env.THEME !== "" && process.env.THEME !== undefined ? `"styles/${process.env.THEME}"` : '"styles/theme"'
    };
    `,
  },
};

module.exports = nextConfig;
