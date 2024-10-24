<script>
    import { fade, fly, scale, slide } from 'svelte/transition';
	import CreatePost from '../../../components/CreatePost.svelte';
	import Posts from '../../../components/Posts.svelte';
    export let data;
    data = {...data,name: null};
    
</script>
<title>
    Portal | fundi4All
</title>
<main transition:fade class="flex flex-col lg:flex-row justify-evenly items-start">
    <section class="bg-slate-100 p-8 lg:rounded-lg w-full sm:w-fit">
        <p>Users you may know</p>
        <div class="flex flex-col gap-2">
            {#each data.users as person}
                <a href={person.profile_url} data-sveltekit-reload class="font-bold link-hover">{person.name} {person.surname}</a>
            {/each}
        </div>
        
    </section>
    <section class="flex flex-col gap-2 max-w-full lg:max-h-screen lg:overflow-auto">
        <div class="p-5 lg:rounded-lg bg-slate-100">
            <CreatePost user={data.user}/>
        </div>
            <Posts data={data}/>
    </section>
    
    
    
</main>