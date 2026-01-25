<script lang="ts">
	import SiteFooter from "$lib/components/site-footer.svelte";
	import { Moon, Sun } from "@lucide/svelte";
	import BlogLayout from "$lib/components/blog-layout.svelte";

	export let data: {
		posts: Array<{
			slug: string;
			title: string;
			date: string;
			summary: string;
			cover?: string;
			tags?: string[];
		}>;
	};

</script>

<svelte:head>
	<title>Blog — chainyo.dev</title>
	<meta
		name="description"
		content="Notes, builds, and lessons learned while shipping production AI systems."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<BlogLayout let:isDarkMode let:toggleBlogMode>
		<header class="mb-12 flex flex-col gap-4">
			<div class="blog-topline">
				<a
					href="/"
					class="blog-back-link w-fit text-xs uppercase tracking-[0.3em] text-[#3a332d] transition hover:text-[#d97c35]"
				>
					← Back to home
				</a>
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
			<h1 class="font-display text-3xl sm:text-4xl lg:text-5xl">Latest writing</h1>
			<p class="blog-description max-w-2xl text-base leading-relaxed text-[#3a332d] sm:text-lg">
				My shipping notes, deep dives, and experiments from building production-grade AI systems.
			</p>
		</header>

		{#if data.posts.length === 0}
			<div class="blog-empty rounded-3xl border border-dashed border-[#d9c9b6] bg-white/70 p-12 text-center">
				<p class="blog-empty-title text-base font-semibold text-[#1d1a16]">No posts yet.</p>
				<p class="blog-empty-body mt-2 text-sm text-[#6b5d52]">
					Check back soon for new writing.
				</p>
			</div>
		{:else}
			<section class="grid gap-6">
				{#each data.posts as post}
					<article class="blog-card group rounded-3xl border border-[#e0d1c1] bg-white/80 p-6 shadow-[0_20px_40px_-32px_rgba(29,26,22,0.45)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(29,26,22,0.55)]">
						<div class="flex flex-col gap-2">
							<div class="flex flex-col gap-2">
								<p class="blog-card-date text-xs uppercase tracking-[0.25em] text-[#7a6a5e]">
									{post.date}
								</p>
								<a
									href={`/blog/${post.slug}`}
									class="blog-card-title font-display text-2xl text-[#1d1a16] transition group-hover:text-[#d97c35]"
								>
									{post.title}
								</a>
							</div>
							<p class="blog-card-summary mb-2 text-sm leading-relaxed text-[#6b5d52]">
								{post.summary}
							</p>
							<a
								href={`/blog/${post.slug}`}
								class="blog-card-link text-sm font-semibold text-[#d97c35]"
							>
								Read post →
							</a>
						</div>
					</article>
				{/each}
			</section>
		{/if}

		<SiteFooter />
	</BlogLayout>

<style>
	:global(.blog-topline) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	:global(.landing-light.blog-dark .blog-description) {
		color: #d5c6b9;
	}

	:global(.blog-card) {
		position: relative;
	}

	:global(.landing-light.blog-dark .blog-card) {
		background: rgba(22, 19, 17, 0.82);
		border-color: rgba(255, 255, 255, 0.08);
		box-shadow: 0 24px 40px -28px rgba(0, 0, 0, 0.75);
	}

	:global(.landing-light.blog-dark .blog-card:hover) {
		box-shadow: 0 28px 50px -26px rgba(0, 0, 0, 0.82);
	}

	:global(.landing-light.blog-dark .blog-card-date) {
		color: #a9998c;
	}

	:global(.landing-light.blog-dark .blog-card-title) {
		color: #f3eae1;
	}

	:global(.landing-light.blog-dark .blog-card-summary) {
		color: #c7b6a7;
	}

	:global(.landing-light.blog-dark .blog-card-link) {
		color: #f2b67f;
	}

	:global(.blog-empty) {
		border-radius: 24px;
	}

	:global(.landing-light.blog-dark .blog-empty) {
		background: rgba(20, 18, 16, 0.78);
		border-color: rgba(255, 255, 255, 0.1);
	}

	:global(.landing-light.blog-dark .blog-empty-title) {
		color: #f3eae1;
	}

	:global(.landing-light.blog-dark .blog-empty-body) {
		color: #c7b6a7;
	}

	@media (max-width: 640px) {
		:global(.blog-topline) {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}
	}
</style>
