import { defineConfig } from "astro/config";

import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    prefetch(),
    react(),
    tailwind(),
  ],
  output: "server",
  adapter: vercel(),
});
