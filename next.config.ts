import type { NextConfig } from 'next';
import { redirects } from './src/data/redirects';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
