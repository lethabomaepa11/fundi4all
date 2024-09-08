<script>
    import { fade, fly, scale, slide } from 'svelte/transition';
	import CreatePost from '../../../components/CreatePost.svelte';
    export let data;
    const videos = [".mp4"];
    const images = [".jpg",".jpeg",".png",".gif"];
    const audios = [".mp3",".ogg",".m4a"];
</script>
<title>
    Portal | fundi4All
</title>
<main transition:fade class="flex flex-col lg:flex-row justify-evenly items-start min-h-screen gap-1 sm:gap-0">
    <section class="bg-white p-8 lg:rounded-lg w-full sm:w-fit">
        <p>Users you may know</p>
        <div class="flex flex-col gap-2">
            {#each data.users as person}
                <a href={person.profile_url} data-sveltekit-reload class="font-bold link-hover">{person.name} {person.surname}</a>
            {/each}
        </div>
        
    </section>
    <section class="flex flex-col gap-2 lg:max-h-screen lg:overflow-auto">
        <div class="p-5 lg:rounded-lg bg-white">
            <CreatePost user={data}/>
        </div>
            {#each data.posts as post}
                <div class=" bg-white py-1 px-3 rounded-lg flex flex-col gap-1">
                    {#each data.users as user}
                        <a data-sveltekit-reload href={user.user_id == post.user_id ? user.profile_url : ""} class="text-sm font-bold link link-hover">{user.user_id == post.user_id ? `${user.name} ${user.surname}` : ""}</a>
                    {/each}
                    <div class="max max-w-full overflow-hidden text-wrap">
                        <pre><span class="pre text-wrap">{post.text}</span></pre>
                    </div>
                    <div>
                        {#each data.post_files as post_file}
                            
                            {#if post_file.post_id == post.id}
                                {#if videos.includes(post_file.type)}
                                    <video class="w-full max-w-full h-full object-cover max-h-[500px]" controls  src={post_file.url}>
                                        <track kind="captions" />
                                    </video>
                                {:else if images.includes(post_file.type)}
                                    <img class="w-full max-w-full h-full object-cover max-h-[500px]" src={post_file.url} alt={post.text}/>
                                {:else if audios.includes(post_file.type)}
                                    <audio class="w-full max-w-full" controls src={post_file.url}/>
                                {:else}
                                    <a class="btn max-w-full btn-primary text-white p-3 w-fit flex items-center my-2" target="_blank" href={post_file.url}><i class="fa fa-download"></i>{post_file.name}</a>
                                {/if}
                            {/if}
                        {/each}
                    </div>
                    <hr/>
                    <div class="">
                        <i class="fa fa-thumbs-up"></i>
                        <i class="fa fa-comment"></i>
                    </div>
                    
                </div>
            {/each}
    </section>
    <section class="bg-white p-8 lg:rounded-lg w-full sm:w-fit">

    </section>
    
    
</main>