import { defineCollection, reference, z } from 'astro:content';
import {
  dateSchema,
  tagSchema,
  peopleSchema,
  categorySchema,
  postSchema,
  eventSchema,
} from '@/domain/types';

// TODO: tags/category schemas

const tag = tagSchema;
const category = defineCollection({
  type: 'data',
  schema: categorySchema,
});

const people = defineCollection({
  type: 'data',
  schema: peopleSchema,
});

// TODO: object type
// const roles = defineCollection({
//   type: 'data',
//   schema: z.object({
//     id: z.string().uuid(),
//     name: z.string()
//   })
// });

const posts = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: postSchema,
});

const events = defineCollection({
  type: 'content',
  schema: eventSchema,
});

// const tags = defineCollection({
//   type: "content",
//   schema: z.object({
//     name: z.string()
//   })
// });

// const categories = defineCollection({
//   type: "content",
//   schema: z.object({
//     name: z.string()
//   })
// });

export const collections = {
  people: people,
  // 'roles': roles,
  posts: posts,
  events: events,
  tag: tag,
  category: category,
};
