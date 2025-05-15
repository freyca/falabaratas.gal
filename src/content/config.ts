import { defineCollection, z } from "astro:content";

const works = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
    })
})

export const collections = { works };