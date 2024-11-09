import type { NextConfig } from "next";

const isMobile = process.env.NEXT_PUBLIC_IS_MOBILE === "true";

const nextConfig: NextConfig = {
  ...(isMobile ? { output: "export" } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
