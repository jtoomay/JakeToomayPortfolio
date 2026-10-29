import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/projects", destination: "/", permanent: false },
      { source: "/projects/:slug", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
