<script lang="ts">
	import FlickeringGrid from "$lib/components/ui/FlickeringGrid.svelte";

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
		<header class="mb-12 flex flex-col gap-4">
			<p class="text-xs uppercase tracking-[0.3em] text-[#3a332d]">Blog</p>
			<h1 class="font-display text-3xl sm:text-4xl lg:text-5xl">Latest writing</h1>
			<p class="max-w-2xl text-base leading-relaxed text-[#3a332d] sm:text-lg">
				Shipping notes, deep dives, and experiments from building production-grade AI systems.
			</p>
		</header>

		{#if data.posts.length === 0}
			<div class="rounded-3xl border border-dashed border-[#d9c9b6] bg-white/70 p-12 text-center">
				<p class="text-base font-semibold text-[#1d1a16]">No posts yet.</p>
				<p class="mt-2 text-sm text-[#6b5d52]">Check back soon for new writing.</p>
			</div>
		{:else}
			<section class="grid gap-6">
				{#each data.posts as post}
					<article class="group rounded-3xl border border-[#e0d1c1] bg-white/80 p-6 shadow-[0_20px_40px_-32px_rgba(29,26,22,0.45)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(29,26,22,0.55)]">
						<div class="flex flex-col gap-4">
							<div class="flex flex-col gap-2">
								<p class="text-xs uppercase tracking-[0.25em] text-[#7a6a5e]">
									{post.date}
								</p>
								<a
									href={`/blog/${post.slug}`}
									class="font-display text-2xl text-[#1d1a16] transition group-hover:text-[#d97c35]"
								>
									{post.title}
								</a>
							</div>
							<p class="text-sm leading-relaxed text-[#6b5d52]">{post.summary}</p>
							<a
								href={`/blog/${post.slug}`}
								class="text-sm font-semibold text-[#d97c35]"
							>
								Read post →
							</a>
						</div>
					</article>
				{/each}
			</section>
		{/if}
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
</style>
