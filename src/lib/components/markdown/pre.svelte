<script lang="ts">
	import { onMount, tick } from "svelte";
	import { CopyButton } from "$lib/components/index.js";
	import * as Accordion from "$lib/components/ui/accordion/index.js";
	import { cn, createCopyCodeButton } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	export { className as class };
	export let isPackageManagerBlock = false;

	const { copied, copyCode, codeString, setCodeString } = createCopyCodeButton();

	let preNode: HTMLPreElement;
	let title = "Code";
	let preview = "";
	let accordionValue = "";
	const accordionItem = `code-${Math.random().toString(36).slice(2, 10)}`;

	$: isOpen = accordionValue === accordionItem;

	function handleCopy() {
		tick().then(() => {
			copyCode();
		});
	}

	const normalizeIndent = (value: string) => {
		const lines = value.replace(/\t/g, "  ").split("\n");
		while (lines.length && lines[0].trim() === "") {
			lines.shift();
		}
		while (lines.length && lines[lines.length - 1].trim() === "") {
			lines.pop();
		}
		const indents = lines
			.filter((line) => line.trim().length > 0)
			.map((line) => (line.match(/^ */)?.[0]?.length ?? 0));
		const minIndent = indents.length ? Math.min(...indents) : 0;
		const trimmed = lines.map((line) => line.slice(minIndent));
		const firstIndex = trimmed.findIndex((line) => line.trim().length > 0);
		if (firstIndex !== -1) {
			trimmed[firstIndex] = trimmed[firstIndex].replace(/^ +/, "");
		}
		return trimmed.join("\n");
	};

	onMount(() => {
		const codeEl = preNode?.querySelector("code");
		if (!codeEl) {
			return;
		}

		const dataTitle =
			codeEl.getAttribute("data-title") ?? preNode.getAttribute("data-title");
		const dataCollapsible =
			codeEl.getAttribute("data-collapsible") ?? preNode.getAttribute("data-collapsible");

		if (dataTitle) {
			title = dataTitle;
		} else {
			const languageMatch = /language-([A-Za-z0-9_-]+)/.exec(codeEl.className);
			if (languageMatch?.[1]) {
				title = languageMatch[1].toUpperCase();
			}
		}

		const raw = codeEl.textContent ?? "";
		const normalized = normalizeIndent(raw);
		if (normalized !== raw) {
			codeEl.textContent = normalized;
			codeString.set(normalized);
		}
		const firstLine = normalized.trim().split("\n")[0] ?? "";
		preview = firstLine.length > 80 ? `${firstLine.slice(0, 80)}…` : firstLine;

		if (dataCollapsible?.toLowerCase() === "false") {
			accordionValue = accordionItem;
		}

		for (const node of Array.from(preNode.childNodes)) {
			if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === "") {
				preNode.removeChild(node);
			}
		}
	});
</script>

<Accordion.Root type="single" bind:value={accordionValue} class="my-6">
	<Accordion.Item
		value={accordionItem}
		class="border border-[#e0d1c1] bg-[#fdf8f1] shadow-[0_18px_40px_-28px_rgba(29,26,22,0.35)]"
	>
		<Accordion.Trigger
			class="border-b border-[#e3d2c4] bg-[#f7efe5] px-4 py-3 text-left text-sm font-semibold text-[#2b2420] transition hover:no-underline"
		>
			<div class="flex flex-col gap-1">
				<span class="uppercase tracking-[0.2em] text-[0.65rem] text-[#5f4f44]">{title}</span>
				{#if !isOpen && preview.length > 0}
					<span class="font-mono text-xs text-[#5c5048]">{preview}</span>
				{/if}
			</div>
		</Accordion.Trigger>
		<Accordion.Content class="pt-0">
			<div class="relative">
				<pre
					bind:this={preNode}
					use:setCodeString
					class={cn(
						"relative max-h-[520px] overflow-x-auto border-0 bg-transparent px-4 py-5 font-mono text-[0.85rem] leading-relaxed text-[#2b2420]",
						className
					)}
					{...$$restProps}
				><slot /></pre>
				<CopyButton
					{isPackageManagerBlock}
					copied={$copied}
					copyCode={handleCopy}
					value={$codeString}
					class={cn(
						"pre-copy-btn absolute right-4 top-4 border border-[#e3d2c4] bg-white/90 text-[#3a332d] hover:bg-[#f1e5d7] hover:text-[#2b2420] rounded-none"
					)}
				/>
			</div>
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
