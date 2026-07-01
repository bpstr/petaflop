import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS, DEFAULT_CATEGORY } from './utils/categories';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    category: z.enum(CATEGORY_SLUGS).default(DEFAULT_CATEGORY),
    tags: z.array(z.string()).default([]),
    hidden: z.boolean().default(false),
    draft: z.boolean().default(false),

    cover: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    summary: z.string().optional(),
  }),
});

const tools = defineCollection({
  loader: glob({ base: './src/content/tools', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    description: z.string().optional(),

    category: z.enum([
      'chat',
      'image',
      'design',
      'music',
      'code',
      'research',
      'productivity',
      'video',
      'voice',
      'writing',
      'other',
    ]).default('other'),

    provider: z.string().optional(), // e.g. OpenAI, Google, Anthropic
    featured: z.boolean().default(false),
    icon: z.string().optional()
  }),
});

export const collections = { posts, pages, tools };
