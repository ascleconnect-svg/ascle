import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project. Without this, Turbopack walks up
    // and finds a stray package-lock.json in the user's home directory, then
    // infers that as the root.
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
