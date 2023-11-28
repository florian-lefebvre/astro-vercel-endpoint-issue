import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  base: "/",
  trailingSlash: "always",
  output: "hybrid",
  adapter: vercel({
    functionPerRoute: false,
  }),
});