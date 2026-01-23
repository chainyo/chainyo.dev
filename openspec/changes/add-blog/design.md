## Context
The project already uses SvelteKit with the `mdsx` preprocessor and a custom markdown component set in `src/lib/components/markdown`. The blog should build on that pipeline while adding list/detail routes and collapsible code blocks.

## Goals / Non-Goals
- Goals: Markdown-driven posts, `/blog` index, `/blog/[slug]` detail pages, readable and collapsible code snippets, shadcn-svelte UI patterns.
- Non-Goals: CMS integration, comments, RSS, search, or remote content fetching.

## Decisions
- Store blog posts as local markdown files under `src/content/blog/` and load them with `import.meta.glob` at build time.
- Require frontmatter fields: `title`, `date`, `summary`; optional: `cover`, `tags`.
- Derive `slug` by slugifying the `title` (lowercase, hyphenated) and use it for `/blog/[slug]` routing.
- Use the existing markdown component set for links/images and extend the `pre`/code rendering to wrap code blocks in a shadcn-svelte `Collapsible` or `Accordion` with a summary row.
- Default code blocks to collapsed state showing a title (from fenced block meta like `title=...` when present, otherwise the language) plus a short preview line, with an opt-out flag in the fence meta (e.g., `collapsible=false`) to render expanded by default.

## Risks / Trade-offs
- Title-based slugging requires stable titles; changing a title changes its URL.
- Collapsible code blocks may reduce scannability; mitigate with clear titles and a preview line.

## Migration Plan
- Add a single sample post using the new frontmatter schema to validate the pipeline.
- Wire routes and markdown rendering, then iterate on styling.

## Open Questions
- None.
