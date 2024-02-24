<script>
    import { cn } from "$lib/utils";
    import { marked } from "marked";
    import { fly, slide } from "svelte/transition";
    import Header from "./header.svelte";

    let content = "";
    let title = "";
    let description = "";
    let files = [];
    let thumbnail = "";
    let showModal = false;

    const chip = "btn small pill bg-muted-dark !text-[0.75rem]";
    /**
     * @type {{ success: boolean; message: string; text: string; fileName: string; type: "image"|"post" }}
     */
    $: response = {};
    $: response.success && (showModal = false);

    function createImage(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            thumbnail = e.target.result;
        };
    }

    async function createPost(/**@type {SubmitEvent} */ event) {
        const formData = new FormData(event.currentTarget);
        const res = await fetch("/api/create-post", {
            method: "POST",
            body: formData,
        });
        const data = await res.json();

        response = data;

        if (data.success) event.target?.reset();
    }
    async function uploadImage(/**@type {SubmitEvent} */ event) {
        const formData = new FormData(event.currentTarget);
        const file = formData.get("heroImage");
        const [, ext] = String(file.type).split("/")
        const customFileName = String(formData.get("customFileName"));
        const pureFileName = customFileName.includes("." + ext)
            ? customFileName
            : customFileName + "." + ext
        ;
        let data = {};
        
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async (e) => {
            const res = await fetch("/api/upload-image", {
                method: "POST",
                body: `${pureFileName}rishavmandal${e.target.result}`,
            });
            data = await res.json();
            response = data;
        };
    }
</script>

{#if response.type == "post" && response.success}
    <div in:fly class="p-0.25 bg-emerald-800 text-emerald-200 rounded-md">
        <p class="font-bold text-sm label mb-0.125">{response.message}</p>
        <p><a href="/">Go to home page</a> and wait about a minute to see latest post.</p>
    </div>
{/if}

<form
    on:submit|preventDefault={createPost}
    class="space-y-sm md:space-y-0 md:grid md:grid-cols-12
  md:grid-rows-[auto_auto_auto_0.5fr] md:gap-y-sm"
>
    <div class="md:[grid-column:1/7] px-4 space-y-2xs">
        <!-- Title -->
        <div class="flex justify-between items-end mb-0.25">
            <label for="input-title">Title</label>
            <span class={chip}>Characters: {title.trim().length}</span>
        </div>
        <input
            type="text"
            minlength="15"
            maxlength="60"
            bind:value={title}
            id="input-title"
            placeholder="A nice title within 60 characters"
            autocomplete="off"
            name="title"
            required
        />
        <!-- File name -->
        <div class="flex rounded-lg shadow-sm mt-0.25">
            <input
                type="text"
                name="fileName"
                value={title
                    .trim()
                    .toLowerCase()
                    .replaceAll(/\'|\*|\!|\:|\-\s|\"|\,|\.|\?|\(|\)/g, "")
                    .split(" ")
                    .join("-")}
                disabled={!title}
                class="!rounded-e-none"
                placeholder="my-file-name"
                tabindex="-1"
                autocomplete="off"
            />
            <div
                class="px-4 inline-flex items-center rounded-e-md border border-s-0 border-muted-dark bg-muted-dark"
            >
                <span class="text-sm text-white">.mdx</span>
            </div>
        </div>
    </div>
    <!-- Description -->
    <div class="md:[grid-column:1/7] px-4 space-y-2xs">
        <div class="flex justify-between items-end mb-0.25">
            <label for="input-desc">Description</label>
            <span class={chip}>Characters: {description.trim().length}</span>
        </div>
        <textarea
            id="input-desc"
            minlength="55"
            maxlength="160"
            bind:value={description}
            rows="3"
            placeholder="A description within 160 characters"
            autocomplete="off"
            name="desc"
            required
        />
    </div>
    <!-- Hero image -->
    <div class="md:[grid-column:1/7] px-4 space-y-2xs">
        <p for="hero-image" class="block font-medium mb-0.25">Hero image</p>
        <div class="w-full rounded-lg bg-muted-dark/25">
            <button
                disabled={response.success && response.type == "image"}
                on:click|preventDefault={() => (showModal = !showModal)}
                class="btn label w-full bg-muted-dark"
            >
                {#if showModal}
                    Close
                {:else if response.success && response.type == "image"}
                    Image uploaded
                {:else}
                    Upload an image
                {/if}
            </button>

            {#if showModal}
                <div class="p-4 space-y-sm" transition:slide>
                    {#if thumbnail}
                        <div
                            class="w-full max-h-[360px] overflow-hidden rounded-md bg-muted-light text-muted-dark"
                        >
                            <img
                                src={thumbnail}
                                alt="Thumbnail"
                                width="720"
                                height="480"
                            />
                        </div>
                    {/if}

                    <form on:submit|preventDefault={uploadImage} class="space-y-sm">
                        <input
                            type="file"
                            name="heroImage"
                            bind:files
                            class="file:border-0 file:bg-muted-light file:text-black file:rounded-full file:px-3 file:mr-3"
                            on:change={() => createImage(files[0])}
                            accept=".jpg, .jpeg, .png, .webp, .avif, .gif"
                        />
                        <input type="text" name="customFileName" disabled={files.length < 1} autocomplete="off"
                            value={files.length > 0 ? files[0].name : "custom-file-name.png"}
                        />
                        <button
                            disabled={!thumbnail}
                            formaction="/api/upload-image"
                            class="w-full label transition-colors">Upload to GitHub</button
                        >
                    </form>
                </div>
            {/if}
        </div>
    </div>
    <!-- Markdown -->
    <div class="md:[grid-column:1/7] px-4 space-y-2xs">
        <div class="w-full flex justify-between items-end mb-0.25">
            <label for="textarea-label">
                Content <span class="text-sm text-muted-light">&lpar;With markdown&rpar;</span>
            </label>
            <span class={chip}>
                Words: {content ? content.trim().split(" ").length : 0}
            </span>
        </div>
        <textarea
            bind:value={content}
            id="textarea-label"
            rows="12"
            placeholder="Write your content with markdown :)"
            autocomplete="off"
            name="content"
            required
        />
    </div>

    <div
        class="bg-white text-black p-4 md:[grid-column:7/13] md:[grid-row:1/5] grid-row md:mx-1
    overflow-y-scroll md:rounded-md"
    >
        <div>
            {#if thumbnail || content || title || description}
                <Header {title} desc={description}>
                    {#if thumbnail}
                        <div
                            class="w-full max-h-[320px] bg-muted-light rounded-md overflow-hidden text-muted-dark"
                        >
                            <img
                                src={thumbnail}
                                alt="Thumbnail"
                                width="720"
                                height="480"
                            />
                        </div>
                    {/if}
                </Header>
                <div class="h-[1px] w-4/5 bg-muted-dark/25 my-1 mx-auto" />
                <article
                    class="mt-1 mx-auto min-h-3 prose prose-lg md:prose-xl font-serif"
                >
                    {@html marked.parse(content.trim())}
                </article>
            {:else}
                <div class="space-y-0.25 text-black">
                    <p class="text-xl font-bold">Live preview</p>
                    <p>
                        Markdown content will appear here as you write. This
                        layout is same as on the blog page.
                    </p>
                </div>
            {/if}
        </div>
    </div>

    <div class="relative flex gap-x-3 md:[grid-column:5/9] px-4">
        <div class="flex h-6 items-center">
          <input id="draft" name="draft" type="checkbox" checked
            class="h-4 w-4 rounded border-muted-light/50 text-primary bg-muted-dark focus:ring-primary" />
        </div>
        <div class="leading-6">
          <label for="draft">
            <p>Save as draft</p>
            <p class="text-muted-light text-sm">The post will upload to GitHub but won&apos;t be published.</p>
          </label>
        </div>
    </div>

    <div class="md:[grid-column:5/9] px-4">
        <button class="w-full label primary"
            disabled={!title || !description || !content}>Create post</button
        >
    </div>
</form>

<style>
    label {
        font-weight: 500;
    }
</style>