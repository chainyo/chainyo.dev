import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { blogFrontmatterSchema, slugifyTitle } from "$lib/blog/index.js";

const blogModules = import.meta.glob("/src/content/blog/*.md", { eager: true });
const blogRawModules = import.meta.glob("/src/content/blog/*.md", {
	eager: true,
	query: "?raw",
	import: "default",
});
const repoUrl = "https://github.com/chainyo/chainyo.dev";
const repoBranch = "main";

type BlogModule = {
	metadata?: Record<string, unknown>;
	default?: unknown;
};

export const load: PageLoad = async ({ params }) => {
	const posts = Object.entries(blogModules).map(([path, mod]) => {
		const module = mod as BlogModule;
		const raw = module.metadata ?? {};
		const parsed = blogFrontmatterSchema.parse(raw);
		const slug = slugifyTitle(parsed.title);

		return {
			slug,
			...parsed,
			path,
			module,
		};
	});

	posts.sort((a, b) => {
		const aTime = Number(new Date(a.date));
		const bTime = Number(new Date(b.date));
		return bTime - aTime;
	});

	const activePost = posts.find((post) => post.slug === params.slug);

	if (activePost) {
		const rawSource = blogRawModules[activePost.path];
		const markdown =
			typeof rawSource === "string"
				? rawSource.replace(/^---[\\s\\S]*?---\\s*/, "")
				: "";
		const repoPath = activePost.path.startsWith("/") ? activePost.path.slice(1) : activePost.path;
		const repoFileUrl = `${repoUrl}/blob/${repoBranch}/${repoPath}`;
		const { module, ...postData } = activePost;

		return {
			post: {
				component: module.default,
				markdown,
				repoFileUrl,
				...postData,
			},
			posts: posts.map(({ slug, title, date }) => ({ slug, title, date })),
		};
	}

	throw error(404, "Post not found");
};
