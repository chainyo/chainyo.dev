<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { Button } from "$lib/components/ui/button/index.js";
    import FlickeringGrid from "$lib/components/ui/FlickeringGrid.svelte";
    import SiteFooter from "$lib/components/site-footer.svelte";
    import FavoriteTools from "../mintegration/one.svelte";
    import NowWorkBlock from "../mcontent/one.svelte";
    import ProjectsFeature from "../mfeature/two.svelte";

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

            <div class="-mt-2 flex flex-wrap items-center justify-center gap-3 text-sm">
                <Button
                    variant="ghost"
                    class="h-10 rounded-md px-4 text-[#7a6a5e] hover:bg-white/70 hover:text-[#3a332d]"
                    href="/blog"
                >
                    Read my build (b)log →
                </Button>
            </div>

            <FavoriteTools />

        </header>

        <div class="-mt-6">
            <NowWorkBlock />
        </div>

        <ProjectsFeature />

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
</style>
