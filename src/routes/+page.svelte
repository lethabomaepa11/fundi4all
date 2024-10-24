
<title>
    Home | fundi4All
</title>
<main>
    <header class="navbar shadow">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>tem 1</li>
              <li>
                Parent
                <ul class="p-2">
                  <li>Submenu 1</li>
                  <li>Submenu 2</li>
                </ul>
              </li>
              <li>Item 3</li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl w-fit" href="/"><img alt="logo" class="-mt-6"  width="100"  src="/fundi4All full logo.png"></a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>Item 1</li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul class="p-2">
                  <li>Submenu 1</li>
                  <li>Submenu 2</li>
                </ul>
              </details>
            </li>
            <li>Item 3</li>
          </ul>
        </div>
        <div class="navbar-end">
          <a href="/auth/login" class="md:btn md:btn-outline px-5">Login here</a>
        </div>
    </header>
    <section class="my-5 p-2 flex flex-col justify-center items-center">
      <h1 class="font-bold text-5xl">Fundi for me, for you, for <span class="text-primary">all</span>!!!</h1>
    </section>
</main>