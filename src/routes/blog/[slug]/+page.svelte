<script lang="ts">
	import { Github, Moon, Sun } from "@lucide/svelte";
	import SiteFooter from "$lib/components/site-footer.svelte";
	import { CopyButton } from "$lib/components/index.js";
	import { createCopyCodeButton } from "$lib/utils.js";
	import BlogLayout from "$lib/components/blog-layout.svelte";

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
	};

	const Post = data.post.component as typeof import("svelte").SvelteComponent | undefined;

	const { copied, copyCode, codeString } = createCopyCodeButton();

	$: if (data.post?.markdown) {
		codeString.set(data.post.markdown);
	}

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
			<div class="blog-back">
				<a
					href="/blog"
					class="blog-back-link inline-flex w-fit text-xs uppercase tracking-[0.3em] text-[#3a332d] transition hover:text-[#d97c35]"
				>
					← Back to blog
				</a>
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
						class="static blog-action-button h-11 w-11 text-[#7a6a5e]"
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
						<p class="text-sm uppercase tracking-[0.2em] text-[#7a6a5e]">{data.post.date}</p>
						<h1 class="font-display text-3xl sm:text-4xl lg:text-5xl">{data.post.title}</h1>
						<p class="text-xl font-semibold leading-relaxed text-[#3a332d]">
							{data.post.summary}
						</p>
					</div>
				</header>
				{#if Post}
					<svelte:component this={Post} />
				{/if}
			</div>
		</section>

		<SiteFooter />
	</BlogLayout>

<style>
	:global(.blog-post) {
		max-width: 100%;
	}

	:global(.blog-back) {
		width: 100%;
		max-width: 72ch;
		margin: 0 auto 1.5rem;
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
		color: #a9998c;
	}

	:global(.blog-copy) {
		align-self: flex-start;
	}

	:global(.blog-post .blog-content > h1:first-of-type) {
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

	@media (max-width: 640px) {
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
