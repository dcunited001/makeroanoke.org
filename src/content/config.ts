import { defineCollection, reference, z } from "astro:content";

const tag = z.string();
const tags = z.array(tag);
const category = z.string();
const categories = z.array(category);

const people = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    headshot: z.string().optional()
  })
});

// TODO: object type
const roles = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string().uuid(),
    name: z.string()
  })
});

const posts = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
    author: reference('people'),
    tags: tags.nullable().optional(),
    category: category.optional()
	}),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    onlineUrl: z.string().optional(),
    locationUrl: z.string().optional(),
    author: reference('people'),
    tags: tags.nullable().optional(),
    category: category.optional()
  })
})



export const collections = {
  people,
  roles,
  posts,
  events,
  tag,
  tags,
  category,
  categories
};
