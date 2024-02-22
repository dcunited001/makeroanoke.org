import type { Event } from './types';

export const sortEventsByDate = (posts: readonly Event[]): readonly Event[] =>
  [...posts].sort((a: Event, b: Event) => b.pubDate.valueOf() - a.pubDate.valueOf());
