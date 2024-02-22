<script>
  import { cn } from "$lib/utils";

  /**@type {string}*/
  export let title;
  /**@type {string}*/
  export let desc;
  export let hasDate = false;
  let className = "";
  export {className as class};
</script>

<header class={cn("max-w-5xl mx-auto px-1", className)}>
  <!-- Hero image slot -->
  <slot />

  <div id="hero--content"
    class="md:w-4/5 md:mx-auto py-1 text-balance text-center"
  >
    <h1 class="font-bold leading-tight text-2xl md:text-4xl">
      {title}
    </h1>
    <p class="py-1 text-lg leading-snug">{desc}</p>
    {#if hasDate}
      <div class="flex justify-between gap-0.25 md:justify-center">
        <slot name="date">Date here</slot>
        <span class="hidden md:inline text-muted-dark/80">&bull;</span>
        <slot name="reading-time">Reading time here</slot>
      </div>
    {/if}
  </div>
</header>