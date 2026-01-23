import { z } from "zod";

export const blogFrontmatterSchema = z.object({
	title: z.string().min(1),
	date: z.string().min(1),
	summary: z.string().min(1),
	cover: z.string().min(1).optional(),
	tags: z.array(z.string().min(1)).optional(),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

export function slugifyTitle(title: string): string {
	return title
		.toLowerCase()
		.trim()
		.replace(/['"`]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}
