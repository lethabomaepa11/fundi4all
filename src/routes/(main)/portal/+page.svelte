<script>
    import { fade, fly, scale, slide } from 'svelte/transition';
	import CreatePost from '../../../components/CreatePost.svelte';
    export let data;
</script>
<title>
    Portal | fundi4All
</title>
<main transition:fade class="flex flex-col lg:flex-row justify-around items-start min-h-screen">
    <div class="p-5 rounded-lg bg-white">
        <CreatePost user={data}/>
    </div>
    
</main>