<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { TableOfContents, TableOfContentsItem } from "$lib/types/docs.js";

  export let tree: TableOfContents = { items: [] };
  export let activeItem: string | undefined;

  const isActive = (item: TableOfContentsItem) => activeItem === item.url.slice(1);
</script>

<ul class="space-y-2 text-sm">
  {#each tree.items as item}
    <li>
      <a
        href={item.url}
        class={cn(
          "block transition-colors hover:text-foreground",
          isActive(item) ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {item.title}
      </a>
      {#if item.items?.length}
        <ul class="mt-2 space-y-2 border-l border-muted pl-4">
          {#each item.items as subItem}
            <li>
              <a
                href={subItem.url}
                class={cn(
                  "block text-xs transition-colors hover:text-foreground",
                  isActive(subItem) ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {subItem.title}
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>
