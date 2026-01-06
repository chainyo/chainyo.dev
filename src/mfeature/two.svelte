<script lang="ts">
  const projects = [
    {
      name: "LocalClip.app",
      description:
        "Drop a recording. LocalClip finds the highlights, writes captions, and exports platform-ready clips without uploading a byte.",
      url: "https://localclip.app",
      image: "/localclip-bg.png",
    },
    {
      name: "Pomodobros",
      description: "Turn solo procrastination into shared productivity.",
      url: "https://pomodobros.com",
      image: "/pomodobros-bg.png",
    },
    {
      name: "MowPrompt",
      description: "Clean and compress prompts before they hit your model.",
      url: "https://mowprompt.com",
      image: "/mowprompt-bg.png",
    },
  ];
</script>

<section id="projects" class="mt-20">
  <div class="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
    <div class="pt-10">
      <p class="w-full text-center text-xs uppercase tracking-[0.3em] text-[#a36b3f]">
        Side products
      </p>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
        {#each projects as project}
          <a
            class="group flex h-full flex-col gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d97c35]/60"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="project-card aspect-video w-full overflow-hidden rounded-3xl border border-[#e3d5c8] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
              style={`background-image: url('${project.image}');`}
              aria-hidden="true"
            ></div>
            <div class="sm:max-w-sm">
              <h3 class="font-display text-xl text-[#1d1a16]">{project.name}</h3>
              <p class="mt-3 text-sm leading-relaxed text-[#4a423a]">
                {project.description}
              </p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .project-card {
    background-color: #f8f4ee;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
