import type { AstroBuiltinAttributes } from "astro";
import type { HTMLAttributes } from "astro/types";
import { z } from 'astro/zod';

// From https://github.com/withastro/starlight/packages/starlight/schemas/sidebar.ts

// HTML attributes that can be added to an anchor element, validated as
// `Record<string, string | number | boolean | undefined>` but typed as `HTMLAttributes<'a'>`
// for user convenience.
const linkHTMLAttributesSchema = z.record(
	z.union([z.string(), z.number(), z.boolean(), z.undefined()])
) as z.Schema<Omit<HTMLAttributes<'a'>, keyof AstroBuiltinAttributes | 'children'>>;
export type LinkHTMLAttributes = z.infer<typeof linkHTMLAttributesSchema>;

export interface NavbarItem {
  label: string;
  link: string;
  attrs?: LinkHTMLAttributes;
}

export interface NavbarConfig {
  // classes: Set<string>;
  items: NavbarItem[];
}

export const navbarConfig: NavbarConfig = {
  items: [
    {
      label: 'Flowbite',
      link: '/flowbite',
    },
    {
      label: 'Posts',
      link: '/posts',
    },
    {
      label: 'Events',
      link: '/events',
    },
    {
      label: 'Guilds',
      link: '/guilds',
    },
    {
      label: 'About',
      link: '/about',
    },
  ],
};
