import {
  categorySchema,
  eventSchema,
  peopleSchema,
  postSchema,
  tagSchema,
} from '@/domain/types';
import { defineCollection } from 'astro:content';

const tag = tagSchema;
const category = defineCollection({
  type: 'data',
  schema: categorySchema,
});

const people = defineCollection({
  type: 'data',
  schema: peopleSchema,
});

const posts = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: postSchema,
});

const events = defineCollection({
  type: 'content',
  schema: eventSchema,
});

export const collections = {
  people: people,
  // 'roles': roles,
  posts: posts,
  events: events,
  tag: tag,
  category: category,
};
