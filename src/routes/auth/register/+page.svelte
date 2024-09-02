<script>

</script>
<head>
    <title>
        Register for an account
    </title>
</head>
    <form method="post" action="/auth?/registerUser" class="card shadow flex flex-col gap-2 items-start p-10 lg:border w-full lg:w-2/5">
        <h2 class="text-2xl font-bold">Register</h2>
        <div class="lg:grid lg:grid-cols-2 gap-2 items-start w-full">
            <div>
                <label for="name" class="">
                    Name
                </label>
                <input id="name" name="name" type="text" class="w-full input input-bordered flex items-center gap-2" placeholder="John" />    
            </div>
            <div>
                <label for="surname" class="">
                    Surname
                </label>
                <input id="surname" name="surname" type="text" class="w-full input input-bordered flex items-center gap-2" placeholder="Doe" />
            </div>
        </div>
        <label for="email" class="">
            Email
        </label>
        <input id="email" name="email" type="email" class="w-full input input-bordered flex items-center gap-2" placeholder="johndoe@gmail.com" /> 
          <label for="dateOfBirth" class="">
            Date of Birth
        </label>
        <input id="dateOfBirth" name="dateOfBirth" type="date" class="w-full input input-bordered flex items-center gap-2" placeholder="****" />    
        <label for="role" class="">
            Role:
        </label>
        <select id="role" name="role" class="select select-bordered w-full">
            <option disabled selected>What best describes you?</option>
            <option>Student</option>
            <option>Educator</option>
          </select>    
        <label for="password" class="">
            Create Password
        </label>
        <input id="password" name="password" type="password" class="w-full input input-bordered flex items-center gap-2" placeholder="****" />
        <button type="submit" class="btn btn-primary w-full">Register</button>
        <div class="divider"></div>
        <a href="/auth/login" class="btn btn-outline w-full">Login here...</a>
    </form>
    
