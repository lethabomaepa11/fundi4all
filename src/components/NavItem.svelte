<script>
	import Drawer from "./Drawer.svelte";

    export let className;
    export let href;
    export let icon;
    export let onclick;
    function handleClick(){
        if(onclick == "showMore"){
            showMore();
        }
        else{
            //navigate
        }
    }
    const showMore = () => {
        console.log("show the modal");
    }
    
</script>

{#if onclick=="showMore"}
<label for="my-drawer-4" class={`flex flex-col drawer-button justify-center items-center ${className} hover:text-primary`}>
    <i class={`fa fa-${icon} text-xl md:text-2xl`}></i>
    <span class="text-xs">
        <slot/>
    </span>
</label>
{:else}
<a href={href}  for="my-drawer-4" class={`flex flex-col drawer-button  justify-center items-center ${className} hover:text-primary`}>
    <i class={`fa fa-${icon} text-xl md:text-2xl`}></i>
    <span class="text-xs">
        <slot/>
    </span>
</a>
{/if}

