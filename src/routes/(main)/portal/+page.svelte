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
    <section class="flex flex-col gap-2 max-w-full lg:max-w-screen-sm lg:max-h-screen lg:overflow-auto">
        <div class="p-5 lg:rounded-lg bg-slate-100">
            <CreatePost user={data.user}/>
        </div>
            <Posts data={data}/>
    </section>
    
    
    
</main>