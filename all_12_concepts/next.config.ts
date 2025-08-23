import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // this allows to use images from external sources in <Image> component
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ** -> allow all
      },
    ]
  }
};

export default nextConfig;
