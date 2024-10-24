<script>
  const handleLogout = async () => {
    document.body.innerHTML += `<div class="toast">
  <div class="alert alert-error flex">
    <span>Logging out...</span>
    <span class="loading loading-spinner loading-lg"></span>
  </div>
</div>`;
    const response = await fetch('/portal?/logout', { method: "POST",headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // Or application/json depending on your backend setup
      } });

    if (response.ok) {
      // Redirect or handle successful logout
      window.location.href = '/auth/login';  // You can redirect or reload the page
    } else {
      console.error('Logout failed:', response.statusText);
    }
  };
</script>

<div class="drawer drawer-end z-50">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-slate-800 text-base-content min-h-full w-80 p-4">
            <li>
              <h2 class="menu-title text-xl text-base-300">More</h2>
              <ul>
                <li><a class="flex flex-col hover:bg-primary justify-start items-start gap-0">
                    <h2 class="text-md font-bold text-white">MeetUp</h2>
                    <p class="text-xs text-base-300">Students can organize meet ups and study groups with other students</p>
                </a>
                </li>
                <li><a class="flex flex-col hover:bg-primary justify-start items-start gap-0">
                    <h2 class="text-md font-bold text-white">Show us Your Res</h2>
                    <p class="text-xs text-base-300">Students can view, upload and rate the reses posted here</p>
                </a>
                </li>
                <li><a class="flex flex-col hover:bg-primary  justify-start items-start gap-0">
                    <h2 class="text-md font-bold text-white">Help a buddy</h2>
                    <p class="text-xs text-base-300">Students can ask for help here or just post a helpful tutorial or instruction</p>
                </a>
                </li>
                <li><a class="flex flex-col hover:bg-primary  justify-start items-start gap-0">
                    <h2 class="text-md font-bold text-white">Lost And Found</h2>
                    <p class="text-xs text-base-300">Lost items can be posted here and where to get them.</p>
                </a>
                </li>
                <li><a class="flex flex-col hover:bg-primary  justify-start items-start gap-0">
                    <h2 class="text-md font-bold text-white">Confessions</h2>
                    <p class="text-xs text-base-300">Spicy news in here🔥🔥🔥🔥</p>
                </a>
                </li>
                  <button on:click={handleLogout} class="fixed bottom-0 btn btn-error text-white w-2/3 mb-3">
                    <i class="fa fa-right-from-bracket"></i>Logout
                  </button>
              </ul>
            </li>
          </ul>
    </div>
  </div>