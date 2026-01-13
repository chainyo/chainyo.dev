<script lang="ts">
    import { Check, Copy, Linkedin, Mail } from "@lucide/svelte";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import FlickeringGrid from "$lib/components/ui/FlickeringGrid.svelte";
    import FavoriteTools from "../mintegration/one.svelte";
    import NowWorkBlock from "../mcontent/one.svelte";
    import ProjectsFeature from "../mfeature/two.svelte";

    const links = {
        linkedin: "https://www.linkedin.com/in/chainyo/",
        x: "https://x.com/chainyo_ai"
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

    const rotatingWords = ["Reliability", "Clarity", "Simplicity"];
    let rotatingIndex = 0;
    let rotatingWord = rotatingWords[rotatingIndex];

    onMount(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (media.matches) {
            return;
        }

        const intervalId = window.setInterval(() => {
            rotatingIndex = (rotatingIndex + 1) % rotatingWords.length;
            rotatingWord = rotatingWords[rotatingIndex];
        }, 1800);

        return () => {
            window.clearInterval(intervalId);
        };
    });

</script>

<svelte:head>
    <title>Thomas Chaigneau — Founder-minded AI Engineer</title>
    <meta
        name="description"
        content="Founder-minded AI engineer building production-grade systems for companies with real-world stakes. Founding AI Engineer at Elys Health, shipping LocalClip.app."
    />
    <meta
        name="keywords"
        content="founder-minded ai engineer, founding ai engineer, b2b ai systems, production ai, llm infrastructure, elys health, localclip"
    />
    <meta name="author" content="Thomas Chaigneau" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Thomas Chaigneau — Founder-minded AI Engineer" />
    <meta
        property="og:description"
        content="Founder-minded AI engineer building production-grade systems for companies with real-world stakes. Founding AI Engineer at Elys Health, shipping LocalClip.app."
    />
    <meta property="og:image" content="https://chainyo.dev/og-image.png" />
    <meta property="og:url" content="https://chainyo.dev" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="chainyo.dev" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@chainyo_ai" />
    <meta name="twitter:creator" content="@chainyo_ai" />
    <meta name="twitter:title" content="Thomas Chaigneau — Founder-minded AI Engineer" />
    <meta
        name="twitter:description"
        content="Founder-minded AI engineer building production-grade systems for companies with real-world stakes. Founding AI Engineer at Elys Health, shipping LocalClip.app."
    />
    <meta name="twitter:image" content="https://chainyo.dev/og-image.png" />

    <link rel="canonical" href="https://chainyo.dev" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="7 days" />
    <meta name="rating" content="General" />
    <meta name="distribution" content="Global" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    />

    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Thomas Chaigneau",
        "alternateName": "chainyo",
        "description": "Founder-minded AI engineer building production-grade systems for companies with real-world stakes. Founding AI Engineer at Elys Health, shipping LocalClip.app.",
        "url": "https://chainyo.dev",
        "image": "https://avatars.githubusercontent.com/u/50595514?v=4",
        "jobTitle": "Founder-minded AI Engineer",
        "worksFor": {
            "@type": "Organization",
            "name": "CHNY Software SASU"
        },
        "sameAs": [
            "https://github.com/chainyo",
            "https://x.com/chainyo_ai",
            "https://www.linkedin.com/in/thomas-chaigneau"
        ],
        "knowsAbout": [
            "Production AI Systems",
            "LLM Infrastructure",
            "B2B AI Engineering",
            "Product Engineering"
        ]
    }
    </script>
</svelte:head>

<div class="landing-light relative min-h-screen overflow-hidden bg-[#f8f4ee] text-[#1d1a16]">
    <div class="pointer-events-none absolute inset-0">
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f3dcc2_0%,_#f8f4ee_45%,_#eef2f5_100%)]"
        ></div>
        <div
            class="absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#e6b28a]/40 blur-3xl"
        ></div>
        <div
            class="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-[#b7d7d9]/35 blur-3xl"
        ></div>
    </div>

    <FlickeringGrid
        class="absolute inset-0 h-full w-full opacity-25"
        squareSize={4}
        gridGap={6}
        color="#bda995"
        maxOpacity={0.4}
        flickerChance={0.08}
    />

    <main class="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 lg:pt-24">
        <header class="flex flex-col items-center gap-6 text-center">
            <div class="flex flex-col items-center gap-4">
                <img
                    src="https://avatars.githubusercontent.com/u/50595514?v=4"
                    alt="Thomas Chaigneau"
                    class="h-20 w-20 rounded-full border border-[#d9c9b6] shadow-lg"
                />
                <p class="text-xs uppercase tracking-[0.3em] text-[#3a332d]">
                    Thomas Chaigneau
                </p>
                <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl">
                    Founder-minded<span class="block sm:inline sm:ml-2">AI Engineer</span>
                </h1>
            </div>

            <p class="max-w-2xl text-base leading-relaxed text-[#3a332d] sm:text-lg">
                I build production-grade AI systems for companies with real-world stakes.
                <br />
                <span class="relative inline-block align-baseline" aria-live="polite">
                    <span class="invisible font-semibold">Reliability</span>
                    {#key rotatingWord}
                        <span
                            class="absolute inset-0 flex items-center justify-center font-semibold text-[#d97c35]"
                            in:fade={{ duration: 200 }}
                            out:fade={{ duration: 200 }}
                        >
                            {rotatingWord}
                        </span>
                    {/key}
                </span>
                {" "}over hype.
            </p>

            <FavoriteTools />

        </header>

        <NowWorkBlock />

        <ProjectsFeature />

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
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                        >
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
                    <Dialog.Content
                        class="border-[#e0d1c1] bg-[#fdf9f3] text-[#1d1a16] sm:max-w-md"
                    >
                        <Dialog.Header class="text-left">
                            <Dialog.Title class="font-display text-xl">
                                Email
                            </Dialog.Title>
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
                                <span class="sr-only">
                                    {emailCopied ? "Copied" : "Copy"}
                                </span>
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
