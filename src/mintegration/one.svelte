<script lang="ts">
  import OpenAI from "../mlogos/OpenAI.svelte";
</script>

<section>
  <div class="mx-auto max-w-5xl px-6 py-8">
    <div class="flex flex-wrap items-center gap-4">
      <p class="text-muted-foreground font-medium">Favorite stack:</p>
      <div class="max-w-2xs flex flex-wrap items-center gap-3 divide-x *:pr-3">
        <a
          href="https://superwhisper.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Super Whisper"
          class="flex items-center justify-center"
        >
          <img
            src="/superwhisper-logo.png"
            alt="Super Whisper"
            class="m-auto h-7 w-7"
            loading="lazy"
          />
        </a>
        <a
          href="https://openai.com/codex"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="OpenAI Codex"
          class="flex items-center justify-center"
        >
          <OpenAI class="m-auto size-5" />
        </a>
        <a
          href="https://openspec.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="OpenSpec"
          class="flex items-center justify-center"
        >
          <img
            src="https://openspec.dev/_astro/openspec_icon_light.BXKVBxjB.svg"
            alt="OpenSpec"
            class="m-auto h-5 w-auto"
            style="filter: brightness(0); opacity: 0.85;"
            loading="lazy"
          />
        </a>
        <a
          href="https://cursor.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cursor"
          class="flex items-center justify-center"
        >
          <img
            src="/CUBE_2D_LIGHT.svg"
            alt="Cursor"
            class="m-auto h-5 w-5"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.coderabbit.ai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CodeRabbit"
          class="flex items-center justify-center"
        >
          <img
            src="https://www.coderabbit.ai/favicon.ico"
            alt="CodeRabbit"
            class="m-auto h-5 w-5"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </div>
</section>
