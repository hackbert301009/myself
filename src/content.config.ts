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
      // Flag content that still needs the owner's confirmation before publishing.
      needsConfirmation: z.boolean().default(false),
    }),
});

const certificates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certificates' }),
  schema: ({ image }) =>
    z.object({
      title: bilingual,
      issuer: z.string(),
      year: z.string(),
      category: z.enum(['ml', 'linux', 'security', 'network', 'dev', 'academic']),
      credentialUrl: z.string().url().optional(),
      image: image().optional(),
      order: z.number().default(99),
      needsConfirmation: z.boolean().default(false),
    }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: ({ image }) =>
    z.object({
      title: bilingual,
      summary: bilingual,
      venue: z.string().optional(),
      year: z.string(),
      kind: z.enum(['whitepaper', 'competition', 'thesis', 'course', 'publication']),
      link: z.string().url().optional(),
      cover: image().optional(),
      order: z.number().default(99),
      needsConfirmation: z.boolean().default(false),
    }),
});

const labs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/labs' }),
  schema: z.object({
    title: z.string(),
    summary: bilingual,
    kind: z.enum(['browser', 'external', 'repo']),
    embed: z.string().optional(),
    link: z.string().url().optional(),
    tech: z.array(z.string()).default([]),
    needsCamera: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: bilingual,
      excerpt: bilingual,
      date: z.coerce.date(),
      category: z.string(),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, certificates, research, labs, posts };
