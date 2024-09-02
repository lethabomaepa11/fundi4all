<script>

	import MainNavigation from "../../components/MainNavigation.svelte";
    import NavItem from "../../components/NavItem.svelte";
    export let data;
    let initials = data.name.charAt(0).toUpperCase() + data.surname.charAt(0).toUpperCase();

</script>
<main>
    <MainNavigation data={data} initials={initials}/>
    <div class="py-20 z-0">
    <slot/>
</div>
    <div class="btm-nav lg:hidden shadow">
        <NavItem icon="fa fa-house" className="active" href="/portal">
            Home
        </NavItem>
        <NavItem icon="fa fa-users" href="/connections">
            Connections
        </NavItem>
        <NavItem icon="fa fa-chalkboard-user" href="/classrooms">
            Classrooms
        </NavItem>
        <NavItem icon="fa fa-message" href="/chats">
            Chats
        </NavItem>
    </div>
</main>