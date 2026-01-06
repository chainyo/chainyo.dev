<script lang="ts">
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { Progress } from "$lib/components/ui/progress";
  import { cn } from "$lib/utils";

  type IllustrationProps = {
    _class?: string;
  };

  const focusSummary =
    "I deliver heavy-duty AI systems with solid data pipelines, retrieval context, and continuous evaluation/monitoring.";


  const focusTags = [
    "Eval",
    "Monitoring",
    "Agents",
    "Orchestration",
    "Training",
    "Data",
    "HIPAA",
  ];

  const progressSteps = [
    {
      label: "Planning",
      value: 0,
    },
    {
      label: "Defining specs",
      value: 30,
    },
    {
      label: "Implementing",
      value: 65,
    },
    {
      label: "Reviewing",
      value: 85,
    },
    {
      label: "Live",
      value: 100,
    },
  ];

  const loopTiming = {
    dwellMs: 2400,
    moveMs: 600,
  };

  const progressTiming = {
    msPerPercent: 120,
    resetMs: 200,
    startDelayMs: 220,
    zeroPauseMs: 1000,
    livePauseMs: 4000,
    lateStepMultiplier: 1.7,
  };

  const progressLayout = {
    lineLength: 18,
    labelGapTop: 16,
    labelGapBottom: 4,
    edgeInset: 4,
  };

  const centerIndex = Math.min(2, Math.max(0, focusTags.length - 1));
  let loopItems = [...focusTags];
  let loopOffset = 0;
  let loopAnimating = false;
  let loopPaused = false;
  let loopTimer: ReturnType<typeof setTimeout> | null = null;
  let progressIndex = 0;
  let progressPaused = false;
  let progressTimer: ReturnType<typeof setTimeout> | null = null;
  let progressValueNow = 0;
  let activeStepIndex = -1;
  let motionDisabled = false;
  const progressValue = tweened(0, { duration: 0, easing: cubicOut });

  const advanceLoop = () => {
    if (motionDisabled) {
      return;
    }

    if (loopPaused) {
      loopTimer = setTimeout(advanceLoop, 200);
      return;
    }

    loopAnimating = true;
    loopOffset = 1;

    loopTimer = setTimeout(() => {
      loopAnimating = false;
      loopOffset = 0;
      loopItems = [...loopItems.slice(1), loopItems[0]];
      loopTimer = setTimeout(advanceLoop, loopTiming.dwellMs);
    }, loopTiming.moveMs);
  };

  const getStepDuration = (fromValue: number, toValue: number) => {
    const delta = Math.abs(toValue - fromValue);
    const multiplier = fromValue >= 65 ? progressTiming.lateStepMultiplier : 1;
    return Math.max(
      220,
      Math.round(delta * progressTiming.msPerPercent * multiplier)
    );
  };

  const isStepReached = (progressValue: number, stepValue: number) =>
    progressValue >= (stepValue === 0 ? 0.5 : stepValue);

  const getActiveIndex = (value: number) => {
    let active = -1;
    for (let i = 0; i < progressSteps.length; i += 1) {
      if (isStepReached(value, progressSteps[i].value)) {
        active = i;
      }
    }
    return active;
  };

  const getStepLeft = (value: number) => {
    if (value <= 0) {
      return `calc(${value}% + ${progressLayout.edgeInset}px)`;
    }
    if (value >= 100) {
      return `calc(${value}% - ${progressLayout.edgeInset}px)`;
    }
    return `${value}%`;
  };

  const scheduleReset = () => {
    if (progressPaused) {
      progressTimer = setTimeout(scheduleReset, 200);
      return;
    }

    progressIndex = 0;
    progressValue.set(0, { duration: progressTiming.resetMs });
    progressTimer = setTimeout(advanceProgress, progressTiming.zeroPauseMs);
  };

  const advanceProgress = () => {
    if (motionDisabled) {
      return;
    }

    if (progressPaused) {
      progressTimer = setTimeout(advanceProgress, 200);
      return;
    }

    const nextIndex = (progressIndex + 1) % progressSteps.length;
    if (nextIndex === 0 && progressIndex === progressSteps.length - 1) {
      progressTimer = setTimeout(scheduleReset, progressTiming.livePauseMs);
      return;
    }

    const currentValue = progressSteps[progressIndex].value;
    const nextValue = progressSteps[nextIndex].value;
    const duration = getStepDuration(currentValue, nextValue);
    progressIndex = nextIndex;
    progressValue.set(nextValue, { duration });
    progressTimer = setTimeout(advanceProgress, duration + progressTiming.startDelayMs);
  };

  const pauseLoop = () => {
    loopPaused = true;
  };

  const resumeLoop = () => {
    loopPaused = false;
  };

  const pauseProgress = () => {
    progressPaused = true;
  };

  const resumeProgress = () => {
    progressPaused = false;
  };

  onMount(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionDisabled = media.matches;
    if (!motionDisabled) {
      loopTimer = setTimeout(advanceLoop, loopTiming.dwellMs);
      progressValue.set(0, { duration: 0 });
      progressTimer = setTimeout(advanceProgress, progressTiming.startDelayMs);
    } else {
      progressIndex = progressSteps.length - 1;
      progressValue.set(progressSteps[progressIndex].value, { duration: 0 });
    }

    return () => {
      if (loopTimer) {
        clearTimeout(loopTimer);
      }
      if (progressTimer) {
        clearTimeout(progressTimer);
      }
    };
  });

  $: progressValueNow = $progressValue;
  $: activeStepIndex = getActiveIndex(progressValueNow);
</script>

<section class="mt-12">
  <div class="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
    <div
      class="mt-10 space-y-8 border-t border-[#e3d5c8]/70 pt-0 sm:space-y-0 sm:divide-y sm:divide-[#e3d5c8]/70"
    >
      <div class="grid gap-8 sm:grid-cols-5 sm:divide-x sm:divide-[#e3d5c8]/70">
        {@render CodeIllustration({
          _class: "order-2 sm:order-1 sm:col-span-2",
          items: focusTags,
        })}
        <div
          class="order-1 text-left sm:order-2 sm:col-span-3 sm:border-l sm:border-[#e3d5c8]/70 sm:py-6 sm:pl-12 sm:text-left"
        >
          <h3 class="text-base font-semibold text-[#1d1a16]">Current mission</h3>
          <p class="text-xl text-[#4a423a]">
            Founding AI Engineer
            <span class="block sm:inline sm:ml-2">
              at
              <a
                href="https://www.elys-health.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold text-inherit underline decoration-[#d97c35] underline-offset-2 hover:text-[#d97c35] hover:decoration-[#d97c35]"
              >
                Elys Health
              </a>
            </span>
          </p>
          <p class="mt-4 text-sm text-[#4a423a]">
            <span
              class="mr-2 inline-block h-2 w-2 rounded-full bg-[#d97c35] align-middle"
              aria-hidden="true"
            ></span>
            <span class="align-middle">{focusSummary}</span>
          </p>
        </div>
      </div>
      <div class="grid gap-8 sm:grid-cols-5 sm:divide-x sm:divide-[#e3d5c8]/70">
        <div class="pt-8 text-left sm:col-span-3 sm:border-r sm:border-[#e3d5c8]/70 sm:pl-14 sm:pr-12 sm:pt-10 sm:text-left">
          <h3 class="text-base font-semibold text-[#1d1a16]">How I work</h3>
          <p class="text-sm text-[#4a423a]">
            <span
              class="mr-2 inline-block h-2 w-2 rounded-full bg-[#d97c35] align-middle"
              aria-hidden="true"
            ></span>
            <span class="align-middle">
              Owner mentality with decisive calls, honest communication, and durable results.
            </span>
          </p>
        </div>
        <div class="flex items-center justify-center pt-8 sm:col-span-2 sm:pt-10">
          {@render ProgressIllustration({ _class: "w-full max-w-xs sm:max-w-none" })}
        </div>
      </div>
    </div>
  </div>
</section>

{#snippet ProgressIllustration({
  _class = "",
}: IllustrationProps)}
  <div
    class={cn("w-full", _class)}
    role="group"
    aria-label="Delivery progress timeline"
    on:mouseenter={pauseProgress}
    on:mouseleave={resumeProgress}
  >
    <div class="relative h-16">
      <Progress
        class="absolute left-0 right-0 top-1/2 z-10 h-2 -translate-y-1/2 bg-[#f2dfcf] [&>div]:bg-[#d97c35]"
        value={progressValueNow}
      />
      {#each progressSteps as step, index}
        <span
          class={cn(
            "pointer-events-none absolute top-1/2 z-0 w-px bg-[#d9c9b6] transition-opacity duration-500",
            index % 2 === 0 ? "-translate-y-full" : "",
            isStepReached(progressValueNow, step.value) ? "opacity-100" : "opacity-0",
            index === activeStepIndex && isStepReached(progressValueNow, step.value)
              ? "bg-[#d97c35]"
              : ""
          )}
          style={`left: ${getStepLeft(step.value)}; height: ${progressLayout.lineLength}px`}
          aria-hidden="true"
        ></span>
        <span
          class={cn(
            "pointer-events-none absolute z-20 text-[0.6rem] uppercase tracking-[0.2em] transition-opacity duration-500",
            isStepReached(progressValueNow, step.value)
              ? index === activeStepIndex
                ? "text-[#1d1a16] opacity-100"
                : "text-[#7a6a5e] opacity-70"
              : "opacity-0",
            index === 0
              ? "translate-x-0 text-left"
              : index === progressSteps.length - 1
                ? "-translate-x-full text-right"
                : "-translate-x-1/2 text-center"
          )}
          style={`left: ${getStepLeft(step.value)}; top: calc(50% ${index % 2 === 0 ? "-" : "+"} ${progressLayout.lineLength + (index % 2 === 0 ? progressLayout.labelGapTop : progressLayout.labelGapBottom)}px)`}
          aria-hidden={!isStepReached(progressValueNow, step.value)}
        >
          {step.label}
        </span>
      {/each}
    </div>
  </div>
{/snippet}

{#snippet CodeIllustration({
  _class = "",
  items = [],
}: {
  _class?: string;
  items?: string[];
})}
  <div
    class={cn(
      "[mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,#000_60%,transparent_100%)]",
      _class
    )}
  >
    <div
      class="loop-container group relative mx-auto w-fit"
      style={`--item-count: ${items.length || 1}; --item-size: 2rem; --visible-count: 5;`}
      role="group"
      aria-label="Focus areas loop"
      on:mouseenter={pauseLoop}
      on:mouseleave={resumeLoop}
    >
      <span class="focus-label text-[#d97c35]" aria-hidden="true">|</span>
      <div class="loop-window">
        <div
          class={cn(
            "looping-stack font-mono text-2xl font-medium",
            loopAnimating && "is-animating"
          )}
          style={`--offset: ${loopOffset};`}
        >
          <ul class="looping-list text-[#7b7268]">
            {#each loopItems as item}
              <li class="h-8 leading-8">{item}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
{/snippet}

<style>
  .loop-container {
    position: relative;
  }

  .loop-window {
    height: calc(var(--item-size) * var(--visible-count));
    overflow: hidden;
  }

  .looping-stack {
    position: relative;
    transform: translateY(calc(var(--item-size) * -1 * var(--offset)));
    will-change: transform;
  }

  .looping-stack.is-animating {
    transition: transform 0.6s ease;
  }

  .looping-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .focus-label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-110%, -50%);
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
    pointer-events: none;
  }
</style>
