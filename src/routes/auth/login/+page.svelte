
<head>
    <title>
        Login | fundi4All
    </title>
</head>

    <form method="post" action="/auth?/login" class="card shadow flex flex-col gap-2 items-start p-10 lg:border w-full lg:w-2/5">
        <h2 class="text-2xl font-bold">Login</h2>
        <label for="email" class="">
            Email
        </label>
        <input id="email" name="email" type="email" class="w-full input input-bordered flex items-center gap-2" placeholder="johndoe@gmail.com" />
        <label for="password" class="">
            Password
        </label>
        <input id="password" name="password" type="password" class="w-full input input-bordered flex items-center gap-2" placeholder="****" />
        <button type="submit" class="btn btn-primary w-full">Login</button>
        <a href="/login" class="link link-primary">Forgot password?</a>
        <div class="divider"></div>
        <a href="/auth/register" class="btn btn-outline w-full">Register here...</a>
    </form>