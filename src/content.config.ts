import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Bilingual text helper: every visible string carries DE + EN.
const bilingual = z.object({ de: z.string(), en: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: bilingual,
      category: z.enum(['cv', 'ml', 'embedded', 'web', 'security', 'systems']),
      tech: z.array(z.string()).default([]),
      year: z.string(),
      status: z.enum(['active', 'finished', 'prototype', 'research']).default('finished'),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      cover: image().optional(),
    }),
});

export const collections = { projects };
