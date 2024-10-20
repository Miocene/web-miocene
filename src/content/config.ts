import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    
    lightImage: image().refine((img) => img.width >= 100, {
      message: "Cover image must be at least 100 pixels wide!",
    }),
    darkImage: image().refine((img) => img.width >= 100, {
      message: "Cover image must be at least 100 pixels wide!",
    }),

    tags: z.array(z.string())
  })
});

const demosCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    
    youtubeLink: z.string(),
    codepenLink: z.string(),
    caption: z.string(),
    
    cover: image().refine((img) => img.width >= 100, {
      message: "Cover image must be at least 100 pixels wide!",
    }),

    tags: z.array(z.string())
  })
});

export const collections = {
  posts: postsCollection,
  demos: demosCollection,
};