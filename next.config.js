/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
  },
  // env: {
  //   CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  //   CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  // },
};

module.exports = nextConfig;
