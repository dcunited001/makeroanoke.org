import { linkSegments } from '@/lib/utils';
import type { AstroBuiltinAttributes } from 'astro';
import type { HTMLAttributes } from 'astro/types';
import { z } from 'astro/zod';

// From https://github.com/withastro/starlight/packages/starlight/schemas/sidebar.ts

// HTML attributes that can be added to an anchor element, validated as
// `Record<string, string | number | boolean | undefined>` but typed as `HTMLAttributes<'a'>`
// for user convenience.
const linkHTMLAttributesSchema = z.record(
  z.union([z.string(), z.number(), z.boolean(), z.undefined()]),
) as z.Schema<
  Omit<HTMLAttributes<'a'>, keyof AstroBuiltinAttributes | 'children'>
>;
export type LinkHTMLAttributes = z.infer<typeof linkHTMLAttributesSchema>;

export interface NavbarItem {
  label: string;
  link: string;
  items?: NavbarItem[];
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
      items: [
        { link: '/guilds/3d-printing', label: '3D Printing' },
        { link: '/guilds/fabrics', label: 'Fabrics' },
        { link: '/guilds/woodworking', label: 'Woodworking' },
        { link: '/guilds/metal-shop', label: 'Metal Shop' },
      ],
    },
    {
      label: 'About',
      link: '/about',
      items: [
        { link: '/about/makerspace', label: 'What is a Makerspace?' },
        { link: '/about/location', label: 'Location' },
        { link: '/about/community', label: 'Community' },
        { link: '/about/contact', label: 'Contact' },
      ],
    },
  ],
};

export function makeNavbarEntries(
  items: NavbarItem[],
  navURL: URL,
  markWith: (path: string[], link: string[]) => boolean,
) {
  return items.map((item) => {
    const navPath = linkSegments(navURL.pathname);
    const linkPath = linkSegments(item.link);

    return {
      type: 'link',
      label: item.label,
      href: item.link,
      isCurrent: markWith(navPath, linkPath),
      // badge: item.badge
      attrs: item.attrs ?? {},
    };
  });
}
