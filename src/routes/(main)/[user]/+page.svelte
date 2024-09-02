<script>
	import { fade, fly, scale, slide } from 'svelte/transition';

    export let data;
    let topics;
    if(data.topics != null)
        topics = data.topics.replace(" ","").split(",");
    else{
        topics = ["no topics"]
    }
    let date_of_birth = new Date(data.date_of_birth);
</script>
<title>
    {data.name} {data.surname} | fundi4All
</title>
<main transition:scale class="flex flex-col lg:flex-row justify-around items-start">
    <section class="profileCard card lg:shadow p-5 w-full lg:w-2/4">
        <div class="bg-neutral-300 min-w-full h-[150px] rounded">
            <img class={`btn btn-circle w-[150px] h-[150px] mt-6 ml-5 absolute`}` src="/fundi4All full logo.png" alt={`${data.name} ${data.surname}`}/>
        </div>
        <div class="mt-7"></div>
        <h1 class="font-bold text-2xl">{data.name} {data.surname}</h1>
        <div class="btn btn-ghost p-5 rounded my-5">
            {data.bio == null?"":data.bio}
        </div>
        {#if !data.canEdit}
            <div class="">
                <button class="btn btn-primary">Connect<i class="fa fa-user-plus"></i></button>
                <button class="btn btn-outline">Chat<i class="fa fa-message"></i></button>
            </div>
        {:else}
            <div class="">
                <button class="btn btn-primary">Edit<i class="fa fa-user-plus"></i></button>
                <button class="btn btn-outline">Create<i class="fa fa-message"></i></button>
            </div>
            <div class="divider"></div>
            <div class="">
                <h1 class="text-lg font-bold text-pretty">Create a post</h1>
                <input type="text" class="input input-bordered mt-5 w-full" placeholder="Ask for assistance..."/>
                <div class="my-5 grid grid-cols-3 md:flex gap-4 ">
                    <button class="btn btn-ghost"><i class="fa fa-chalkboard-user text-primary text-xl"></i> Create a classroom</button>
                    <button class="btn btn-ghost"><i class="fa fa-handshake text-secondary text-xl"></i> Offer Tutoring services</button>
                    <button class="btn btn-ghost"><i class="fa fa-upload text-accent text-xl"></i> Upload Files</button>
                </div>
                <p class="text-sm text-info pt-5">You can Upload past question papers, notes and textbooks</p>
                
            </div>
        {/if}
        <div class="divider"></div>
        <span class="flex justify-between items-center">
            <h1 class="text-lg font-bold text-pretty">About</h1>
            {#if data.canEdit}
            <button class="btn btn-ghost"><i class="fa fa-pen-to-square text-2xl"></i>Edit</button>
            {/if}
        </span>
        <div class="flex flex-col pt-5">
            <span><b>{data.role}</b> at <a class="link link-primary" href={`/search?`}><b>{data.institution}</b></a></span>
            <span>{data.gender}</span>
            <span>Born on {date_of_birth.toDateString()}</span>
            <span>{data.cellnumber == null?"":data.cellnumber}</span>
        </div> 
        <div class="divider"></div>
        <h1 class="text-lg font-bold text-pretty">Related Topics  and subjects:</h1>
        <div class="flex flex-wrap gap-3">
            {#each topics as topic}
            <a href={`/topics/${topic}`} class="link link-primary">{topic}</a>
            {/each}
        </div>
         
    </section>
    <section class="card lg:shadow p-5 lg:w-2/5">
        <h1 class="text-lg font-bold text-pretty">Posts</h1>
        <h1 class="text-lg font-bold text-pretty">Explore classrooms</h1>
        <h1 class="text-lg font-bold text-pretty">Tutoring services</h1>
    </section>
   
    

</main>