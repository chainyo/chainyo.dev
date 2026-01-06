<script lang="ts">
    import { Package } from "@lucide/svelte";
	import { page } from "$app/stores";
	import { siteConfig } from "$lib/config/site.js";
	import { cn } from "$lib/utils.js";

	let pathname = "";

	$: pathname = $page.url.pathname;
</script>

<div class="mr-4 hidden md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<Package class="h-6 w-6" />
		<span class="hidden font-bold xl:inline-block">
			{siteConfig.name}
		</span>
	</a>
	<nav class="flex items-center gap-6 text-sm">
		<a
			href="/docs"
			class={cn(
				"hover:text-foreground/80 transition-colors",
				pathname.startsWith("/docs") ? "text-foreground" : "text-foreground/60"
			)}
		>
			Docs
		</a>
		<a
			href="/docs/components"
			class={cn(
				"hover:text-foreground/80 transition-colors",
				pathname.startsWith("/docs/components")
					? "text-foreground"
					: "text-foreground/60"
			)}
		>
			Components
		</a>
		<a
			href="/themes"
			class={cn(
				"hover:text-foreground/80 transition-colors",
				pathname.startsWith("/themes") ? "text-foreground" : "text-foreground/60"
			)}
		>
			Themes
		</a>
		<a
			href="/examples"
			class={cn(
				"hover:text-foreground/80 transition-colors",
				pathname.startsWith("/examples")
					? "text-foreground"
					: "text-foreground/60"
			)}
		>
			Examples
		</a>

		<a
			href="/blocks"
			class={cn(
				"hover:text-foreground/80 transition-colors",
				pathname.startsWith("/blocks") ? "text-foreground" : "text-foreground/60"
			)}
		>
			Blocks
		</a>
		<a
			href="/colors"
			class={cn(
				"hover:text-foreground/80 transition-colors",
				pathname.startsWith("/colors") ? "text-foreground" : "text-foreground/60"
			)}
		>
			Colors
		</a>
	</nav>
</div>
