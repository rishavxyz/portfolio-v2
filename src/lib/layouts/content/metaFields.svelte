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

    const inputClass =
        "block w-full border-muted-dark rounded-md focus:border-muted-light focus:ring-transparent bg-muted-dark/25 text-white placeholder:text-muted-light disabled:placeholder:text-muted-dark disabled:bg-muted-dark disabled:text-muted-light";
    const btnClass =
        "bg-fuchsia-700 text-fuchsia-200 p-0.25 block rounded-md font-bold label focus:border focus:border-muted-light disabled:bg-muted-dark disabled:text-muted-light";

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
    class="space-y-2 md:space-y-0 md:grid md:grid-cols-12
  md:grid-rows-[auto_auto_auto_0.5fr] md:gap-y-2"
>
    <div class="md:[grid-column:1/7] px-1">
        <!-- Title -->
        <div class="flex justify-between items-end mb-0.25">
            <label for="input-title" class="font-medium">Title</label>
            <span
                class="text-xs font-medium py-0.125 px-0.25 bg-muted-dark/25 rounded-full"
                >Characters: {title.trim().length}</span
            >
        </div>
        <input
            type="text"
            minlength="15"
            maxlength="60"
            bind:value={title}
            id="input-title"
            class={inputClass}
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
                id="hs-trailing-multiple-add-on"
                disabled={!title}
                class={cn(
                    inputClass,
                    "rounded-e-none disabled:bg-muted-dark/25",
                )}
                placeholder="my-file-name"
                tabindex="-1"
                autocomplete="off"
            />
            <div
                class="px-0.5 inline-flex items-center rounded-e-md border border-s-0 border-muted-dark bg-muted-dark"
            >
                <span class="text-sm text-white">.mdx</span>
            </div>
        </div>
    </div>
    <!-- Description -->
    <div class="md:[grid-column:1/7] px-1">
        <div class="flex justify-between items-end mb-0.25">
            <label for="input-desc" class="block font-medium dark:text-white"
                >Description</label
            >
            <span
                class="text-xs font-medium py-0.125 px-0.25 bg-white/10 rounded-full"
                >Characters: {description.trim().length}</span
            >
        </div>
        <textarea
            id="input-desc"
            minlength="55"
            maxlength="160"
            bind:value={description}
            rows="3"
            class={inputClass}
            placeholder="A description within 160 characters"
            autocomplete="off"
            name="desc"
            required
        />
    </div>
    <!-- Hero image -->
    <div class="md:[grid-column:1/7] px-1">
        <p for="hero-image" class="block font-medium mb-0.25">Hero image</p>
        <div class="w-full rounded-lg bg-muted-dark/25">
            <button
                disabled={response.success && response.type == "image"}
                on:click|preventDefault={() => (showModal = !showModal)}
                class={cn(
                    btnClass,
                    "w-full bg-muted-dark/25 text-white focus:border-none",
                )}
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
                <div class="p-1 space-y-1" transition:slide>
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

                    <form on:submit|preventDefault={uploadImage} class="space-y-1">
                        <input
                            type="file"
                            name="heroImage"
                            bind:files
                            class={cn(
                                inputClass,
                                "max-w-xl mx-auto",
                                "file:bg-fuchsia-700 file:text-fuchsia-200 file:border-none file:me-0.25 file:p-0.25",
                                "file:focus:border-muted-light file:focus:ring-transparent",
                            )}
                            on:change={() => createImage(files[0])}
                            accept=".jpg, .jpeg, .png, .webp, .avif, .gif"
                        />
                        <input type="text" name="customFileName" disabled={files.length < 1} autocomplete="off"
                            class={inputClass} value={files.length > 0 ? files[0].name : "custom-file-name.png"}
                        />
                        <button
                            disabled={!thumbnail}
                            formaction="/api/upload-image"
                            class={cn(
                                btnClass,
                                "mx-auto mt-1 transition-colors",
                            )}>Upload to GitHub</button
                        >
                    </form>
                </div>
            {/if}
        </div>
    </div>
    <!-- Markdown -->
    <div class="md:[grid-column:1/7] px-1">
        <div class="w-full flex justify-between items-end mb-0.25">
            <label
                for="textarea-label"
                class="block font-medium dark:text-white"
                >Content <span class="text-white/80 text-sm"
                    >&lpar;With markdown&rpar;</span
                ></label
            >
            <span
                class="text-xs font-medium py-0.125 px-0.25 bg-white/10 rounded-full shrink-0"
                >Words: {content ? content.trim().split(" ").length : 0}</span
            >
        </div>
        <textarea
            bind:value={content}
            id="textarea-label"
            class={inputClass}
            rows="12"
            placeholder="Write your content with markdown :)"
            autocomplete="off"
            name="content"
            required
        />
    </div>

    <div
        class="bg-white text-black py-2 px-1 md:[grid-column:7/13] md:[grid-row:1/5] grid-row md:mx-1
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

    <div
        class="md:[grid-column:5/9] px-1 flex justify-center items-center gap-1"
    >
        <input
            type="checkbox"
            name="draft"
            id="draft"
            checked
            class="bg-muted-dark/25 text-fuchsia-700 rounded border border-muted-dark focus:border-0"
        />
        <label for="draft" class="block font-medium text-white">
            <p>Save as draft</p>
            <p class="text-sm text-muted-light mt-0.125">
                If checked, the post will not be published but saved.
            </p>
        </label>
    </div>

    <div class="md:[grid-column:5/9] px-1">
        <button
            class={cn(btnClass, "w-full")}
            disabled={!title || !description || !content}>Create post</button
        >
    </div>
</form>
