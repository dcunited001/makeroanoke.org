import { reference, z } from 'astro:content';
import type { SchemaContext } from 'astro:content';

// TODO: use SchemaContext to parameterize
// export const articleSchema = ({ image }: SchemaContext) =>
//   z.object({
//     images: imagesSchema({image}).optional()
//   })

export const dateSchema = z.coerce.date();

export const tagSchema = z.string();
export const categorySchema = z.string();

export const peopleSchema =
  z.object({
    name: z.string(),
    headshot: z.string().optional()
  });
// z.infer<ReturnType<...>> when peopleSchema is parameterized
export type People = ReadOnly<z.infer<typeof peopleSchema>>;

// TODO: implement ImageFunction for image optimization
// ({ image }: SchemaContext) optimizes image size/etc for preload
export const postSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    // author: peopleSchema,
    author: reference('people'),
    pubDate: dateSchema,
    updatedDate: dateSchema.optional(),
    heroImage: z.string().optional(),

    tags: z.array(tagSchema).nullable().optional(),
    category: categorySchema.optional(),
  });
// export type People = ReadOnly<z.infer<ReturnType<typeof peopleSchema>> & {}>;
export type Post = ReadOnly<z.infer<ReturnType<typeof postSchema>> & {
  previous?: Post;
  next?: Post;
}>;

export const eventSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    author: reference('people'),
    pubDate: dateSchema,
    updatedDate: dateSchema.optional(),
    heroImage: z.string().optional(),

    onlineUrl: z.string().optional(),
    locationUrl: z.string().optional(),

    tags: z.array(tagSchema).nullable().optional(),
    category: categorySchema.optional(),
  });

export type Event = ReadOnly<z.infer<ReturnType<typeof eventSchema>> & {
  previous?: Event;
  next?: Event;
}>;
