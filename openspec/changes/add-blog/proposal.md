# Change: Add markdown-driven blog

## Why
The site needs a first-class blog to publish long-form posts with rich formatting and readable code snippets.

## What Changes
- Add a blog index at `/blog` that lists posts with newest first
- Add blog post pages at `/blog/[slug]` rendered from markdown files
- Define a markdown frontmatter schema for post metadata
- Render links, images, and code blocks with the existing markdown component set
- Introduce collapsible code blocks that expand on demand, using shadcn-svelte components

## Impact
- Affected specs: blog (new)
- Affected code: `src/routes/blog`, markdown component set in `src/lib/components/markdown`, blog content folder
