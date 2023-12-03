/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
    @import "styles/functions";
    @import "styles/variables";
    @import "styles/media-queries";
    @import "styles/extend";
    `,
  },
};

module.exports = nextConfig;
