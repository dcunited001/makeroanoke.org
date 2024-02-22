// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { HTMLAttributes } from "astro/types";

export const SITE_TITLE = 'MAKE Roanoke';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const COPYRIGHT = 'MAKE Roanoke';

export const REMOTE_ASSETS_BASE_URL = `${import.meta.env.SITE}${import.meta.env.BASE_URL}`;

export interface GoogleFont {
  name: string;
  weights?: string;
}

const googleFonts = [
  { name: 'Fira Sans', weights: '400,400i,600,600i' },
  { name: 'Istok Web', weights: '400,400i,600,600i' },
];

export const theme = {
  googleFonts,
};
