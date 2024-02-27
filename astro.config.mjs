import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
// import compress from "astro-compress";
import { dev }from "./src/lib/env";
const site = dev ? "http://localhost:4321" : "https://v2.rishavmandal.xyz";

// https://astro.build/config
export default defineConfig({
  site,
  prefetch: true,
  integrations: [mdx(), sitemap(), svelte(), tailwind()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: dev
    },
    isr: {
      expiration: false
    }
  })
});