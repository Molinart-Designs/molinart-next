import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Permite HMR al abrir el dev server por IP de la red local (p. ej. 192.168.x.x)
  allowedDevOrigins: ["192.168.100.47", "localhost", "127.0.0.1"],
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/npm/simple-icons/**",
      },
    ],
  },
};

export default nextConfig;
