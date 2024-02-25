import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

const isProd = import.meta.env.PROD;
const site = isProd
  ? "https://v2.rishavmandal.xyz"
  : "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site,
  prefetch: true,
  integrations: [mdx(), sitemap(), svelte(), tailwind()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true },
    isr: {
      expiration: false,
    }
  }),
});
