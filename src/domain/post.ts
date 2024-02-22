import type { Post } from './types';

export const sortPostsByDate = (posts: readonly Post[]): readonly Post[] =>
  [...posts].sort((a: Post, b: Post) => b.pubDate.valueOf() - a.pubDate.valueOf());
