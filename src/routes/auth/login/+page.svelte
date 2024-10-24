<script>
    let error;
    async function handleLogin(event){
        event.preventDefault();
        error = null;
        const data = validate();
        const formData = new FormData(event.target);

        if(!error){
            formData.append('email',data.email);
            formData.append('password',data.password);
            let res = await fetch("/auth?/login", {
            method: "POST",
            body: formData,
            })
            res = await res.json();
            //console.log(res.data)
            let responseData = res.data;
            //const responseData = JSON.parse(await res.text());
            if(responseData == '["Wrong credentials"]'){
                //console.log(res)
                error = "Invalid login credentials";
                data.toast.style.display = "none";
            }else{
                location.reload();
            }
        }

    }
    const validate = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const toast = document.getElementById("toast");
        toast.style.display = "flex";
        if(emailRegex.test(email)){
            if(password.length >= 8){
                return {email: email, password: password, toast: toast}
            }
            else{
                error = "Password must be at least 8 characters long";
                toast.style.display = "none";
                return null;
            }
        }
        else{
            error = "Enter a valid email!";
            toast.style.display = "none";
            return null;
        }
    }
</script>

<head>
    <title>
        Login | fundi4All
    </title>
</head>
<div id="toast" class="toast hidden">
    <div class="alert alert-success flex">
        <span>Logging in...</span>
        <span class="loading loading-spinner loading-lg"></span>
    </div>
</div>
    <form on:submit={handleLogin} method="post" action="/auth?/login" class="bg-slate-100 card shadow flex flex-col gap-2 items-start p-10 lg:border w-full lg:w-2/5">
        <h2 class="text-2xl font-bold">Login</h2>
        {#if error}<p class="text-error text-sm">{@html error}</p>{/if}
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