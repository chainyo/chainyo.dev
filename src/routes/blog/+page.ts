import type { PageLoad } from "./$types";
import { blogFrontmatterSchema, slugifyTitle } from "$lib/blog/index.js";

const blogModules = import.meta.glob("/src/content/blog/*.md", { eager: true });

type BlogModule = {
	metadata?: Record<string, unknown>;
	default?: unknown;
};

export const load: PageLoad = async () => {
	const posts = Object.entries(blogModules).map(([path, mod]) => {
		const module = mod as BlogModule;
		const raw = module.metadata ?? {};
		const parsed = blogFrontmatterSchema.parse(raw);
		const slug = slugifyTitle(parsed.title);

		return {
			slug,
			...parsed,
			path,
		};
	});

	posts.sort((a, b) => {
		const aTime = Number(new Date(a.date));
		const bTime = Number(new Date(b.date));
		return bTime - aTime;
	});

	return { posts };
};
