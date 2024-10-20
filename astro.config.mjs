import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import customToc from "astro-custom-toc";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://miocene.github.io',
  base: 'web-miocene',
  integrations: [sitemap(), customToc(), mdx()]
});
