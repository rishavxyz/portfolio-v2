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

<header class={cn(className)}>
  <!-- Hero image slot -->
  <slot />

  <div id="hero--content"
    class="md:w-4/5 md:mx-auto py-4 text-center"
  >
    <h3>
      {title}
    </h3>
    <p class="py-4 text-lg text-balance leading-snug">{desc}</p>
    {#if hasDate}
      <div class="flex justify-between gap-xs md:justify-center">
        <slot name="date">Date here</slot>
        <span class="hidden md:inline text-muted-dark/80">&bull;</span>
        <slot name="reading-time">Reading time here</slot>
      </div>
    {/if}
  </div>
</header>