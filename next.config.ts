import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export the Next.js App Router as a fully static site.
  // Hostinger shared/static hosting can serve the generated /out directory.
  output: "export",
};

export default nextConfig;
