import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// let site;
// if (process.env["DEV"]) {
//   site = "http://0.0.0.0:4321";
// } else {
//   site = "https://makeroanoke.org";
// }

// console.log(site);

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind()]
});