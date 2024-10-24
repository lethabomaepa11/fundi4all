<script>
	import { fade, fly, scale, slide } from 'svelte/transition';
	import CreatePost from '../../../components/CreatePost.svelte';
	import Posts from '../../../components/Posts.svelte';
    export const prerender = false;
    export let data;
    //console.log(data)
    let topics;
    if(data.topics != null)
        topics = data.topics.replace(" ","").split(",");
    else{
        topics = ["no topics"]
    }
    let date_of_birth = new Date(data.date_of_birth);

    const editBio = () => {data.canEdit && document.getElementById('my_modal_3').showModal()}
</script>
<title>
    {data.name} {data.surname} | fundi4All
</title>
<main transition:fade class="flex flex-col lg:flex-row justify-evenly items-start">
    <section class="profileCard card lg:shadow-lg p-5 w-full lg:w-2/4 bg-slate-100">
        <div class="bg-neutral-300 min-w-full h-[150px] rounded">
            <img class={`btn btn-circle w-[150px] h-[150px] mt-6 ml-5 absolute`}` src="/fundi4All full logo.png" alt={`${data.name} ${data.surname}`}/>
        </div>
        <div class="mt-7"></div>
        <h1 class="font-bold text-2xl">{data.name} {data.surname}</h1>
        <!-- Update bio modal -->
        <dialog id="my_modal_3" class="modal">
        <div class="modal-box">
            <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><i class="fa fa-xmark"></i></button>
            </form>
            <h3 class="text-lg font-bold">Bio</h3>
            <p class="py-4 text-sm">Update your bio</p>
            <form method="post" action="?/updateBio" class="flex flex-col items-center p-5 gap-3">
                <textarea name="bio" id="bio" class="textarea textarea-bordered w-full" placeholder="Describe yourself...">{data.bio == null?"":data.bio}</textarea>
                <button type="submit" class="btn btn-primary w-full">Confirm</button>
            </form>
        </div>
        </dialog>
        
        <button class="rounded my-5 text-left text-sm p-4 transition-all hover:bg-base-200" on:click={editBio}>
            <pre><span class="pre">{data.bio == null?"":data.bio}</span></pre>
        </button>

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
            <CreatePost user={data}/>
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
    <section class="card lg:shadow p-5 lg:w-2/5 bg-slate-100 overflow-hidden overflow-y-auto">
        <h1 class="text-lg font-bold text-pretty">Posts</h1>
        <Posts data={data}/>
        <h1 class="text-lg font-bold text-pretty">Explore classrooms</h1>
        <h1 class="text-lg font-bold text-pretty">Tutoring services</h1>
    </section>
   
    

</main>