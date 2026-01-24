<script lang="ts">
	import { Check, Copy, Linkedin, Mail } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Dialog from "$lib/components/ui/dialog/index.js";

	const links = {
		linkedin: "https://www.linkedin.com/in/chainyo/",
		x: "https://x.com/chainyo_ai",
	};

	const emailAddress = "thomas@chainyo.dev";
	let emailOpen = false;
	let emailCopied = false;
	let emailCopyTimeout: number | undefined;

	const copyEmail = async () => {
		if (!navigator?.clipboard?.writeText) {
			return;
		}

		try {
			await navigator.clipboard.writeText(emailAddress);
			emailCopied = true;
			if (emailCopyTimeout) {
				window.clearTimeout(emailCopyTimeout);
			}
			emailCopyTimeout = window.setTimeout(() => {
				emailCopied = false;
			}, 1800);
		} catch {
			emailCopied = false;
		}
	};
</script>

<footer class="mt-16 text-center text-sm text-[#7a6a5e]">
	<div class="flex flex-col items-center gap-3">
		<div class="flex flex-wrap justify-center gap-3">
			<Button
				variant="ghost"
				size="icon"
				class="h-11 w-11 text-[#7a6a5e] hover:bg-white/70"
				href={links.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Connect on LinkedIn"
			>
				<Linkedin class="h-5 w-5" />
			</Button>
			<Button
				variant="ghost"
				size="icon"
				class="h-11 w-11 text-[#7a6a5e] hover:bg-white/70"
				href={links.x}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Follow on X"
			>
				<svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
					<path
						d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
						fill="currentColor"
					/>
				</svg>
			</Button>
			<Button
				variant="ghost"
				size="icon"
				class="h-11 w-11 text-[#7a6a5e] hover:bg-white/70"
				onclick={() => (emailOpen = true)}
				aria-label="Reveal email address"
			>
				<Mail class="h-5 w-5" />
			</Button>
		</div>
		<Dialog.Root bind:open={emailOpen}>
			<Dialog.Content class="border-[#e0d1c1] bg-[#fdf9f3] text-[#1d1a16] sm:max-w-md">
				<Dialog.Header class="text-left">
					<Dialog.Title class="font-display text-xl">Email</Dialog.Title>
					<Dialog.Description class="text-sm text-[#6b5d52]">
						Reach me at the address below.
					</Dialog.Description>
				</Dialog.Header>
				<div class="mt-4 flex flex-wrap items-center gap-3 text-sm">
					<span class="font-medium text-[#3a332d]">{emailAddress}</span>
					<Button
						variant="ghost"
						size="icon"
						class="h-8 w-8 text-[#6b5d52] hover:bg-[#f3e7d8]"
						onclick={copyEmail}
						aria-label="Copy email address"
					>
						{#if emailCopied}
							<Check class="h-4 w-4 text-green-600" />
						{:else}
							<Copy class="h-4 w-4" />
						{/if}
						<span class="sr-only">{emailCopied ? "Copied" : "Copy"}</span>
					</Button>
				</div>
				<Dialog.Footer class="mt-5">
					<Button
						variant="outline"
						class="border-[#e0d1c1] text-[#3a332d] hover:bg-[#f3e7d8]"
						href={`mailto:${emailAddress}`}
					>
						Open mail app
					</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
		<p>© {new Date().getFullYear()} CHNY Software, All rights reserved.</p>
	</div>
</footer>
