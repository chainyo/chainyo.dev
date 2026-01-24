import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { blogFrontmatterSchema, slugifyTitle } from "$lib/blog/index.js";

const blogModules = import.meta.glob("/src/content/blog/*.md", { eager: true });

type BlogModule = {
	metadata?: Record<string, unknown>;
	default?: unknown;
};

export const load: PageLoad = async ({ params }) => {
	for (const [path, mod] of Object.entries(blogModules)) {
		const module = mod as BlogModule;
		const raw = module.metadata ?? {};
		const parsed = blogFrontmatterSchema.parse(raw);
		const slug = slugifyTitle(parsed.title);

		if (slug === params.slug) {
			return {
				post: {
					slug,
					component: module.default,
					...parsed,
					path,
				},
			};
		}
	}

	throw error(404, "Post not found");
};
