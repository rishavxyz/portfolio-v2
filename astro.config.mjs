import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

const site = import.meta.env.DEV ? "http://localhost:4321"
  : "https://v2.rishavmandal.xyz";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [mdx(), sitemap(), svelte(), tailwind()],
  output: "hybrid",
  // adapter: vercel({
  //   imagesConfig: {
  //     formats: ["image/webp", "image/avif"],
  //     sizes: [480, 1024]
  //   }
  // }),
  adapter: vercel()
});
