<script>
    export let data;
    
    // File extensions for media types
    const videos = [".mp4"];
    const images = [".jpg", ".jpeg", ".png", ".gif"];
    const audios = [".mp3", ".ogg", ".m4a"];

    // Update posts text by converting URLs to clickable links
    data.posts.forEach((post, i) => {
        let urlRegex = /(https?:\/\/[^\s]+)/g;
        let text = post.text;

        // Replace URLs with anchor tags
        let textWithLink = text.replace(urlRegex, (url) => {
            return `<a href="${url}" class="text-sm font-bold link link-primary link-hover" target="_blank">${url}</a>`;
        });

        // Update post text back to the data object
        data.posts[i].text = textWithLink;
    });
</script>

<!-- Render posts -->
{#each data.posts as post}
    <div class="bg-slate-100 py-1 px-3 rounded-lg flex flex-col gap-1 max-w-full h-fit">
        {#if data.name != null}
            <!-- Display post author's name if available -->
            <a data-sveltekit-reload href="#" class="text-sm font-bold link link-hover">{data.name} {data.surname}</a>
        {:else}
            <!-- Loop through users to match and display the author's name -->
            {#each data.users as user}
                {#if user.user_id == post.user_id}
                    <a data-sveltekit-reload href={user.profile_url} class="text-sm font-bold link link-hover">{user.name} {user.surname}</a>
                {/if}
            {/each}
        {/if}

        <!-- Display post text with clickable URLs -->
        <div class="max max-w-full overflow-hidden text-wrap">
            <pre><span class="pre text-wrap">{@html post.text}</span></pre>
        </div>

        <!-- Render media files associated with the post -->
        <div>
            {#each data.post_files as post_file}
                {#if post_file.post_id == post.id}
                    {#if videos.includes(post_file.type)}
                        <!-- Video player -->
                        <video class="w-full max-w-full h-full object-cover max-h-[500px]" controls src={post_file.url}>
                            <track kind="captions" />
                        </video>
                    {:else if images.includes(post_file.type)}
                        <!-- Image display -->
                        <img class="w-full max-w-full h-full object-cover max-h-[500px]" src={post_file.url} alt={post.text}/>
                    {:else if audios.includes(post_file.type)}
                        <!-- Audio player -->
                        <audio class="w-full max-w-full" controls src={post_file.url}></audio>
                    {:else}
                        <!-- Other file types download option -->
                        <a class="btn max-w-full btn-neutral text-white p-3 w-fit flex items-center my-2" target="_blank" href={post_file.url}>
                            <i class="fa fa-download"></i> {post_file.name}
                        </a>
                    {/if}
                {/if}
            {/each}
        </div>

        <!-- Post actions -->
        <hr />
        <div class="flex space-x-3">
            <i class="fa fa-thumbs-up"></i>
            <i class="fa fa-comment"></i>
        </div>
    </div>
{/each}
