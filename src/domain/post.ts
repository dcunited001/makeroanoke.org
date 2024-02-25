import type { Post } from './types';

export const sortPostsByDate = (posts: readonly Post[]): readonly Post[] =>
  [...posts].sort((a: Post, b: Post) => b.pubDate.valueOf() - a.pubDate.valueOf());

// year as four-digit string
export const filterPostsByYear = (year: string, posts: readonly Post[]): readonly Post[] =>
  [...posts].filter((post) => { post.year === year });

// month as two-digit string
export const filterPostsByYearAndMonth = (year: string, month: string, posts: readonly Post[]): readonly Post[] =>
  filterPostsByYear(year, [...posts]).filter((post) => { post.month === month });

export const decorateWithDate = (posts: readonly Post[]): readonly Post[] =>
  [...posts].map((post) => {
    post.year = post.pubDate.getFullYear().toString();
    post.month = (post.pubDate.getMonth() + 1).toString().padStart(2, '0');
    post.day = (post.pubDate.getDay() + 1).toString().padStart(2, '0');
    return post;
  });

// TODO: not sure if this is the correct pattern?
// export const fetchAuthor = (post: readonly Post): readonly Post =>
