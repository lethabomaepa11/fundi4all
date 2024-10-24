<script>
    //show all the chats for this user
    export let data;
    //console.log(data)
</script>

<main  class="flex flex-col lg:flex-row justify-evenly items-start">
    {#if data.chats == null}
        <div>
            <p>No chats yet, start a new conversation</p>
        </div>
    {:else}
        <div>
            {#each data.chats as chat}
                <a href={`/chat/${chat.id}`}>Chat here</a>
            {/each}
        </div>
    {/if}
        
</main>