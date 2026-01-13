<script lang="ts">
  import OpenAI from "../mlogos/OpenAI.svelte";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
</script>

<section>
  <div class="mx-auto max-w-5xl px-6 py-8">
    <div class="flex flex-nowrap items-center gap-4 overflow-x-auto">
      <p class="whitespace-nowrap text-sm text-muted-foreground font-medium sm:text-base">
        Favorite stack:
      </p>
      <Tooltip.Provider delayDuration={0}>
        <div class="flex flex-none flex-nowrap items-center gap-3 divide-x *:pr-3">
          <div class="flex items-center">
            <Tooltip.Root>
              <Tooltip.Trigger>
                {#snippet child({ props })}
                  <a
                    {...props}
                    href="https://superwhisper.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="superwhisper"
                    class="flex items-center justify-center"
                  >
                    <img
                      src="/superwhisper-logo.png"
                      alt="superwhisper"
                      class="m-auto h-6 w-6 sm:h-7 sm:w-7"
                      loading="lazy"
                    />
                  </a>
                {/snippet}
              </Tooltip.Trigger>
              <Tooltip.Content side="top" align="center">superwhisper</Tooltip.Content>
            </Tooltip.Root>
          </div>
          <div class="flex items-center">
            <Tooltip.Root>
              <Tooltip.Trigger>
                {#snippet child({ props })}
                  <a
                    {...props}
                    href="https://openai.com/codex"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="OpenAI Codex"
                    class="flex items-center justify-center"
                  >
                    <OpenAI class="m-auto size-4 sm:size-5" />
                  </a>
                {/snippet}
              </Tooltip.Trigger>
              <Tooltip.Content side="top" align="center">OpenAI Codex</Tooltip.Content>
            </Tooltip.Root>
          </div>
          <div class="flex items-center">
            <Tooltip.Root>
              <Tooltip.Trigger>
                {#snippet child({ props })}
                  <a
                    {...props}
                    href="https://openspec.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="OpenSpec"
                    class="flex items-center justify-center"
                  >
                    <img
                      src="https://openspec.dev/_astro/openspec_icon_light.BXKVBxjB.svg"
                      alt="OpenSpec"
                      class="m-auto h-4 w-auto sm:h-5"
                      style="filter: brightness(0); opacity: 0.85;"
                      loading="lazy"
                    />
                  </a>
                {/snippet}
              </Tooltip.Trigger>
              <Tooltip.Content side="top" align="center">OpenSpec</Tooltip.Content>
            </Tooltip.Root>
          </div>
          <div class="flex items-center">
            <Tooltip.Root>
              <Tooltip.Trigger>
                {#snippet child({ props })}
                  <a
                    {...props}
                    href="https://cursor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cursor"
                    class="flex items-center justify-center"
                  >
                    <img
                      src="/CUBE_2D_LIGHT.svg"
                      alt="Cursor"
                      class="m-auto h-4 w-4 sm:h-5 sm:w-5"
                      loading="lazy"
                    />
                  </a>
                {/snippet}
              </Tooltip.Trigger>
              <Tooltip.Content side="top" align="center">Cursor</Tooltip.Content>
            </Tooltip.Root>
          </div>
          <div class="flex items-center">
            <Tooltip.Root>
              <Tooltip.Trigger>
                {#snippet child({ props })}
                  <a
                    {...props}
                    href="https://www.coderabbit.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CodeRabbit"
                    class="flex items-center justify-center"
                  >
                    <img
                      src="/coderabbit-icon.svg"
                      alt="CodeRabbit"
                      class="m-auto h-4 w-4 sm:h-5 sm:w-5"
                      loading="lazy"
                    />
                  </a>
                {/snippet}
              </Tooltip.Trigger>
              <Tooltip.Content side="top" align="center">CodeRabbit</Tooltip.Content>
            </Tooltip.Root>
          </div>
        </div>
      </Tooltip.Provider>
    </div>
  </div>
</section>
