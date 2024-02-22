import { getCollection } from 'astro:content';
import { REMOTE_ASSETS_BASE_URL } from '@/consts.ts';

export function relUrl(path = '') {
  // NOTE: requires always including trailing slash
  return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}

export function asset(path: string) {
  // NOTE: this includes an extra trailing slash
  return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}

export function linkSegments(path: string): string[] {
  const reg = new RegExp("[^\/]+", "g");
  return path.match(reg);
}

export async function loadAndFormatCollection(name) {
  const coll = await getCollection(name);

  coll.forEach((c) => {
    const date = c.data.pubDate;
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDay() + 1).toString().padStart(2, '0');

    c.data.year = year;
    c.data.month = month;
    c.data.day = day;
  });

  return coll;
}
