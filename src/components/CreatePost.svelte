<script>
	import { fade, fly } from "svelte/transition";

    export let user;
    const convertToMB = (bytes) => {
        return (bytes/(1024*1024)).toFixed(0);
    }

    const showModal = () =>{
        document.getElementById("createPost_modal").showModal();
        //console.log("showing")
    }
    //files, add them in an array then bind them to a control
    let files = [];
    let error = null;

    const handleFileChange = (event) => {
        let fileIn = event.target.files[0];
        if(convertToMB(fileIn.size) < 50){
            if(files.includes(fileIn)){
                error = "You already chose chose this file "+fileIn.name;
            }
            else{
                files = [...files,fileIn];
                error = null;
            }
        }
        else{
            error = "Cannot upload files above 50MB";
        }
        event.target.value = "";
        
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const text = document.getElementById("text").value;
        const formData = new FormData(event.target);

        if(files.length == 0 && text.length == 0){
            error = "Cannot make an empty post!";
        }
        else{
            error = "";
            // Append each file to the FormData object
            files.forEach((file, index) => {
            formData.append(`files[]`, file); // `files[]` ensures it's handled as an array on the server
            });
            formData.append('text', text);
            // Send the FormData to the SvelteKit action using fetch
        const response = await fetch('/portal?/submitPost', {
        method: 'POST',
        body: formData,
        });
        document.getElementById("createPost_modal").close();
        const result = await response.json();
        }
        

        
        

        

        //console.log(result);
    }
</script>

<div  class=" bg-slate-100 max-w-full overflow-x-hidden">
    <!--create post modal-->
    <dialog transition:fade id="createPost_modal" class="modal">
        <div class="modal-box w-11/12 max-w-4xl">
            <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><i class="fa fa-xmark"></i></button>
            </form>
            <h3 class="text-lg font-bold">Create post</h3>
            <form enctype="multipart/form-data" on:submit={handleSubmit} class="flex flex-col items-start p-5 gap-3">
                {#if files.length>0}
                    <p class="text-md font-bold">Files</p>
                    <div class="flex max-h-20  overflow-auto w-full gap-3 flex-wrap border p-3">
                        {#each files as file, index}
                            <div class="text-sm p-2 max-w-[200px] max-h-20 overflow-hidden card flex border"><button type="button" class="text-error link link-error" on:click={() => files = files.filter((_, i) => i !== index)}>Remove</button>{file.name} </div>

                        {/each}
                    </div>
                {/if}
                <label for="text">Content</label>
                <textarea name="text" id="text" class="textarea textarea-bordered textarea-lg w-full" placeholder="Ask for assistance..."></textarea>
                <label for="files">Files</label>
                <input on:change={handleFileChange} type="file" id="files" name="files" class="file-input file-input-bordered w-full max-w-xs" />
                {#if error != null}
                    <p class="text-red-500 text-sm">{error}</p>
                {/if}
                <button type="submit" class="btn btn-primary w-full">Post</button>
            </form>
        </div>
        </dialog>
    <h1 class="text-lg font-bold text-pretty">Create a post</h1>
    <div class="flex gap-2 items-center mt-5">
        <button class="btn btn-circle">FA</button>
        <input type="text" on:click={showModal} class="input input-bordered  w-full" readonly placeholder="Ask for assistance..."/>
    </div>
    <div class="my-5 grid grid-cols-3 md:flex gap-4 ">
        <button class="btn btn-ghost"><i class="fa fa-chalkboard-user text-primary text-xl"></i> Create a classroom</button>
        <button class="btn btn-ghost"><i class="fa fa-handshake text-secondary text-xl"></i> Offer Tutoring services</button>
        <button class="btn btn-ghost"><i class="fa fa-upload text-accent text-xl"></i> Upload Files</button>
    </div>
    <p class="text-sm text-info pt-5">You can Upload past question papers, notes and textbooks</p>
    
</div>