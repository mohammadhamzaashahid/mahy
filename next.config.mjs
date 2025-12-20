import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["tailwindcss"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);