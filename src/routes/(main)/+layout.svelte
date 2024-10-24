<script>
	import Drawer from "../../components/Drawer.svelte";
    export const prerender = false;

	import MainNavigation from "../../components/MainNavigation.svelte";
    import NavItem from "../../components/NavItem.svelte";
    export let data;
    let initials = data.name.charAt(0).toUpperCase() + data.surname.charAt(0).toUpperCase();

</script>
<main class="w-screen overflow-x-hidden">
    <Drawer/>
    <MainNavigation data={data} initials={initials}/>
    <div class="py-20 z-0 bg-slate-300 min-h-screen">
    <slot/>
</div>
    <div class="btm-nav lg:hidden shadow">
        <NavItem className="" onclick="navigate" icon="house" href="/portal">
            Home
        </NavItem>
        <NavItem className="" onclick="navigate" icon="users" href="/connections">
            Connections
        </NavItem>
        <NavItem className="" onclick="navigate" icon="message" href="/chat">
            Chats
        </NavItem>
        <NavItem className="" onclick="showMore" icon="bars" href="#">
            More
        </NavItem>
    </div>
</main>