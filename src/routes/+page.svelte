<script>
    import { toast } from "svelte-sonner";
    import BorderBeam from "$lib/components/ui/BorderBeam.svelte";
    import FlickeringGrid from "$lib/components/ui/FlickeringGrid.svelte";
    import { cn } from "$lib/utils";

    const email = "thomas@chainyo.dev";

    // Add a function to copy the email to the clipboard
    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        toast.success("Email copied to clipboard!");
    };
</script>

<svelte:head>
	<title>Thomas Chaigneau | ML Engineer</title>
	<meta
		name="description"
		content="Hi, I'm Thomas 👋. I solve problems by building software with deep learning."
	/>
	<meta name="keywords" content="machine learning, ai, portfolio, mle, engineering, software, llm" />
	<meta name="author" content="Thomas Chaigneau" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="Thomas Chaigneau | ML Engineer" />
	<meta property="og:description" content="Hi, I'm Thomas 👋. I solve problems by building software with deep learning." />
	<meta property="og:image" content="https://chainyo.dev/og-image.png" />
	<meta property="og:url" content="https://chainyo.dev" />
	<meta name="twitter:card" content="summary_large_image" />
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Portfolio",
		"name": "Thomas Chaigneau",
		"description": "Hi, I'm Thomas 👋. I solve problems by building software with deep learning.",
		"provider": {
			"@type": "Organization",
			"name": "Thomas Chaigneau",
			"sameAs": "https://chainyo.dev"
		}
	}
	</script>
</svelte:head>

<div class="flex justify-center place-content-center my-auto max-h-screen">
    <article
        class="z-10 flex flex-col mx-8 items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background"
    >
        <BorderBeam size={150} duration={12} />
        <div class="relative mt-2 mb-2 flex items-center gap-x-4">
            <img
            src="https://avatars.githubusercontent.com/u/50595514?v=4"
            alt="bhide"
            class="h-10 w-10 rounded-full bg-gray-50"
            />
            <div class="text-sm leading-5">
                <p class="font-semibold text-white">
                    <a href="https://github.com/chainyo">
                        <span class="absolute inset-0"></span>
                        Thomas Chaigneau
                    </a>
                </p>
                <p class="text-gray-500">ML Engineer</p>
            </div>
        </div>
        <div class="group relative">
            <h3
                class="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-50"
            >
                <span class="absolute inset-0"></span>
                Hi I'm Thomas 👋<br /><br />
                I <span class="underline underline-offset-2">solve</span> problems by building software with deep learning.<br />
                I can <span class="underline underline-offset-2">help</span> with your next project, from <span class="text-[#ffaa40]">prototyping</span> to <span class="text-[#9c40ff]">production</span>.
            </h3>
            <p class="flex mt-10 mb-5 line-clamp-3 text-sm leading-6 text-gray-400 justify-center">
                If you have a business inquiry<br />or want to collaborate ⤵
            </p>
            <button
                class={cn(
                "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
                )}
                on:click={copyEmail}
            >
                <div
                    class={cn(
                        "absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
                    )}
                />
                📧 <hr class="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
                {" "}
                {email}
            </button>
        </div>
    </article>
    <FlickeringGrid
        class="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
    />
</div>
