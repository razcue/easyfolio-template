import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		owner: defineCollection({
			type: "data",
			source: "index.json",
			schema: z.object({
				name: z.string(),
				role: z.string(),
				primaryContact: z.enum(["email", "phone", "telegram"]),
				contact: z.object({
					email: z.string(),
					phone: z.string(),
					telegram: z.string(),
					linkedin: z.string(),
				}),
				coverLetter: z.string(),
				skills: z.object({
					tools: z.array(z.string()),
					languages: z.array(z.string()),
					methodologies: z.array(z.string()),
					otherSkills: z.array(z.string()),
				}),
				summary: z.object({
					profile: z.array(z.string()),
					managementBackground: z.array(z.string()),
					technicalBackground: z.array(z.string()),
				}),
				portfolio: z.array(
					z.object({
						name: z.string(),
						url: z.string().url(),
					}),
				),
				education: z.array(
					z.object({
						title: z.string(),
						institution: z.string(),
						date: z.string().optional(),
					}),
				),
				languages: z.array(
					z.object({
						name: z.string(),
						level: z.string(),
					}),
				),
				experience: z.array(
					z.object({
						company: z.string(),
						duration: z.string(),
						role: z.string().optional(),
						project: z.string().optional(),
						technologies: z.array(z.string()).optional(),
						responsibilities: z.array(z.string()),
					}),
				),
				interests: z.array(
					z.object({
						name: z.string(),
						icon: z.string(),
					}),
				),
				availability: z.object({
					travel: z.string(),
					relocate: z.string(),
				}),
			}),
		}),
	},
});
