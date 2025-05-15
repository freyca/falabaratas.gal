import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders';

const works = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
    })
})

export const collections = { works };