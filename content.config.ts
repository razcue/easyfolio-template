import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        owner: defineCollection({
            type: 'data',
            source: 'index.json',
            schema: z.object({
                name: z.string(),
                role: z.string(),
                primaryContact: z.enum(['email', 'phone', 'telegram']),
                contact: z.object({
                    email: z.string(),
                    phone: z.string(),
                    telegram: z.string(),
                    linkedin: z.string()
                }),
                summary: z.object({
                    profile: z.array(z.string()),
                    managementBackground: z.array(z.string()),
                    technicalBackground: z.array(z.string())
                })
            })
        })
    }
})