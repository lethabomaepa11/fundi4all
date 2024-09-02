<script>
	import NavItem from "./NavItem.svelte";
    export let data;
    export let initials;

</script>
<header class="navbar bg-white shadow fixed z-40">
    <div class="navbar-start lg:flex">
      <a class="btn btn-ghost text-xl w-fit" href="/portal"><img alt="logo" class="-mt-6"  width="100" height="100%"  src="/fundi4All full logo.png"></a>
    </div>

    <input type="text" class="input input-bordered w-full" style="margin-right: 2rem;" placeholder="Search"/>

      <div class="hidden lg:flex gap-5" style="gap: 2rem">
        <NavItem icon="fa fa-house" href="/portal">
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

    <div>
        <!-- must not be displayed when in profile page of mine-->
      <a href={`/${data.profile_url}`} class="btn btn-circle bg-primary text-white" style="margin-left: 1rem;border-radius: 50%;aspect-ratio: 1;">{initials}</a>
    </div>
</header>
