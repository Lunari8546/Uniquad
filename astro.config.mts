import { defineConfig } from "astro/config";

import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [prefetch(), react(), tailwind()],
  output: "server",
  adapter: vercel(),
});
