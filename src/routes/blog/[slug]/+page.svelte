<script lang="ts">
	import FlickeringGrid from "$lib/components/ui/FlickeringGrid.svelte";
	import { Github } from "@lucide/svelte";
	import SiteFooter from "$lib/components/site-footer.svelte";
	import { CopyButton } from "$lib/components/index.js";
	import { createCopyCodeButton } from "$lib/utils.js";

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

<div class="landing-light relative min-h-screen overflow-hidden bg-[#f8f4ee] text-[#1d1a16]">
	<div class="pointer-events-none absolute inset-0">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f3dcc2_0%,_#f8f4ee_45%,_#eef2f5_100%)]"
		></div>
		<div class="absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#e6b28a]/40 blur-3xl"></div>
		<div class="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-[#b7d7d9]/35 blur-3xl"></div>
	</div>

	<FlickeringGrid
		class="absolute inset-0 h-full w-full opacity-25"
		squareSize={4}
		gridGap={6}
		color="#bda995"
		maxOpacity={0.4}
		flickerChance={0.08}
	/>

	<main class="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-16 lg:pt-24">
		<a
			href="/blog"
			class="mb-6 inline-flex w-fit text-xs uppercase tracking-[0.3em] text-[#3a332d] transition hover:text-[#d97c35]"
		>
			← Back to blog
		</a>

		<section class="blog-post">
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
	</main>
</div>

<style>
	:global(body) {
		font-family: "Instrument Sans", "Helvetica Neue", Arial, sans-serif;
	}

	:global(.font-display) {
		font-family: "Space Grotesk", "Trebuchet MS", sans-serif;
		letter-spacing: -0.02em;
	}

	:global(.landing-light) {
		color-scheme: light;
		--background: hsl(0 0% 100%);
		--foreground: hsl(240 10% 3.9%);
		--muted: hsl(240 4.8% 95.9%);
		--muted-foreground: hsl(240 3.8% 46.1%);
		--popover: hsl(0 0% 100%);
		--popover-foreground: hsl(240 10% 3.9%);
		--card: hsl(0 0% 100%);
		--card-foreground: hsl(240 10% 3.9%);
		--border: hsl(240 5.9% 90%);
		--input: hsl(240 5.9% 90%);
		--primary: hsl(240 5.9% 10%);
		--primary-foreground: hsl(0 0% 98%);
		--secondary: hsl(240 4.8% 95.9%);
		--secondary-foreground: hsl(240 5.9% 10%);
		--accent: hsl(240 4.8% 95.9%);
		--accent-foreground: hsl(240 5.9% 10%);
		--destructive: hsl(0 72.2% 50.6%);
		--destructive-foreground: hsl(0 0% 98%);
		--ring: hsl(240 10% 3.9%);
		--sidebar: hsl(0 0% 98%);
		--sidebar-foreground: hsl(240 5.3% 26.1%);
		--sidebar-primary: hsl(240 5.9% 10%);
		--sidebar-primary-foreground: hsl(0 0% 98%);
		--sidebar-accent: hsl(240 4.8% 95.9%);
		--sidebar-accent-foreground: hsl(240 5.9% 10%);
		--sidebar-border: hsl(220 13% 91%);
		--sidebar-ring: hsl(217.2 91.2% 59.8%);
	}

	:global(.blog-post) {
		max-width: 100%;
	}

	:global(.blog-content) {
		background: rgba(253, 248, 241, 0.5);
		padding: 28px 32px;
		border-radius: 10px;
		font-family: "Instrument Sans", "Helvetica Neue", Arial, sans-serif;
		position: relative;
	}

	:global(.blog-actions) {
		position: absolute;
		top: 18px;
		right: 18px;
		display: flex;
		gap: 6px;
	}

	:global(.blog-action-button) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 44px;
		width: 44px;
		border-radius: 8px;
		border: none;
		background: transparent;
		color: #7a6a5e;
		transition: background 150ms ease, color 150ms ease;
	}

	:global(.blog-action-button:hover) {
		background: rgba(255, 255, 255, 0.7);
		color: #3a332d;
	}

	:global(.blog-action-button svg) {
		width: 16px;
		height: 16px;
	}

	:global(.blog-header) {
		margin-bottom: 2.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgba(217, 201, 182, 0.6);
	}

	:global(.blog-header-meta) {
		display: flex;
		flex-direction: column;
		gap: 16px;
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
		line-height: 1.6;
		margin-top: 0.9rem;
	}

	:global(.blog-post p:first-child) {
		margin-top: 0;
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
</style>
