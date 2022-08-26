import { defineConfig } from "astro/config";

import partytown from '@astrojs/partytown';
import tailwind from "@astrojs/tailwind";
import alpine from '@astrojs/alpinejs';
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";


import { SITE } from "./src/config.mjs";

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.domain,

  integrations: [
    alpine(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    image(),
    partytown()
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
    build: {
      rollupOptions: {
        external: [
          "scrollreveal",
          "alpinejs"
        ],
      },
    },
  },
});
