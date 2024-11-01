<script lang="ts">
    import { Check, Copy } from "lucide-svelte";
	import { cn } from "$lib/utils.js";

	export let copied = false;
	export let copyCode = () => {};
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<button
	class={cn(
		"focus-visible:ring-ring absolute right-4 top-4 z-10 inline-flex h-6 w-6 items-center justify-center rounded-md text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
		className
	)}
	on:click={copyCode}
	{...$$restProps}
>
	<span class="sr-only">Copy</span>
	{#if copied}
		<Check class="h-3 w-3" />
	{:else}
		<Copy class="h-3 w-3" />
	{/if}
</button>
