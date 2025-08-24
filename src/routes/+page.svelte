<script lang="ts">
    import { toast } from "svelte-sonner";
    import { ChevronRight, Github, Loader } from "@lucide/svelte";
    import { Skeleton } from "$lib/components/ui/skeleton/index.js";
    import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import FlickeringGrid from "$lib/components/ui/FlickeringGrid.svelte";

    // Project data - mix of real and placeholder projects
    const projects = [
        {
            id: 1,
            title: "Pomodobros",
            description: "A minimal IDE extension for focused devs. Stay in flow, one 🍅 at a time.",
            status: "building",
            url: "#",
            month: "Sep 1st",
            mrr: 0
        },
        {
            id: 2,
            title: "Project Two", 
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Oct 1st",
            mrr: 0
        },
        {
            id: 3,
            title: "Project Three",
            description: "Coming soon...",
            status: "skeleton", 
            url: "#",
            month: "Nov 1st",
            mrr: 0
        },
        {
            id: 4,
            title: "Project Four",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Dec 1st",
            mrr: 0
        },
        {
            id: 5,
            title: "Project Five",
            description: "Coming soon...",
            status: "skeleton",
            url: "#", 
            month: "Jan 1st",
            mrr: 0
        },
        {
            id: 6,
            title: "Project Six",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Feb 1st",
            mrr: 0
        },
        {
            id: 7,
            title: "Project Seven",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Mar 1st",
            mrr: 0
        },
        {
            id: 8,
            title: "Project Eight", 
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Apr 1st",
            mrr: 0
        },
        {
            id: 9,
            title: "Project Nine",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "May 1st",
            mrr: 0
        },
        {
            id: 10,
            title: "Project Ten",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Jun 1st",
            mrr: 0
        },
        {
            id: 11,
            title: "Project Eleven",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Jul 1st",
            mrr: 0
        },
        {
            id: 12,
            title: "Project Twelve",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Aug 1st",
            mrr: 0
        }
    ];

    const handleProjectClick = (project: typeof projects[0]) => {
        if (project.status === "skeleton") {
            toast.warning(`${project.title} is coming on ${project.month}!`);
        } else if (project.status === "building") {
            toast.info(`${project.title} is currently in development!`);
        } else if (project.status === "live" && project.url && project.url !== "#") {
            window.open(project.url, '_blank');
        } else if (project.url === "#" || !project.url) {
            toast.info(`${project.title} isn't live yet! Stay tuned 👀`);
        } else {
            window.open(project.url, '_blank');
        }
    };


</script>

<svelte:head>
    <title>Thomas Chaigneau | Founder Mode</title>
    <meta
        name="description"
        content="ML Engineer embracing Founder Mode. 1 SaaS a month, every month, until my savings cry (or I hit market fit 😂). I share the journey daily."
    />
    <meta name="keywords" content="indie hacker, saas, founder, mvp, ai, entrepreneur" />
    <meta name="author" content="Thomas Chaigneau" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Thomas Chaigneau | Founder Mode" />
    <meta property="og:description" content="ML Engineer embracing Founder Mode. 1 SaaS a month, every month, until my savings cry (or I hit market fit 😂). I share the journey daily." />
    <meta property="og:image" content="https://chainyo.dev/og-image.png" />
    <meta property="og:url" content="https://chainyo.dev" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@chainyo_ai" />
    <meta name="twitter:creator" content="@chainyo_ai" />
    <meta name="twitter:title" content="Thomas Chaigneau | Founder Mode" />
    <meta name="twitter:description" content="ML Engineer embracing Founder Mode. 1 SaaS a month, every month, until my savings cry (or I hit market fit 😂). I share the journey daily." />
    <meta name="twitter:image" content="https://chainyo.dev/og-image.png" />
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Thomas Chaigneau",
        "description": "ML Engineer embracing Founder Mode. 1 SaaS a month, every month, until my savings cry (or I hit market fit 😂). I share the journey daily.",
        "url": "https://chainyo.dev",
        "sameAs": [
            "https://github.com/chainyo",
            "https://x.com/chainyo_ai"
        ]
    }
    </script>
</svelte:head>

<div class="relative min-h-screen overflow-x-hidden">
    <!-- Background Grid -->
    <FlickeringGrid
        class="absolute inset-0 w-full h-full opacity-30"
        width={2000}
        height={1470}
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
    />
    
    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 py-12">
        <!-- Hero Section -->
        <section class="mb-16 mt-8 lg:mt-16">
            <div class="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 max-w-fit mx-auto">
                <div class="shrink-0">
                    <img
                        src="https://avatars.githubusercontent.com/u/50595514?v=4"
                        alt="Thomas Chaigneau"
                        class="size-32 rounded-full border-2 border-gray-300 shadow-lg"
                    />
                </div>
                
                <div class="text-center md:text-left">
                    <h1 class="text-xl md:text-2xl font-bold text-foreground mb-4">
                        Thomas Chaigneau
                    </h1>
                    <p class="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        <span class="text-foreground font-semibold">ML Engineer</span> embracing <span class="text-[#ffaa40] font-semibold">Founder Mode</span>
                    </p>
                </div>
            </div>
            
            <div class="text-center mb-8">
                <p class="text-xl md:text-4xl text-foreground leading-relaxed">
                    <span class="font-semibold">I build 1 SaaS MVP <span class="underline decoration-[#ffaa40]">every month</span></span><br/>
                    <span class="text-muted-foreground">until my savings cry (or I hit market fit 😂).</span>
                </p>
            </div>
            
            <div class="flex flex-row gap-2 justify-center items-center md:mt-16">
                <Button 
                    class="bg-linear-to-r from-[#ffaa40] to-[#9c40ff] text-white hover:opacity-90 transition-opacity px-8 py-3 text-lg" 
                    href="https://x.com/chainyo_ai"
                >
                    <ChevronRight />
                    Follow the Quest
                </Button>
                <Button
                    variant="secondary" 
                    size="icon" 
                    href="https://github.com/chainyo"
                >
                    <Github />
                </Button>
            </div>
            
            <div class="text-center mt-4">
                <svg class="w-5 h-5 mx-auto text-muted-foreground mb-1 animate-bounce" style="animation-duration: 2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                </svg>
                <p class="text-sm text-muted-foreground italic">
                    includes code, screenshots and memes
                </p>
            </div>
        </section>

        <!-- Projects Grid -->
        <section class="mt-32">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {#each projects as project}
                    <div 
                        class={`hover:shadow-lg transition-shadow cursor-pointer border-2 relative pt-4 flex flex-col h-full rounded-lg bg-card text-card-foreground shadow-sm ${project.status === 'building' ? 'border-[#ffaa40]/50' : project.status === 'live' ? 'border-lime-500/50' : 'border-muted-foreground/50 hover:border-[#ffaa40]/50'}`}
                        role="button"
                        tabindex="0"
                        onclick={() => handleProjectClick(project)}
                        onkeydown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleProjectClick(project);
                            }
                        }}
                    >
                        <!-- Status Badge -->
                        {#if project.status === 'building'}
                            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                <span class="relative text-xs text-[#ffaa40] dark:text-[#ffaa40] px-3 py-1 rounded font-medium flex items-center shadow-lg overflow-hidden">
                                    <div class="absolute inset-0 bg-background"></div>
                                    <div class="absolute inset-0 bg-[#ffaa40]/10 dark:bg-[#ffaa40]/20"></div>
                                    <div class="relative flex items-center">
                                        <Loader class="animate-spin w-3 h-3 mr-1" />
                                        Building
                                    </div>
                                </span>
                            </div>
                        {:else if project.status === 'live'}
                            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                <span class="relative text-xs text-lime-600 dark:text-lime-400 px-3 py-1 rounded font-medium flex items-center shadow-lg overflow-hidden">
                                    <div class="absolute inset-0 bg-background"></div>
                                    <div class="absolute inset-0 bg-lime-500/10 dark:bg-lime-500/20"></div>
                                    <div class="relative flex items-center">
                                        <div class="w-2 h-2 bg-lime-600 dark:bg-lime-400 rounded-full mr-1 animate-pulse"></div>
                                        Live
                                    </div>
                                </span>
                            </div>
                        {/if}
                        <CardHeader class="pb-1 pt-6">
                            <div class="flex items-center justify-between">
                                <CardTitle class="text-lg font-semibold">
                                    {#if project.status === "skeleton"}
                                        <Skeleton class="h-6 w-24" />
                                    {:else}
                                        {project.title}
                                    {/if}
                                </CardTitle>
                                <span class="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                                    {project.month}
                                </span>
                            </div>
                        </CardHeader>
                        
                        <CardContent class="pb-4 pt-2 flex-grow">
                            {#if project.status === "skeleton"}
                                <div class="space-y-2">
                                    <Skeleton class="h-4 w-full" />
                                    <Skeleton class="h-4 w-3/4" />
                                    <Skeleton class="h-4 w-1/2" />
                                </div>
                            {:else}
                                <CardDescription class="text-sm">
                                    {project.description}
                                </CardDescription>
                            {/if}
                        </CardContent>
                        
                        <CardFooter class="pt-0">
                            <div class="w-full text-center">
                                {#if project.status === "skeleton"}
                                    <Skeleton class="h-6 w-16 mx-auto" />
                                {:else}
                                    <div class="text-lg font-bold text-[#ffaa40]">
                                        ${project.mrr} MRR
                                    </div>
                                {/if}
                            </div>
                        </CardFooter>
                    </div>
                {/each}
            </div>
        </section>
        
        <!-- Footer -->
        <footer class="mt-16 text-center text-muted-foreground">
            <p class="text-sm mb-4">
                Building in public • One SaaS at a time • Follow along on 
                <a href="https://x.com/chainyo_ai" class="text-[#ffaa40] hover:underline" target="_blank">X</a>
            </p>
            <p class="text-xs">
                © {new Date().getFullYear()} chainyo.dev • All rights reserved
            </p>
        </footer>
    </div>
</div>