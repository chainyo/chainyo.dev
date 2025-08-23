<script lang="ts">
    import { toast } from "svelte-sonner";
    import { ChevronRight, Github, Loader } from "lucide-svelte";
    import { Skeleton } from "$lib/components/ui/skeleton/index.js";
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card/index.js";
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
            showSoon: true,
            mrr: 0
        },
        {
            id: 2,
            title: "Project Two", 
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Oct 1st",
            showSoon: false,
            mrr: 0
        },
        {
            id: 3,
            title: "Project Three",
            description: "Coming soon...",
            status: "skeleton", 
            url: "#",
            month: "Nov 1st",
            showSoon: false,
            mrr: 0
        },
        {
            id: 4,
            title: "Project Four",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Dec 1st",
            showSoon: false,
            mrr: 0
        },
        {
            id: 5,
            title: "Project Five",
            description: "Coming soon...",
            status: "skeleton",
            url: "#", 
            month: "Jan 1st",
            showSoon: false,
            mrr: 0
        },
        {
            id: 6,
            title: "Project Six",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Feb 1st",
            showSoon: false,
            mrr: 0
        },
        {
            id: 7,
            title: "Project Seven",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Mar 1st",
            showSoon: false,
            mrr: 0
        },
        {
            id: 8,
            title: "Project Eight", 
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Apr 1st",
            showSoon: false,
            mrr: 0
        },
        {
            id: 9,
            title: "Project Nine",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "May 1st",
            showSoon: false,
            mrr: 0
        },
        {
            id: 10,
            title: "Project Ten",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Jun 1st",
            showSoon: false,
            mrr: 0
        },
        {
            id: 11,
            title: "Project Eleven",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Jul 1st",
            showSoon: false,
            mrr: 0
        },
        {
            id: 12,
            title: "Project Twelve",
            description: "Coming soon...",
            status: "skeleton",
            url: "#",
            month: "Aug 1st",
            showSoon: false,
            mrr: 0
        }
    ];

    const handleProjectClick = (project: typeof projects[0]) => {
        if (project.status === "skeleton") {
            toast.info(`${project.title} coming in ${project.month}! 🚧`);
        } else if (project.status === "building") {
            toast.info(`${project.title} is currently in development! 🔨`);
        } else {
            window.open(project.url, '_blank');
        }
    };


</script>

<svelte:head>
    <title>Thomas Chaigneau | Indie Hacker</title>
    <meta
        name="description"
        content="ML Engineer turned indie hacker. 1 SaaS a month, every month, until my savings cry (or I hit market fit 😂). I share the journey daily."
    />
    <meta name="keywords" content="indie hacker, saas, mvp, machine learning, ai, entrepreneur" />
    <meta name="author" content="Thomas Chaigneau" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Thomas Chaigneau | Indie Hacker" />
    <meta property="og:description" content="ML Engineer turned indie hacker. 1 SaaS a month, every month, until my savings cry (or I hit market fit 😂). I share the journey daily." />
    <meta property="og:image" content="https://chainyo.dev/og-image.png" />
    <meta property="og:url" content="https://chainyo.dev" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@chainyo_ai" />
    <meta name="twitter:creator" content="@chainyo_ai" />
    <meta name="twitter:title" content="Thomas Chaigneau | Indie Hacker" />
    <meta name="twitter:description" content="ML Engineer turned indie hacker. 1 SaaS a month, every month, until my savings cry (or I hit market fit 😂). I share the journey daily." />
    <meta name="twitter:image" content="https://chainyo.dev/og-image.png" />
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Thomas Chaigneau",
        "description": "ML Engineer turned indie hacker. 1 SaaS a month, every month, until my savings cry (or I hit market fit 😂). I share the journey daily.",
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
        height={1200}
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
                <div class="flex-shrink-0">
                    <img
                        src="https://avatars.githubusercontent.com/u/50595514?v=4"
                        alt="Thomas Chaigneau"
                        class="h-32 w-32 rounded-full border-2 border-gray-300 shadow-lg"
                    />
                </div>
                
                <div class="text-center md:text-left">
                    <h1 class="text-4xl md:text-6xl font-bold text-foreground mb-4">
                        Thomas Chaigneau
                    </h1>
                    <p class="text-xl md:text-2xl text-muted-foreground leading-relaxed ml-2">
                        <span class="text-foreground font-semibold">ML Engineer</span> turned <span class="text-[#ffaa40] font-semibold">indie hacker</span>
                    </p>
                </div>
            </div>
            
            <div class="text-center mb-8">
                <p class="text-xl md:text-2xl text-foreground leading-relaxed">
                    <span class="font-semibold">I build 1 SaaS MVP <span class="underline decoration-[#ffaa40]">every month</span></span><br/>
                    <span class="text-muted-foreground">until my savings cry (or I hit market fit 😂).</span>
                </p>
            </div>
            
            <div class="flex flex-row gap-2 justify-center items-center md:mt-16">
                <Button 
                    class="bg-gradient-to-r from-[#ffaa40] to-[#9c40ff] text-white hover:opacity-90 transition-opacity px-8 py-3 text-lg"
                    on:click={() => window.open('https://x.com/chainyo_ai', '_blank')}
                >
                    <ChevronRight />
                    Follow the Quest
                </Button>
                <Button 
                    variant="secondary" size="icon"
                    on:click={() => window.open('https://github.com/chainyo', '_blank')}
                >
                    <Github class="w-5 h-5" />
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
                    <Card 
                        class={`hover:shadow-lg transition-shadow cursor-pointer border-2 relative pt-4 ${project.showSoon ? 'border-[#ffaa40]/50' : 'hover:border-[#ffaa40]/50'}`}
                        on:click={() => handleProjectClick(project)}
                    >
                        <!-- "Soon" Badge for current/next project -->
                        {#if project.showSoon}
                            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                <span class="bg-gradient-to-r from-[#ffaa40] to-[#9c40ff] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    Soon
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
                                <div class="flex items-center gap-2">
                                    {#if project.status === "building"}
                                        <span class="text-xs text-[#ffaa40] bg-[#ffaa40]/10 dark:bg-[#ffaa40]/20 dark:text-[#ffaa40] px-2 py-1 rounded font-medium flex items-center">
                                            <Loader class="animate-spin w-3 h-3 mr-1" />
                                            Building
                                        </span>
                                    {/if}
                                    <span class="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                                        {project.month}
                                    </span>
                                </div>
                            </div>
                        </CardHeader>
                        
                        <CardContent class="pb-4 pt-2">
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
                    </Card>
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
                © {new Date().getFullYear()} chainyo.dev™ • All rights reserved
            </p>
        </footer>
    </div>
</div>