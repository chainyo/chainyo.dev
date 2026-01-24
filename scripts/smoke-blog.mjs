import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const requiredFiles = [
	"src/routes/blog/+page.ts",
	"src/routes/blog/+page.svelte",
	"src/routes/blog/[slug]/+page.ts",
	"src/routes/blog/[slug]/+page.svelte",
	"src/lib/blog/index.ts",
	"src/lib/components/markdown/blueprint.svelte",
];

const missing = requiredFiles.filter((file) => !existsSync(resolve(root, file)));
if (missing.length > 0) {
	console.error("Missing required blog files:\n" + missing.map((file) => `- ${file}`).join("\n"));
	process.exit(1);
}

const blogIndexSource = readFileSync(resolve(root, "src/routes/blog/+page.ts"), "utf8");
if (!blogIndexSource.includes("import.meta.glob(\"/src/content/blog/*.md\"")) {
	console.error("Blog index loader does not include the expected content glob.");
	process.exit(1);
}

const blogDetailSource = readFileSync(resolve(root, "src/routes/blog/[slug]/+page.ts"), "utf8");
if (!blogDetailSource.includes("import.meta.glob(\"/src/content/blog/*.md\"")) {
	console.error("Blog detail loader does not include the expected content glob.");
	process.exit(1);
}

console.log("Blog smoke check passed.");
