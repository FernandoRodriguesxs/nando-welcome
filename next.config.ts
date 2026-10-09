import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Lets the dev server be opened at http://127.0.0.1 as well as localhost.
  allowedDevOrigins: ["127.0.0.1"],
  experimental: {
    // Ship the (small, atomic) Tailwind CSS inside the HTML so first paint doesn't
    // wait for a separate render-blocking stylesheet request on slow mobile networks.
    inlineCss: true,
  },
};

export default nextConfig;
