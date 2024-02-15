import { defineConfig } from 'astro/config';

// docs: https://astro.build/config

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

const ASTRO_PORT = 4321;

// https://docs.astro.build/en/reference/cli-reference/#astro-telemetry
// TODO: disable telemetry

// NOTE: Astro CLI flags override site
export default defineConfig({
	site: process.env.CI
		? 'https://makeroanoke.org'
		: `http://localhost:${ASTRO_PORT}`,
  integrations: [mdx(), sitemap(), tailwind()]
});
