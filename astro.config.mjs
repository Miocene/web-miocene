import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import customToc from "astro-custom-toc";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://miocene.io',
  integrations: [sitemap(), customToc(), mdx()]
});
