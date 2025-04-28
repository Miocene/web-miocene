import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	post: defineCollection({
		// Load Markdown files in the src/content/post directory.
		loader: glob({ base: './src/content/post', pattern: '**/*.mdx', }),
		schema: ({ image }) => z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			tags: z.array(z.string()),
			lightImage: image().optional(),
			darkImage: image().optional(),
		}),
	}),
	demo: defineCollection({
		// Load Markdown files in the src/content/demo directory.
		loader: glob({ base: './src/content/demo', pattern: '**/*.mdx', }),
		schema: ({ image }) => z.object({
			title: z.string(),
			pubDate: z.coerce.date(),
			cover: image(),
			tags: z.array(z.string()),
			youtubeLink: z.string().optional(),
			codepenLink: z.string().optional(),
			caption: z.string().optional(),
		}),
	}),
};