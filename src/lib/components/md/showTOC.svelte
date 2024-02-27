<script>
  import { slide } from "svelte/transition";
  import TOC from "./toc.svelte";
  export let contents;

  let open = false;
</script>

<div class="w-[min(100%,22rem)] mb-sm lg:mb-0 rounded-lg shadow lg:shadow-none bg-primary-200 lg:bg-transparent lg:border-s lg:h-screen overflow-y-scroll lg:sticky top-0">
  <button class="label lg:underline w-full py-2 bg-primary-200 lg:bg-transparent" on:click={()=> (open = !open)}>
    {#if !open}In this blog{:else}Close{/if}
  </button>
  {#if open}
    <div class="h-[360px] lg:h-auto p-4 lg:p-0" transition:slide>
      <TOC {contents} />
    </div>
  {/if}
</div>