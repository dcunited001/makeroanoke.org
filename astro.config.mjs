import { defineConfig } from 'astro/config';

// docs: https://astro.build/config

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import icon from 'astro-icon';

const ASTRO_PORT = 4321;

// https://docs.astro.build/en/reference/cli-reference/#astro-telemetry
// TODO: disable telemetry

// NOTE: Astro CLI flags override site

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://makeroanoke.org' : `http://localhost:${ASTRO_PORT}`,
  // base: process.env.CI
  //   ? '/site_root' : undefined,

  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    icon({
      // changing included icons requires restarting astro
      include: {
        flowbite: ['*'],
        "simple-icons": [
          "github",
          "calendar",
          "email",
          "facebook",
          "instagram",
          "linkedin",
          "pdf",
          "pinterest",
          "rss",
          "twitter",
          "youtube",
          "stopwatch"],
      }
    })
  ]
});
