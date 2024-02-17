<script>
  import { marked } from "marked";

  let content = "";
  let title = "";
  let description = "";
</script>

<form on:submit|preventDefault class="space-y-2 max-w-prose mx-auto p-1">
  <div>
    <!-- Title -->
    <div class="flex justify-between items-end mb-0.25">
      <label for="input-title" class="block font-medium dark:text-white">Title</label>
      <span class="text-xs font-medium py-0.125 px-0.25 bg-white/10 rounded-full">Characters: {title.trim().length}</span>
    </div>
    <input type="text" minlength="15" maxlength="60" bind:value={title} id="input-title" class="px-1 py-0.5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-muted/20 dark:border-gray-500 dark:focus:ring-gray-600" placeholder="Title" autocomplete="off" />
    <!-- File name -->
    <div class="flex rounded-lg shadow-sm mt-0.25">
      <input type="text" disabled={!title} value={title.trim().toLowerCase().replaceAll(/\'|\*|\!|\:|\-\s|\"|\,|\.|\?/g, "").split(" ").join("-")} id="hs-trailing-multiple-add-on" name="inline-add-on" class="font-mono px-1 py-0.5 block w-full border-gray-200 shadow-sm rounded-lg rounded-e-none text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-muted/20 dark:border-gray-500 dark:focus:ring-gray-600" placeholder="my-file-name" autocomplete="off" />
      <div class="px-1 inline-flex items-center min-w-fit rounded-e-md border border-s-0 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <span class="text-sm text-white">.md</span>
      </div>
    </div>
  </div>
  <!-- Description -->
  <div>
    <div class="flex justify-between items-end mb-0.25">
      <label for="input-desc" class="block font-medium dark:text-white">Description</label>
      <span class="text-xs font-medium py-0.125 px-0.25 bg-white/10 rounded-full">Characters: {description.trim().length}</span>
    </div>
    <textarea id="input-desc" minlength="55" maxlength="155" bind:value={description} rows="3" class="p-1 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-muted/20 dark:border-gray-500 dark:focus:ring-gray-600" placeholder="A description within 155 characters" autocomplete="off" />
  </div>
  <!-- Markdown -->
  <div>
    <div class="flex justify-between items-end mb-0.25">
      <label for="textarea-label" class="block font-medium dark:text-white">Content <span class="text-white/80 text-sm">&lpar;Supports markdown&rpar;</span></label>
      <span class="text-xs font-medium py-0.125 px-0.25 bg-white/10 rounded-full">Words: {content ? content.trim().split(" ").length : 0}</span>
    </div>
    <textarea bind:value={content} id="textarea-label" class="p-1 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-muted/20 dark:border-gray-500 dark:focus:ring-gray-600" rows="12" placeholder="Write your content with markdown :)" autocomplete="off" />
  </div>
</form>

<div class="bg-white py-2 px-1">
  <article class="mx-auto min-h-3 prose prose-lg md:prose-xl font-serif max-h-[90vh] overflow-y-scroll">
    {#if content}
      {@html marked.parse(content.trim())}
    {:else}
      <p>Markdown content will appear here</p>
    {/if}
  </article>
</div>