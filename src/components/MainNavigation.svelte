<script>
	import NavItem from "./NavItem.svelte";
    export let data;
    export let initials;

</script>
<header class="navbar bg-white w-full shadow fixed z-40">
    <div class="navbar-start lg:flex">
      <a class="btn btn-ghost text-xl w-fit -mt-10 lg:mt-0" href="/portal"><img loading="lazy" alt="logo" class="lg:-mt-5"  width="100" height="100%"  src="/fundi4All full logo.png"></a>
    </div>

    <input type="text" id="search" name="search" class="input input-bordered w-full" style="margin-right: 2rem;" placeholder="Search"/>

      <div class="hidden lg:flex gap-5" style="gap: 2rem">
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

    <div>
        <!-- must not be displayed when in profile page of mine-->
      <a href={`/${data.profile_url}`} data-sveltekit-reload class="btn btn-circle bg-primary text-white" style="margin-left: 1rem;border-radius: 50%;aspect-ratio: 1;">{initials}</a>
    </div>
</header>
