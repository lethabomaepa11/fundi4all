<script>
    export let className;
    export let href;
    export let icon;
</script>
<a href={href}   class={`flex flex-col  justify-center items-center ${className} hover:text-primary`}><i class={`${icon} text-xl md:text-2xl `}></i><span class="text-sm">
    <slot/>
</span></a>
