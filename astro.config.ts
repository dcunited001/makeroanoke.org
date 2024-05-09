// -*- mode: javascript -*-
import { defineConfig } from 'astro/config';

// docs: https://astro.build/config

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

import tailwindConfigViewer from 'astro-tailwind-config-viewer';
const ASTRO_PORT = 4321;

// https://docs.astro.build/en/reference/cli-reference/#astro-telemetry
// TODO: disable telemetry

// NOTE: Astro CLI flags override site

const iconConfig = {
  // changing included icons requires restarting astro
  include: {
    // LICENSE: MIT
    flowbite: ['*'],
    // LICENSE: APACHE 2.0
    mdi: [
      'email-fast-outline',
      'saw-blade',
      'wallet-membership',
      'ruler-square',
      'announcement-outline',
      'printer-3d-nozzle-outline',
      'people-outline',
      'file-document-multiple-outline',
    ],
    // LICENSE: MIT
    ph: ['circuitry-light'],
    // LICENSE: MIT
    'fluent-emoji-high-contrast': ['sewing-needle'],
    // TODO: LICENCE: CC0 1.0
    'simple-icons': [
      'github',
      'calendar',
      'email',
      'facebook',
      'instagram',
      'linkedin',
      'pdf',
      'pinterest',
      'rss',
      'twitter',
      'youtube',
      'stopwatch',
    ],
  },
};

const twConfig = './tailwind.config.mjs';

const twViewer = {
  configFile: twConfig,
  endpoint: '/tailwind',
  overlayMode: 'embed',
};

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://makeroanoke.org'
    : `http://localhost:${ASTRO_PORT}`,
  // base: process.env.CI
  //   ? '/site_root' : undefined,

  integrations: [
    tailwind({ configFile: twConfig }),
    // tailwindConfigViewer(twViewer),
    tailwindConfigViewer(twViewer),
    mdx(),
    sitemap(),
    icon(iconConfig),
    sentry(),
    spotlightjs(),
  ],
});
