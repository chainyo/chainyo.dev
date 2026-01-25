<script lang="ts">
	import FlickeringGrid from "$lib/components/ui/FlickeringGrid.svelte";
	import { onMount } from "svelte";

	let isDarkMode = false;
	let userToggledMode = false;
	const blogModeStorageKey = "blog-mode-override";

	const toggleBlogMode = () => {
		userToggledMode = true;
		isDarkMode = !isDarkMode;
		if (typeof localStorage !== "undefined") {
			localStorage.setItem(blogModeStorageKey, isDarkMode ? "dark" : "light");
		}
	};

	onMount(() => {
		if (typeof window === "undefined" || !window.matchMedia) {
			return;
		}

		const storedMode = localStorage.getItem(blogModeStorageKey);
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		if (storedMode === "dark" || storedMode === "light") {
			userToggledMode = true;
			isDarkMode = storedMode === "dark";
		} else {
			isDarkMode = mediaQuery.matches;
		}

		const handleChange = (event: MediaQueryListEvent) => {
			if (!userToggledMode) {
				isDarkMode = event.matches;
			}
		};

		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	});
</script>

<div
	class="landing-light relative min-h-screen overflow-hidden bg-[#f8f4ee] text-[#1d1a16]"
	class:blog-dark={isDarkMode}
>
	<div class="pointer-events-none absolute inset-0 blog-atmosphere">
		<div
			class="blog-radial absolute inset-0 bg-[radial-gradient(circle_at_top,_#f3dcc2_0%,_#f8f4ee_45%,_#eef2f5_100%)]"
		></div>
		<div
			class="blog-glow blog-glow-top absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#e6b28a]/40 blur-3xl"
		></div>
		<div
			class="blog-glow blog-glow-bottom absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-[#b7d7d9]/35 blur-3xl"
		></div>
	</div>

	<FlickeringGrid
		class="absolute inset-0 h-full w-full opacity-25"
		squareSize={4}
		gridGap={6}
		color={isDarkMode ? "#4a3f35" : "#bda995"}
		maxOpacity={0.4}
		flickerChance={0.08}
	/>

	<main class="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-16 lg:pt-24">
		<slot {isDarkMode} {toggleBlogMode} />
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

	:global(.landing-light.blog-dark) {
		color-scheme: dark;
		background: #12100e;
		color: #f3eae1;
		--background: hsl(240 10% 3.9%);
		--foreground: hsl(0 0% 98%);
		--muted: hsl(240 3.7% 15.9%);
		--muted-foreground: hsl(240 5% 64.9%);
		--popover: hsl(240 10% 3.9%);
		--popover-foreground: hsl(0 0% 98%);
		--card: hsl(240 10% 3.9%);
		--card-foreground: hsl(0 0% 98%);
		--border: hsl(240 3.7% 15.9%);
		--input: hsl(240 3.7% 15.9%);
		--primary: hsl(0 0% 98%);
		--primary-foreground: hsl(240 5.9% 10%);
		--secondary: hsl(240 3.7% 15.9%);
		--secondary-foreground: hsl(0 0% 98%);
		--accent: hsl(240 3.7% 15.9%);
		--accent-foreground: hsl(0 0% 98%);
		--destructive: hsl(0 62.8% 30.6%);
		--destructive-foreground: hsl(0 0% 98%);
		--ring: hsl(240 4.9% 83.9%);
		--sidebar: hsl(240 5.9% 10%);
		--sidebar-foreground: hsl(240 4.8% 95.9%);
		--sidebar-primary: hsl(224.3 76.3% 48%);
		--sidebar-primary-foreground: hsl(0 0% 100%);
		--sidebar-accent: hsl(240 3.7% 15.9%);
		--sidebar-accent-foreground: hsl(240 4.8% 95.9%);
		--sidebar-border: hsl(240 3.7% 15.9%);
		--sidebar-ring: hsl(217.2 91.2% 59.8%);
	}

	:global(.landing-light.blog-dark .blog-atmosphere .blog-radial) {
		background: radial-gradient(circle at top, #2c231c 0%, #15120f 55%, #0e1013 100%);
	}

	:global(.landing-light.blog-dark .blog-atmosphere .blog-glow-top) {
		background: rgba(155, 101, 56, 0.18);
	}

	:global(.landing-light.blog-dark .blog-atmosphere .blog-glow-bottom) {
		background: rgba(80, 120, 128, 0.18);
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

	:global(.landing-light.blog-dark .blog-action-button) {
		color: #c7b6a7;
	}

	:global(.landing-light.blog-dark .blog-action-button:hover) {
		background: rgba(255, 255, 255, 0.08);
		color: #f2e6dc;
	}

	:global(.blog-action-button svg) {
		width: 16px;
		height: 16px;
	}

	:global(.landing-light.blog-dark .blog-back-link) {
		color: #c7b6a7;
	}

	:global(.landing-light.blog-dark .blog-back-link:hover) {
		color: #f2b67f;
	}
</style>
