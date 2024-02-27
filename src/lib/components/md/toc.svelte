<script>
  export let contents;
</script>

<ul>
  {#each contents as content}
    <li>
      {#if Array.isArray(content)}
        <svelte:self contents={content} />
      {:else}
        <a href={`#${content.slug}`} class="inline-block py-0.5 nou text-[1rem]" class:ps-4={content.depth > 2}>{content.text}</a>
      {/if}
    </li>
  {/each}
</ul>
