## ADDED Requirements
### Requirement: Blog index listing
The system SHALL provide a blog index page at `/blog` that lists all published posts in descending order by date (newest first). Each list item SHALL show the post title, published date, and summary, and link to its `/blog/[slug]` page.

#### Scenario: Visitor opens the blog index
- **WHEN** a visitor navigates to `/blog`
- **THEN** the page lists posts newest-first with title, date, summary, and a link to each post

### Requirement: Blog post routing
The system SHALL render a blog post page at `/blog/[slug]` for each markdown post. The slug SHALL be derived from the post title by slugifying it (lowercase, hyphenated).

#### Scenario: Visitor opens a valid post URL
- **WHEN** a visitor navigates to `/blog/my-post-title`
- **THEN** the corresponding markdown post is rendered

### Requirement: Markdown post metadata
The system SHALL load posts from local markdown files that include frontmatter with `title`, `date`, and `summary` fields. The post page SHALL render the title and date above the markdown content.

#### Scenario: Post includes required frontmatter
- **WHEN** a markdown file includes `title`, `date`, and `summary`
- **THEN** the list and detail views display those fields

### Requirement: Rich markdown rendering
The system SHALL render standard markdown features including links, images, tables, and fenced code blocks using the existing markdown component set.

#### Scenario: Post includes a link and image
- **WHEN** a post contains a markdown link and image
- **THEN** they render as styled anchor and responsive image elements

### Requirement: Collapsible code snippets
The system SHALL render fenced code blocks as collapsible sections that are collapsed by default. The collapsed state SHALL show a title (from the code fence meta or language) and a short preview line, and expanding the section SHALL reveal the full code snippet with readable styling and copy-to-clipboard support. The collapsible UI SHALL use shadcn-svelte components. The system SHALL support opting out of collapsing per code block via fence meta (e.g., `collapsible=false`) to render expanded by default.

#### Scenario: Reader expands a code block
- **WHEN** a reader clicks the code block header
- **THEN** the full code snippet is shown and the copy button remains available

#### Scenario: Author opts out of collapsing
- **WHEN** a code fence includes `collapsible=false`
- **THEN** the code block renders expanded by default
