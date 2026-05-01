import nextI18NextConfig from "./next-i18next.config.js";
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com"],
  },
  i18n: nextI18NextConfig.i18n,
};

export default nextConfig;
