<script lang="ts">
	import { Github, Moon, MoreVertical, Sun } from "@lucide/svelte";
	import SiteFooter from "$lib/components/site-footer.svelte";
	import { CopyButton, TableOfContents } from "$lib/components/index.js";
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger,
	} from "$lib/components/ui/dropdown-menu/index.js";
	import { createCopyCodeButton } from "$lib/utils.js";
	import BlogLayout from "$lib/components/blog-layout.svelte";
	import { goto } from "$app/navigation";

	export let data: {
		post: {
			slug: string;
			title: string;
			date: string;
			summary: string;
			cover?: string;
			tags?: string[];
			component?: unknown;
			markdown?: string;
			repoFileUrl?: string;
		};
		posts: Array<{
			slug: string;
			title: string;
			date: string;
		}>;
	};

	const Post = data.post.component as typeof import("svelte").SvelteComponent | undefined;
	let latestPosts: Array<{ slug: string; title: string; date: string }> = [];

	const { copied, copyCode, codeString } = createCopyCodeButton();

	$: if (data.post?.markdown) {
		codeString.set(data.post.markdown);
	}

	$: latestPosts = data.posts;
</script>

<svelte:head>
	<title>{data.post.title} — Blog — chainyo.dev</title>
	<meta name="description" content={data.post.summary} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<BlogLayout let:isDarkMode let:toggleBlogMode>
	<section class="blog-post">
		<div class="blog-shell">
			<aside class="blog-rail blog-rail-left">
				<div class="blog-rail-inner">
					<p class="blog-rail-title">Latest posts</p>
					<ol class="blog-rail-list">
						{#each latestPosts as post}
							<li>
								<a
									href={`/blog/${post.slug}`}
									class="blog-rail-link"
									class:blog-rail-link-current={post.slug === data.post.slug}
									aria-label={`Read ${post.title}`}
									aria-current={post.slug === data.post.slug ? "page" : undefined}
								>
									<span class="blog-rail-date">{post.date}</span>
									<span class="blog-rail-title-text">{post.title}</span>
								</a>
							</li>
						{/each}
					</ol>
				</div>
			</aside>

			<div class="blog-main">
				<div class="blog-back">
					<div class="blog-back-row">
					<a
						href="/blog"
						class="blog-back-link inline-flex w-fit text-xs uppercase tracking-[0.3em] text-[#3a332d] transition hover:text-[#d97c35]"
					>
						← Back to blog
					</a>
						<div class="blog-mobile-menu">
							<DropdownMenu>
								<DropdownMenuTrigger
									class="blog-action-button blog-mobile-menu-trigger"
									aria-label="Open post list"
								>
									<MoreVertical class="h-4 w-4" />
								</DropdownMenuTrigger>
								<DropdownMenuContent class="blog-mobile-menu-content" sideOffset={8}>
									{#each latestPosts as post}
										<DropdownMenuItem
											class={`blog-mobile-menu-item${post.slug === data.post.slug ? " blog-mobile-menu-item-current" : ""}`}
											onSelect={() => goto(`/blog/${post.slug}`)}
										>
											<span class="blog-mobile-menu-date">{post.date}</span>
											<span class="blog-mobile-menu-title">{post.title}</span>
										</DropdownMenuItem>
									{/each}
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				</div>
				<div class="blog-content">
					<div class="blog-actions">
						{#if data.post.repoFileUrl}
							<a
								href={data.post.repoFileUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="blog-action-button"
								aria-label="Open blog post on GitHub"
							>
								<Github class="h-4 w-4" />
							</a>
						{/if}
						<CopyButton
							copied={$copied}
							copyCode={copyCode}
							value={$codeString}
							class="static blog-action-button h-11 w-11 text-[#5f4f44]"
							aria-label="Copy markdown"
						/>
						<button
							type="button"
							class="blog-action-button"
							on:click={toggleBlogMode}
							aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
							aria-pressed={isDarkMode}
						>
							{#if isDarkMode}
								<Sun class="h-4 w-4" />
							{:else}
								<Moon class="h-4 w-4" />
							{/if}
						</button>
					</div>
					<header class="blog-header">
						<div class="blog-header-meta">
							<p class="text-sm uppercase tracking-[0.2em] text-[#5f4f44]">{data.post.date}</p>
							<h1 class="font-display text-3xl sm:text-4xl lg:text-5xl">{data.post.title}</h1>
							<p class="text-xl font-semibold leading-relaxed text-[#3a332d]">
								{data.post.summary}
							</p>
						</div>
					</header>
					{#if Post}
						<div id="markdown" class="blog-markdown">
							<svelte:component this={Post} />
						</div>
					{/if}
				</div>
			</div>

			<aside class="blog-rail blog-rail-right">
				<div class="blog-rail-inner blog-rail-toc">
					<TableOfContents />
				</div>
			</aside>
		</div>
	</section>

	<SiteFooter />
</BlogLayout>

<style>
	:global(.blog-post) {
		max-width: 100%;
	}

	:global(.blog-shell) {
		display: grid;
		gap: 32px;
		align-items: start;
		grid-template-columns: minmax(0, 1fr);
	}

	:global(.blog-rail) {
		width: 100%;
	}

	:global(.blog-rail-inner) {
		position: sticky;
		top: 6rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	:global(.blog-rail-title) {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.35em;
		color: #5f4f44;
	}

	:global(.blog-rail-list) {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	:global(.blog-rail-link) {
		display: flex;
		flex-direction: column;
		gap: 4px;
		color: #3a332d;
		font-size: 0.95rem;
		transition: color 150ms ease;
	}

	:global(.blog-rail-link:hover) {
		color: #d97c35;
	}

	:global(.blog-rail-link-current) {
		color: #1d1a16;
	}

	:global(.blog-rail-link-current .blog-rail-title-text) {
		font-weight: 700;
	}

	:global(.blog-rail-date) {
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.25em;
		color: #5f4f44;
	}

	:global(.blog-rail-title-text) {
		font-weight: 600;
		line-height: 1.35;
	}

	:global(.blog-main) {
		width: 100%;
	}

	:global(.blog-back) {
		width: 100%;
		max-width: 72ch;
		margin: 0 auto 1.5rem;
	}

	:global(.blog-back-row) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	:global(.blog-mobile-menu) {
		display: none;
	}

	:global(.blog-mobile-menu-content) {
		min-width: min(80vw, 320px);
		border-color: rgba(224, 209, 193, 0.9);
		background: rgba(253, 248, 241, 0.98);
		color: #1d1a16;
	}

	:global(.blog-mobile-menu-item) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
		width: 100%;
		padding: 0.5rem 0.6rem;
	}

	:global(.blog-mobile-menu-date) {
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: #5f4f44;
	}

	:global(.blog-mobile-menu-title) {
		font-size: 0.95rem;
		font-weight: 600;
		line-height: 1.3;
		color: #1d1a16;
	}

	:global(.blog-mobile-menu-item-current .blog-mobile-menu-title) {
		font-weight: 700;
	}

	:global(.blog-content) {
		background: rgba(253, 248, 241, 0.5);
		padding: 28px 32px;
		border-radius: 10px;
		font-family: "Instrument Sans", "Helvetica Neue", Arial, sans-serif;
		position: relative;
		width: 100%;
		max-width: 72ch;
		margin: 0 auto;
	}

	:global(.landing-light.blog-dark .blog-content) {
		background: rgba(20, 18, 16, 0.82);
		border: 1px solid rgba(255, 255, 255, 0.06);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
	}

	:global(.blog-actions) {
		position: absolute;
		top: 18px;
		right: 18px;
		display: flex;
		gap: 6px;
	}

	:global(.blog-header) {
		margin-bottom: 2.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgba(217, 201, 182, 0.6);
	}

	:global(.landing-light.blog-dark .blog-header) {
		border-bottom-color: rgba(255, 255, 255, 0.12);
	}

	:global(.blog-header-meta) {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	:global(.landing-light.blog-dark .blog-header-meta p) {
		color: #e0d3c6;
	}

	:global(.landing-light.blog-dark .blog-header-meta p:first-child) {
		color: #d7c8bb;
	}

	:global(.blog-copy) {
		align-self: flex-start;
	}

	:global(.blog-post .blog-content #markdown > h1:first-of-type) {
		display: none;
	}

	:global(.blog-post p) {
		font-family: "Instrument Sans", "Helvetica Neue", Arial, sans-serif;
		font-size: 1rem;
		line-height: 1.65;
		margin: 0.9rem 0 1.1rem;
		text-wrap: pretty;
	}

	:global(.blog-post p:first-child) {
		margin-top: 0;
	}

	:global(.blog-post p:last-child) {
		margin-bottom: 0;
	}

	:global(.blog-post h2) {
		margin-top: 2rem;
		padding-bottom: 0.4rem;
	}

	:global(.blog-post h3) {
		margin-top: 1.6rem;
	}

	:global(.blog-post ul),
	:global(.blog-post ol) {
		margin-top: 0.8rem;
	}

	:global(.landing-light.blog-dark .blog-rail-link) {
		color: #e0d3c6;
	}

	:global(.landing-light.blog-dark .blog-rail-link:hover) {
		color: #f2b67f;
	}

	:global(.landing-light.blog-dark .blog-rail-link-current) {
		color: #f3eae1;
	}

	:global(.landing-light.blog-dark .blog-rail-date) {
		color: #d7c8bb;
	}

	:global(.landing-light.blog-dark .blog-rail-title) {
		color: #d7c8bb;
	}

	:global(.landing-light.blog-dark .blog-mobile-menu-content) {
		border-color: rgba(255, 255, 255, 0.12);
		background: rgba(20, 18, 16, 0.92);
		color: #f3eae1;
	}

	:global(.landing-light.blog-dark .blog-mobile-menu-date) {
		color: #d7c8bb;
	}

	:global(.landing-light.blog-dark .blog-mobile-menu-title) {
		color: #f3eae1;
	}

	@media (min-width: 1024px) {
		:global(.blog-shell) {
			grid-template-columns: minmax(180px, 240px) minmax(0, 1fr) minmax(180px, 240px);
		}

		:global(.blog-rail-left) {
			justify-self: start;
		}

		:global(.blog-rail-right) {
			justify-self: end;
		}
	}

	@media (max-width: 1023px) {
		:global(.blog-rail-left),
		:global(.blog-rail-right) {
			display: none;
		}

		:global(.blog-mobile-menu) {
			display: inline-flex;
		}
	}

	@media (max-width: 640px) {
		:global(.blog-rail-inner) {
			position: static;
		}

		:global(.blog-back) {
			max-width: 100%;
			margin-bottom: 1.25rem;
		}

		:global(.blog-content) {
			padding: 22px 20px;
			max-width: 100%;
		}

		:global(.blog-post p) {
			font-size: 1.05rem;
			line-height: 1.8;
			margin: 1.1rem 0 1.3rem;
		}

		:global(.blog-header) {
			margin-bottom: 2rem;
			padding-bottom: 1.25rem;
		}
	}
</style>
