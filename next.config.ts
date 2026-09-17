import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sib360.com",
        pathname: "/Content/**",
      },
      {
        protocol: "https",
        hostname: "franchise.sib360.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
